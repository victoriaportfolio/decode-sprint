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

// DECODE method tabs
const methodTabsEl = document.getElementById("method-tabs");
const methodPanelEl = document.getElementById("method-panel");

function renderMethodPanel(key) {
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

  methodPanelEl.innerHTML = `
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
}

function renderMethodTabs() {
  const keys = Object.keys(METHOD_DATA);
  methodTabsEl.innerHTML = keys
    .map(
      (key, i) => `
        <button class="method-tab${i === 0 ? " is-active" : ""}" data-tab="${key}">
          <span class="method-tab-letter">${METHOD_DATA[key].letter}</span>
          <span class="method-tab-title">${METHOD_DATA[key].title}</span>
        </button>`
    )
    .join("");

  methodTabsEl.querySelectorAll(".method-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      methodTabsEl.querySelectorAll(".method-tab").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderMethodPanel(btn.dataset.tab);
    });
  });

  renderMethodPanel(keys[0]);
}

if (methodTabsEl && methodPanelEl) renderMethodTabs();
