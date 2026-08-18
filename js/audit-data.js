// Метрики по бизнес-моделям — источник: фреймворк "Department of Product Design by Victoria Bright"
const AUDIT_DATA = {
  marketplace: {
    label: "Маркетплейсы",
    groups: [
      { name: "Acquisition", items: ["CAC", "Conversion rate", "Virality / viral cycle"] },
      { name: "Activation", items: ["% активных продавцов", "Cart abandonment rate", "Search × times rate"] },
      { name: "Retention", items: ["Churn rate", "Retention по когортам", "% повторных покупателей"] },
      { name: "Monetization", items: ["GMV growth rate", "LTV", "Take rate / комиссия"] },
    ],
  },
  ecommerce: {
    label: "E-commerce",
    groups: [
      { name: "Acquisition", items: ["CAC", "Conversion rate", "Daily / weekly active users"] },
      { name: "Activation", items: ["Sign up rate", "Add to cart rate", "Cart abandonment rate"] },
      { name: "Retention", items: ["Churn rate", "Repeat purchase rate", "NPS"] },
      { name: "Monetization", items: ["AOV", "LTV", "Gross merchandise volume"] },
    ],
  },
  mobile: {
    label: "Мобильные приложения",
    groups: [
      { name: "Acquisition", items: ["App downloads", "CPI", "CAC"] },
      { name: "Activation", items: ["Average session length", "Time to goal completion"] },
      { name: "Retention", items: ["Stickiness ratio (DAU/MAU)", "Churn rate"] },
      { name: "Monetization", items: ["LTV", "ARPU / ARPPU", "MRR"] },
    ],
  },
  saasb2b: {
    label: "SaaS B2B",
    groups: [
      { name: "Acquisition", items: ["Sales Qualified Leads", "Lead Velocity Rate", "Pipeline rate"] },
      { name: "Activation", items: ["Onboarding funnel", "Activation cost per user"] },
      { name: "Retention", items: ["Churn", "% активных аккаунтов", "Retention 7 / 30 / 90 дней"] },
      { name: "Monetization", items: ["MRR growth rate", "LTV / CAC ratio", "Expansion revenue"] },
    ],
  },
  saasb2c: {
    label: "SaaS B2C",
    groups: [
      { name: "Acquisition", items: ["CAC", "% реферальных пользователей"] },
      { name: "Activation", items: ["Time to value", "% пользователей в онбординге"] },
      { name: "Retention", items: ["MRR retention", "Churn rate"] },
      { name: "Monetization", items: ["ARPU", "LTV / CAC ratio"] },
    ],
  },
  media: {
    label: "Медиа / контент",
    groups: [
      { name: "Acquisition", items: ["Page views", "CAC", "Conversion в подписку"] },
      { name: "Activation", items: ["Reading depth", "Time on page"] },
      { name: "Retention", items: ["Returning visitors", "Bounce rate"] },
      { name: "Monetization", items: ["Ads revenue (CPM / CPC)", "Retention подписки"] },
    ],
  },
};
