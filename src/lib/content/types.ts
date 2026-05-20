export interface BaseSection {
  id: string;
  eyebrow: string;
  title: string;
  kicker?: string;
  paragraphs: string[];
}

export interface Card {
  num?: string;
  tag?: string;
  title: string;
  text: string;
}

export interface Metric {
  num?: string;
  label: string;
  figure: string;
  prefix?: string;
  suffix?: string;
  description: string;
}

export interface TimelineEvent {
  quarter: string;
  span: string;
  theme: string;
  description: string;
  bullets: string[];
}

export interface Agent {
  tag: string;
  title: string;
  text: string;
}

export interface TableRow {
  cols: string[];
}

export interface BudgetRow {
  item: string;
  value: string;
  notes: string;
}

export interface BudgetCategory {
  name: string;
  rows: BudgetRow[];
}

export interface PositionRow {
  dimension: string;
  baseline: string;
  position: string;
}

export interface KPIIndicator {
  indicator: string;
  baseline: string;
  target: string;
  owner: string;
}
