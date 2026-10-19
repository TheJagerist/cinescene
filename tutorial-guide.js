/* ══════════════════════════════════════════════════════════
   TUTORIEL GUIDÉ — CinéScène (démo mock)
   À inclure sur TOUTES les pages, juste après mock-api.js :
   <script src="tutorial-guide.js"></script>
   ══════════════════════════════════════════════════════════ */
(function () {
  const STATE_KEY = 'cp_tutorial_state';
  const CLIENT_PAGES = ['index.html', 'programme.html', 'market.html', 'events.html', 'contact.html', 'compte.html', 'authentification.html'];

  function currentPage() {
    const p = location.pathname.split('/').pop();
    return p || 'index.html';
  }

  function isMobileLayout() {
    const burger = document.querySelector('.burger-btn');
    if (burger) return getComputedStyle(burger).display !== 'none';
    return window.innerWidth <= 1100;
  }

  function getDB() {
    try { return JSON.parse(localStorage.getItem('cp_mock_session') || '{}'); }
    catch (e) { return {}; }
  }

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STATE_KEY)) || { started: false, dismissed: false, step: 0, baselineStep: -1, baseline: {} }; }
    catch (e) { return { started: false, dismissed: false, step: 0, baselineStep: -1, baseline: {} }; }
  }
  function saveState(s) { localStorage.setItem(STATE_KEY, JSON.stringify(s)); }

  /* ── Définition des étapes ─────────────────────────────── */
  const STEPS = [
    {
      pages: 'client',
      title: '1️⃣ Connexion Client',
      html: "Bonjour et bienvenu dans ce tutoriel sur le parcours de paiement de l'application CinéScène.\n  Vous pouvez déplacer ce guide à votre guise s'il obstrue l'accessibilité de votre écran.\n Pour commencer, connectez-vous avec l'identifiant <b>demo</b> et le mot de passe <b>demo1234</b> (bouton « Se connecter » en haut à droite).",
      htmlMobile: "Bonjour et bienvenu dans ce tutoriel sur le parcours de paiement de l'application CinéScène.\n  Vous pouvez réduire ce guide à tout moment via l'icone (-) en haut à droite et la déplacer à votre guise s'il obstrue l'accessibilité de votre écran.\n Pour commencer,connectez-vous avec l'identifiant <b>demo</b> et le mot de passe <b>demo1234</b> — ouvrez le menu <b>☰</b> en haut à droite puis touchez « Se connecter ».",
      targetMobile: '#burger-btn',
      check: db => db.session && db.session.loggedIn === true,
    },
    {
      pages: 'client',
      title: '2️⃣ Réservez une place',
      html: "Rendez-vous sur <b>Market</b>, choisissez un film et cliquez sur <b>Réserver</b> (50% maintenant, reste sur place) — cela génère un ticket de solde et son QR code.",
      onEnter: (db, s) => { s.baseline.commandes = (db.commandes || []).length; },
      check: (db, s) => (db.commandes || []).length > (s.baseline.commandes ?? 0),
    },
    {
      pages: 'client',
      title: '3️⃣ Copiez votre code',
      html: "Copiez le <b>code d'entrée</b> affiché (bouton « Copier »), puis cliquez sur <b>Parfait, fermer</b>. Rendez-vous ensuite sur <b>Mon Compte</b> via l'icône en haut à droite de la page.",
      htmlMobile: "Copiez le <b>code d'entrée</b> affiché (bouton « Copier »), puis touchez <b>Parfait, fermer</b>. Ouvrez ensuite le menu <b>☰</b> et touchez « Mon compte ».",
      target: '.code-value',
      manual: true,
      buttonLabel: "C'est fait, continuer",
    },
    {
      pages: 'client',
      title: '4️⃣ Votre billet en attente',
      html: "Voici votre <b>Mon Compte</b> : le billet apparaît « En attente de règlement » avec son QR code de réservation. Une fois le code bien en main, connectez-vous à l'espace admin pour l'encaisser.",
      target: '.billet-card.pending',
      manual: true,
      buttonLabel: 'Continuer',
    },
    {
      pages: ['admin-login.html'],
      title: '5️⃣ Connexion Admin',
      html: "Connectez-vous à l'espace administrateur avec l'identifiant <b>admin</b> et le mot de passe <b>admin1234</b>.",
      target: '#login-form',
      check: db => db.session && db.session.isAdmin === true,
    },
    {
      pages: ['admin.html'],
      title: '6️⃣ Encaisser le solde',
      html: "Collez le code du ticket de solde dans le champ de scan, cliquez sur <b>Scanner</b>, puis sur <b>Valider le solde encaissé</b>. Cela génère automatiquement le billet d'entrée.",
      target: '#scan-code-input',
      onEnter: (db, s) => { s.baseline.commandesPaye = (db.commandes || []).filter(c => c.statut === 'paye').length; },
      check: (db, s) => (db.commandes || []).filter(c => c.statut === 'paye').length > (s.baseline.commandesPaye ?? 0),
    },
    {
      pages: ['admin.html'],
      title: '7️⃣ Scanner le billet d\'entrée',
      html: "Le nouveau billet d'entrée (affiché en bas de l'écran) est maintenant scannable. Copiez son code et scannez-le à nouveau pour valider l'accès en salle — cela crédite les points de fidélité.",
      target: '#scan-code-input',
      onEnter: (db, s) => { s.baseline.points = (db.user && db.user.points_fidelite) || 0; },
      check: (db, s) => ((db.user && db.user.points_fidelite) || 0) > (s.baseline.points ?? 0),
    },
    {
      pages: ['compte.html'],
      title: '8️⃣ Historique & points',
      html: "Retournez sur <b>Mon Compte</b> côté client (actualisez si besoin) : votre commande apparaît désormais <b>Payée</b> dans l'historique, avec les points crédités et un billet d'entrée valide scannable.<br><br><b>Bravo !</b> Vous avez assimilé l'essentiel du parcours de paiement CinéScène — de la réservation à l'encaissement, en passant par la validation du billet et le crédit des points de fidélité.",
      target: '.historique-table-wrap',
      manual: true,
      buttonLabel: 'Terminer',
      isFinal: true,
    },
  ];

  function stepMatchesPage(step, page) {
    if (step.pages === 'client') return CLIENT_PAGES.includes(page);
    if (Array.isArray(step.pages)) return step.pages.includes(page);
    return true;
  }
  function stepHomePage(step) {
    if (step.pages === 'client') return 'index.html';
    if (Array.isArray(step.pages)) return step.pages[0];
    return null;
  }

  /* ── Styles ────────────────────────────────────────────── */
  function injectStyles() {
    if (document.getElementById('cp-tuto-style')) return;
    const css = `
      .cp-tuto-bubble {
        position: fixed; bottom: 24px; right: 24px; max-width: 340px;
        background: linear-gradient(155deg, #ff8c00, #915102);
        color: white; border-radius: 14px; padding: 18px 20px;
        box-shadow: 0 16px 40px rgba(0,0,0,0.5); z-index: 100000;
        font-family: 'Inter', sans-serif; animation: cpTutoIn 0.35s ease;
      }
      .cp-tuto-badge {
        position: fixed; bottom: 24px; right: 24px; max-width: 300px;
        background: #1a1a1a; border: 1.5px solid #ff8c00; color: white;
        border-radius: 12px; padding: 14px 16px; z-index: 100000;
        font-family: 'Inter', sans-serif; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        animation: cpTutoIn 0.35s ease;
      }
      @media (max-width: 480px) {
        .cp-tuto-bubble, .cp-tuto-badge {
          left: 8px; right: 8px; bottom: 8px; max-width: none;
          padding: 12px 14px; max-height: 40vh; overflow-y: auto;
        }
        .cp-tuto-bubble.cp-tuto-collapsed, .cp-tuto-badge.cp-tuto-collapsed {
          max-height: none; padding: 10px 14px;
        }
        .cp-tuto-collapsed .cp-tuto-text,
        .cp-tuto-collapsed .cp-tuto-actions,
        .cp-tuto-collapsed .cp-tuto-waiting { display: none; }
        .cp-tuto-collapsed .cp-tuto-title { margin-bottom: 0; }
        .cp-tuto-toggle {
          display: inline-flex; float: right; background: rgba(255,255,255,0.2);
          border: none; color: white; width: 22px; height: 22px; border-radius: 6px;
          font-size: 13px; font-weight: 800; cursor: pointer; align-items: center; justify-content: center;
        }
      }
      @keyframes cpTutoIn { from { opacity:0; transform: translateY(14px);} to {opacity:1; transform: translateY(0);} }
      .cp-tuto-title { font-weight: 800; font-size: 14px; margin-bottom: 8px; }
      .cp-tuto-text { font-size: 12.5px; line-height: 1.5; opacity: 0.95; }
      .cp-tuto-actions { display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap; }
      .cp-tuto-btn {
        border: none; border-radius: 7px; padding: 8px 12px; font-size: 11.5px;
        font-weight: 700; cursor: pointer;
      }
      .cp-tuto-btn.primary { background: white; color: #915102; }
      .cp-tuto-btn.ghost { background: rgba(255,255,255,0.15); color: white; }
      .cp-tuto-waiting { font-size: 11px; opacity: 0.85; margin-top: 10px; display:flex; align-items:center; gap:6px; }
      .cp-tuto-dot { width:7px; height:7px; border-radius:50%; background:white; animation: cpTutoPulse 1s infinite; }
      @keyframes cpTutoPulse { 0%,100%{opacity:0.3;} 50%{opacity:1;} }
      .cp-tuto-highlight { outline: 3px solid #ff8c00 !important; outline-offset: 3px; border-radius: 8px; }
      .cp-tuto-prompt-overlay {
        position: fixed; inset:0; background: rgba(0,0,0,0.6); z-index: 100001;
        display:flex; align-items:center; justify-content:center;
      }
      .cp-tuto-prompt-box {
        background:#161616; border:1px solid rgba(255,140,0,0.3); border-radius:14px;
        padding:28px; max-width:380px; text-align:center; color:white; font-family:'Inter',sans-serif;
      }
      .cp-tuto-prompt-box h3 { color:#ff8c00; font-size:17px; margin-bottom:10px; }
      .cp-tuto-prompt-box p { font-size:13px; opacity:0.8; margin-bottom:18px; line-height:1.5; }
      .cp-tuto-bubble, .cp-tuto-badge { touch-action: none; }
      .cp-tuto-title { cursor: move; user-select: none; }
    `;
    const style = document.createElement('style');
    style.id = 'cp-tuto-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  let highlightedEl = null;
  function clearHighlight() {
    if (highlightedEl) { highlightedEl.classList.remove('cp-tuto-highlight'); highlightedEl = null; }
  }
  function applyHighlight(selector) {
    clearHighlight();
    if (!selector) return;
    const el = document.querySelector(selector);
    if (el) { el.classList.add('cp-tuto-highlight'); highlightedEl = el; }
  }

  function removeUI() {
    document.querySelectorAll('.cp-tuto-bubble, .cp-tuto-badge').forEach(e => e.remove());
    clearHighlight();
  }

  function advance(state) {
    state.step += 1;
    state.baseline = {};
    saveState(state);
    removeUI();
    lastRenderedKey = null; // force un rendu propre de la prochaine étape
  }

  function skipAll() {
    const state = loadState();
    state.dismissed = true;
    saveState(state);
    removeUI();
  }

  function wireToggle(box) {
    const toggleBtn = box.querySelector('#cp-tuto-toggle');
    if (toggleBtn) toggleBtn.onclick = () => {
      box.classList.toggle('cp-tuto-collapsed');
      toggleBtn.textContent = box.classList.contains('cp-tuto-collapsed') ? '+' : '−';
    };
  }

  function wireDrag(box) {
    const handle = box.querySelector('.cp-tuto-title');
    if (!handle) return;
    let dragging = false, startX, startY, startLeft, startTop;

    handle.addEventListener('pointerdown', (e) => {
      if (e.target.id === 'cp-tuto-toggle') return; // ne pas drag en cliquant le bouton −/+
      dragging = true;
      const rect = box.getBoundingClientRect();
      startX = e.clientX; startY = e.clientY;
      startLeft = rect.left; startTop = rect.top;
      box.style.right = 'auto'; box.style.bottom = 'auto';
      box.style.left = startLeft + 'px'; box.style.top = startTop + 'px';
      handle.setPointerCapture(e.pointerId);
    });
    handle.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      let newLeft = startLeft + (e.clientX - startX);
      let newTop = startTop + (e.clientY - startY);
      const maxLeft = window.innerWidth - box.offsetWidth - 4;
      const maxTop = window.innerHeight - box.offsetHeight - 4;
      newLeft = Math.max(4, Math.min(newLeft, maxLeft));
      newTop = Math.max(4, Math.min(newTop, maxTop));
      box.style.left = newLeft + 'px';
      box.style.top = newTop + 'px';
    });
    handle.addEventListener('pointerup', () => { dragging = false; });
    handle.addEventListener('pointercancel', () => { dragging = false; });
  }

  function renderBubble(step, state) {
    const mobile = isMobileLayout();
    const html = (mobile && step.htmlMobile) ? step.htmlMobile : step.html;
    const target = (mobile && step.targetMobile !== undefined) ? step.targetMobile : step.target;
    applyHighlight(target);
    const box = document.createElement('div');
    box.className = 'cp-tuto-bubble';
    const toggleHtml = mobile ? '<button class="cp-tuto-toggle" id="cp-tuto-toggle">−</button>' : '';
    const waitingHtml = step.manual
      ? `<div class="cp-tuto-actions">
           <button class="cp-tuto-btn primary" id="cp-tuto-next">${step.buttonLabel || 'Continuer'}</button>
           ${!step.isFinal ? '<button class="cp-tuto-btn ghost" id="cp-tuto-skip">Passer le tuto</button>' : ''}
         </div>`
      : `<div class="cp-tuto-waiting"><span class="cp-tuto-dot"></span> En attente de votre action…</div>
         <div class="cp-tuto-actions">
           <button class="cp-tuto-btn ghost" id="cp-tuto-skip">Passer le tuto</button>
         </div>`;
    box.innerHTML = `<div class="cp-tuto-title">${step.title}${toggleHtml}</div><div class="cp-tuto-text">${html}</div>${waitingHtml}`;
    document.body.appendChild(box);
    wireToggle(box);
    wireDrag(box);
    const nextBtn = document.getElementById('cp-tuto-next');
    if (nextBtn) nextBtn.onclick = () => {
      if (step.isFinal) { skipAll(); } else { advance(state); }
    };
    const skipBtn = document.getElementById('cp-tuto-skip');
    if (skipBtn) skipBtn.onclick = skipAll;
  }

  function renderBadge(step) {
    const mobile = isMobileLayout();
    const html = (mobile && step.htmlMobile) ? step.htmlMobile : step.html;
    const home = stepHomePage(step);
    const box = document.createElement('div');
    box.className = 'cp-tuto-badge';
    const toggleHtml = mobile ? '<button class="cp-tuto-toggle" id="cp-tuto-toggle">−</button>' : '';
    box.innerHTML = `
      <div class="cp-tuto-title">${step.title}${toggleHtml}</div>
      <div class="cp-tuto-text">${html}</div>
      <div class="cp-tuto-actions">
        ${home ? `<a class="cp-tuto-btn primary" style="text-decoration:none;" href="${home}">Aller à cette page</a>` : ''}
        <button class="cp-tuto-btn ghost" id="cp-tuto-skip">Passer le tuto</button>
      </div>`;
    document.body.appendChild(box);
    wireToggle(box);
    wireDrag(box);
    document.getElementById('cp-tuto-skip').onclick = skipAll;
  }

  function showStartPrompt() {
    const overlay = document.createElement('div');
    overlay.className = 'cp-tuto-prompt-overlay';
    overlay.innerHTML = `
      <div class="cp-tuto-prompt-box">
        <h3>Visite guidée ?</h3>
        <p>Souhaitez-vous un guide pas-à-pas pour découvrir le parcours complet (admin + client) de CinéScène ?</p>
        <div class="cp-tuto-actions" style="justify-content:center;">
          <button class="cp-tuto-btn primary" id="cp-tuto-yes" style="background:#ff8c00;color:white;">Oui, guidez-moi</button>
          <button class="cp-tuto-btn ghost" id="cp-tuto-no">Non merci</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    document.getElementById('cp-tuto-yes').onclick = () => {
      const state = { started: true, dismissed: false, step: 0, baselineStep: -1, baseline: {} };
      saveState(state);
      overlay.remove();
      tick();
    };
    document.getElementById('cp-tuto-no').onclick = () => {
      saveState({ started: false, dismissed: true, step: 0, baselineStep: -1, baseline: {} });
      overlay.remove();
    };
  }

  /* ── Boucle principale ─────────────────────────────────── */
  let lastRenderedKey = null;

  function tick() {
    const state = loadState();
    if (!state.started || state.dismissed) return;
    let step = STEPS[state.step];
    if (!step) { skipAll(); return; }
    let db = getDB();

    if (state.baselineStep !== state.step) {
      if (step.onEnter) step.onEnter(db, state);
      state.baselineStep = state.step;
      saveState(state);
    }

    // Vérifie la condition même si on a déjà quitté la page (redirections
    // immédiates après connexion/déconnexion, plus rapides que le polling).
    if (!step.manual && step.check && step.check(db, state)) {
      advance(state);
      step = STEPS[state.step];
      if (!step) { skipAll(); return; }
      if (state.baselineStep !== state.step) {
        if (step.onEnter) step.onEnter(db, state);
        state.baselineStep = state.step;
        saveState(state);
      }
    }

    const onRightPage = stepMatchesPage(step, currentPage());
    const renderKey = state.step + '|' + currentPage() + '|' + (onRightPage ? 'bubble' : 'badge') + '|' + (isMobileLayout() ? 'm' : 'd');

    if (renderKey !== lastRenderedKey) {
      removeUI();
      if (onRightPage) renderBubble(step, state);
      else renderBadge(step);
      lastRenderedKey = renderKey;
    }
  }

  /* ── Init ──────────────────────────────────────────────── */
  function init() {
    injectStyles();
    const raw = localStorage.getItem(STATE_KEY);
    if (!raw) { setTimeout(showStartPrompt, 1200); return; }
    setTimeout(tick, 1000);
    setInterval(tick, 1500);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.cpTutorialReset = function () { localStorage.removeItem(STATE_KEY); location.reload(); };
})();