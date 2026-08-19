// Scroll-reveal for [data-reveal] blocks
const revealEls = document.querySelectorAll("[data-reveal]");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);
revealEls.forEach((el) => revealObserver.observe(el));

// Business-model audit tabs
const tabsEl = document.getElementById("audit-tabs");
const panelEl = document.getElementById("audit-panel");

function renderAuditPanel(key) {
  const data = AUDIT_DATA[key];
  panelEl.innerHTML = data.groups
    .map(
      (group) => `
        <div>
          <p class="text-xs tracking-widest text-lime uppercase mb-3">${group.name}</p>
          <ul class="space-y-2">
            ${group.items.map((item) => `<li class="text-sm text-white/85 leading-snug">${item}</li>`).join("")}
          </ul>
        </div>`
    )
    .join("");
}

function renderAuditTabs() {
  const keys = Object.keys(AUDIT_DATA);
  tabsEl.innerHTML = keys
    .map(
      (key, i) =>
        `<button class="audit-tab${i === 0 ? " is-active" : ""}" data-tab="${key}">${AUDIT_DATA[key].label}</button>`
    )
    .join("");

  tabsEl.querySelectorAll(".audit-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      tabsEl.querySelectorAll(".audit-tab").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderAuditPanel(btn.dataset.tab);
    });
  });

  renderAuditPanel(keys[0]);
}

if (tabsEl && panelEl) renderAuditTabs();

// DECODE method — accordion panel opens right under the clicked button,
// on every breakpoint (mobile: 1 col, so "under the button" is literal;
// desktop: full-width panel bumped to the next grid row via col-span-full + dense packing).
const methodGridEl = document.getElementById("method-grid");

function buildMethodPanel(key) {
  const data = METHOD_DATA[key];
  const blocksHtml = data.blocks
    .map(
      (block) => `
        <div>
          <p class="text-xs tracking-widest text-lime uppercase mb-3">${block.label}</p>
          <ul class="space-y-2">
            ${block.items.map((item) => `<li class="text-sm text-white/85 leading-relaxed">${item}</li>`).join("")}
          </ul>
        </div>`
    )
    .join("");

  const caseHtml = data.caseStudy
    ? `
      <a href="${data.caseStudy.url}" target="_blank" rel="noopener" class="case-study-link">
        <p class="text-xs tracking-widest text-pink uppercase mb-2">${data.caseStudy.label}</p>
        <p class="font-display font-semibold text-sm">${data.caseStudy.title}</p>
        <p class="text-sm text-muted mt-2 leading-relaxed">${data.caseStudy.text}</p>
        <p class="text-xs text-lime mt-3">Смотреть на Behance ↗</p>
      </a>`
    : "";

  const panel = document.createElement("div");
  panel.className = "method-panel col-span-full rounded-2xl bg-surface border border-line/60 p-7 sm:p-9";
  panel.innerHTML = `
    <div class="flex items-start gap-4 mb-7">
      <span class="method-letter method-letter-lg">${data.letter}</span>
      <div>
        <h3 class="font-display font-bold text-xl">${data.title}</h3>
        <p class="text-sm text-muted mt-1">${data.tagline}</p>
      </div>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">${blocksHtml}</div>
    ${caseHtml}
  `;
  return panel;
}

function renderMethodGrid() {
  const keys = Object.keys(METHOD_DATA);
  methodGridEl.innerHTML = keys
    .map(
      (key, i) => `
        <button class="method-tab${i === 0 ? " is-active" : ""}" data-tab="${key}">
          <span class="method-tab-letter">${METHOD_DATA[key].letter}</span>
          <span class="method-tab-title">${METHOD_DATA[key].title}</span>
        </button>`
    )
    .join("");

  const buttons = methodGridEl.querySelectorAll(".method-tab");

  function activate(key, btn) {
    buttons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const oldPanel = methodGridEl.querySelector(".method-panel");
    if (oldPanel) oldPanel.remove();
    btn.insertAdjacentElement("afterend", buildMethodPanel(key));
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => activate(btn.dataset.tab, btn));
  });

  activate(keys[0], buttons[0]);
}

if (methodGridEl) renderMethodGrid();

// Result / ROI by niche
const resultTabsEl = document.getElementById("result-tabs");
const resultPanelEl = document.getElementById("result-panel");

function renderResultPanel(key) {
  const data = RESULT_DATA[key];
  resultPanelEl.innerHTML = data.cards
    .map(
      (card) => `
        <div class="result-card">
          <h3 class="font-display font-semibold text-base">${card.title}</h3>
          <p class="text-xs tracking-widest text-pink uppercase mt-4">Куда утекают деньги</p>
          <p class="text-sm text-white/80 mt-2 leading-relaxed">${card.pain}</p>
          <p class="text-xs tracking-widest text-lime uppercase mt-4">Что получаете</p>
          <p class="text-sm text-white/80 mt-2 leading-relaxed">${card.result}</p>
        </div>`
    )
    .join("");
}

function renderResultTabs() {
  const keys = Object.keys(RESULT_DATA);
  resultTabsEl.innerHTML = keys
    .map(
      (key, i) =>
        `<button class="audit-tab${i === 0 ? " is-active" : ""}" data-tab="${key}">${RESULT_DATA[key].label}</button>`
    )
    .join("");

  resultTabsEl.querySelectorAll(".audit-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      resultTabsEl.querySelectorAll(".audit-tab").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderResultPanel(btn.dataset.tab);
    });
  });

  renderResultPanel(keys[0]);
}

if (resultTabsEl && resultPanelEl) renderResultTabs();

// Weekly Sprint plan
const weeksTabsEl = document.getElementById("weeks-tabs");
const weeksPanelEl = document.getElementById("weeks-panel");

function renderWeeksPanel(key) {
  const data = WEEKS_DATA[key];
  weeksPanelEl.innerHTML = `
    <div class="flex items-start justify-between flex-wrap gap-3 mb-6">
      <div>
        <h3 class="font-display font-bold text-xl">${data.title}</h3>
        <p class="text-xs tracking-widest text-pink uppercase mt-2">${data.method}</p>
      </div>
    </div>
    <ul class="space-y-3">
      ${data.items
        .map(
          (item) => `
        <li class="flex gap-3">
          <span class="check">✓</span>
          <span class="text-sm text-white/85 leading-relaxed">${item}</span>
        </li>`
        )
        .join("")}
    </ul>
    <div class="mt-6 pt-6 border-t border-line/60">
      <p class="text-xs tracking-widest text-lime uppercase mb-2">На выходе</p>
      <p class="text-sm text-white/85 leading-relaxed">${data.deliverable}</p>
    </div>
  `;
}

function renderWeeksTabs() {
  const keys = Object.keys(WEEKS_DATA);
  weeksTabsEl.innerHTML = keys
    .map(
      (key, i) =>
        `<button class="audit-tab${i === 0 ? " is-active" : ""}" data-tab="${key}">${WEEKS_DATA[key].label}</button>`
    )
    .join("");

  weeksTabsEl.querySelectorAll(".audit-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      weeksTabsEl.querySelectorAll(".audit-tab").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderWeeksPanel(btn.dataset.tab);
    });
  });

  renderWeeksPanel(keys[0]);
}

if (weeksTabsEl && weeksPanelEl) renderWeeksTabs();
