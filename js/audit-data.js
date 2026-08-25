// Что разбираем на каждой стадии продукта — ось: стадия, а не индустрия
const AUDIT_DATA = {
  stage01: {
    label: "0 → 1",
    groups: [
      { name: "Позиционирование", items: ["Отвечает ли продукт на «зачем»", "Проверено ли на реальной аудитории, а не на предположениях"] },
      { name: "UX Flow", items: ["Путь до первой ценности", "Не растянут ли ключевой сценарий лишними шагами"] },
      { name: "Архитектура", items: ["Заложена ли основа для роста", "Не придётся ли всё переделывать через полгода"] },
      { name: "Формат", items: ["Discovery + Concept-lite", "Дешёвый вход, не полный Sprint"] },
    ],
  },
  growth: {
    label: "Рост",
    groups: [
      { name: "Acquisition / Activation", items: ["Conversion rate", "Onboarding completion", "CAC"] },
      { name: "Retention", items: ["Churn rate", "Retention по когортам"] },
      { name: "Monetization", items: ["LTV", "ARPU", "Revenue growth rate"] },
      { name: "Формат", items: ["DECODE Sprint", "200 000 ₽ / 4 недели"] },
    ],
  },
  retention: {
    label: "Аудит / удержание",
    groups: [
      { name: "Churn drivers", items: ["На каком шаге пользователь принимает решение уйти"] },
      { name: "Support load", items: ["Какие обращения повторяются чаще всего", "Почему они повторяются"] },
      { name: "Compliance", items: ["Соответствует ли UX новым требованиям после миграции на отечественное ПО"] },
      { name: "Формат", items: ["Ежемесячный retainer", "Аудит метрик + итерации"] },
    ],
  },
};
