// Метрики по бизнес-моделям — источник: фреймворк "Department of Product Design by Victoria Bright"
const AUDIT_DATA = {
  fintech: {
    label: "Fintech",
    groups: [
      { name: "Acquisition", items: ["CAC", "Conversion в верификацию (KYC)", "Cost per funded account"] },
      { name: "Activation", items: ["% прошедших KYC", "Time to first transaction", "Onboarding completion rate"] },
      { name: "Retention", items: ["Churn rate", "Monthly active accounts", "Retention после первой транзакции"] },
      { name: "Monetization", items: ["ARPU", "Take rate / комиссия за транзакцию", "LTV"] },
    ],
  },
  crypto: {
    label: "Crypto",
    groups: [
      { name: "Acquisition", items: ["CAC", "Cost per funded wallet", "Conversion в первый депозит"] },
      { name: "Activation", items: ["% с завершённым KYC", "Time to first trade", "Wallet connection rate"] },
      { name: "Retention", items: ["Churn rate", "Trading frequency", "Retention после первой сделки"] },
      { name: "Monetization", items: ["Trading volume", "Fee revenue per user", "LTV"] },
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
  mobile: {
    label: "Мобильные приложения",
    groups: [
      { name: "Acquisition", items: ["App downloads", "CPI", "CAC"] },
      { name: "Activation", items: ["Average session length", "Time to goal completion"] },
      { name: "Retention", items: ["Stickiness ratio (DAU/MAU)", "Churn rate"] },
      { name: "Monetization", items: ["LTV", "ARPU / ARPPU", "MRR"] },
    ],
  },
  ai: {
    label: "AI платформы",
    groups: [
      { name: "Acquisition", items: ["CAC", "Conversion в free trial / demo", "Cost per activated user"] },
      { name: "Activation", items: ["% пользователей, завершивших первый сценарий", "Time to first successful output"] },
      { name: "Retention", items: ["Retention после первого использования", "Churn rate", "Queries / session в неделю"] },
      { name: "Monetization", items: ["ARPU", "Conversion free → paid", "LTV / CAC ratio"] },
    ],
  },
};
