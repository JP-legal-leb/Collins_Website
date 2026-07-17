/**
 * Single source of truth for site content.
 * Content derived from Collins advisory positioning
 * direction document and the Collins Advisory Group company profile.
 */

export interface NavItem {
  label: string;
  path: string;
}

export interface Suite {
  index: string;
  title: string;
  tagline: string;
  points: string[];
  outcome: string;
}

export interface Tier {
  key: string;
  name: string;
  headline: string;
  target: string;
  positioning: string;
  groups: { label?: string; items: string[] }[];
  value: string[];
  buyer: string;
  featured?: boolean;
}

export interface LadderStep {
  stage: string;
  need: string;
  trigger: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Principle {
  title: string;
  body: string;
}

export interface PressFeature {
  outlet: string;
  headline: string;
  date: string;
  url: string;
  excerpt: string;
}

export interface Client {
  name: string;
  logo: string;
}

export const COMPANY = {
  name: 'Collins Advisory Group',
  shortName: 'Collins',
  tagline: 'Trusted advisory',
  promise: 'Accounting, tax and financial advisory',
  regions: ['United Kingdom', 'United Arab Emirates', 'Saudi Arabia'],
  email: 'admin@collinsadvisers.com',
  phones: ['+44 2045799462', '+971 52 585 0242'],
  website: 'collinsadvisers.com',
  linkedinUrl: 'https://www.linkedin.com/company/collins-advisory-group/',
  responseTime: 'We aim to respond to all emails within 24 hours.',
};

export const PRESS: PressFeature[] = [
  {
    outlet: 'Business Insider',
    headline:
      'Collins Advisory Group Expands Services in GCC, Offering Specialized Tax and Bookkeeping Solutions',
    date: 'January 2025',
    url: 'https://markets.businessinsider.com/news/stocks/collins-advisory-group-expands-services-in-gcc-offering-specialized-tax-and-bookkeeping-solutions-1034284094',
    excerpt:
      'Collins Advisory Group expands its GCC services to include tax advisory and bookkeeping solutions — combining local expertise with advanced technology to help businesses maintain compliance and achieve sustainable growth.',
  },
];

export const NAV: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Contact', path: '/contact' },
];

export const CLIENTS: Client[] = [
  { name: 'Digitalli', logo: '/clients/digitalli.png' },
  { name: 'Elie Saab', logo: '/clients/elie-saab.png' },
  { name: 'Fermendom', logo: '/clients/fermendom.png' },
  { name: 'TPM Leading Brands', logo: '/clients/tpm.png' },
  { name: 'BAT', logo: '/clients/bat.png' },
  { name: 'GT-AI', logo: '/clients/gt-ai.png' },
  { name: 'G.W.R Consulting', logo: '/clients/gwr-consulting.png' },
  { name: 'Mirage Travel', logo: '/clients/mirage-travel.png' },
  { name: 'Del Ponte', logo: '/clients/del-ponte.png' },
  { name: 'JP Legal', logo: '/clients/jp-legal.png' },
  { name: 'Vidiwell', logo: '/clients/vidiwell.png' },
  { name: 'Berkshire Hathaway', logo: '/clients/berkshire-hathaway.png' },
  { name: 'RST Resources Stage Technologies', logo: '/clients/rst.png' },
  { name: 'World House Capital', logo: '/clients/world-house-capital.png' },
  { name: 'SBCM', logo: '/clients/sbcm.png' },
  { name: 'AM Capital', logo: '/clients/am-capital.png' },
  { name: 'Charisma Group', logo: '/clients/charisma-group.png' },
  { name: 'JBS Jet Business Solutions', logo: '/clients/jbs.png' },
  { name: 'Telnyx', logo: '/clients/telnyx.png' },
  { name: 'i6 Group', logo: '/clients/i6-group.png' },
];

export const WHO_WE_ARE =
  'Collins provides reliable bookkeeping, accounting, and tax-audit services that ensure regulatory compliance, accuracy, and peace of mind for SMEs and growing companies.';

export const WHERE_WE_GO =
  'We advise clients on financial control, cash flow, risk, valuation, and growth decisions with the same discipline we bring to their statutory work.';

export const MISSION =
  'To deliver insightful and effective financial solutions that empower our clients to make informed decisions, achieve their goals, and build a sustainable future.';

export const STATS: Stat[] = [
  { value: '3', label: 'Countries — UK, UAE & KSA' },
  { value: 'IFRS', label: 'Aligned global standards' },
  { value: '24h', label: 'Response commitment' },
  { value: '5', label: 'Core advisory areas' },
];

export const PRINCIPLES: Principle[] = [
  {
    title: 'Global Standards',
    body: 'We leverage our international pedigree and knowledge base to deliver services aligned with International Financial Reporting Standards (IFRS).',
  },
  {
    title: 'Integrity & Transparency',
    body: 'We uphold the highest ethical standards, ensuring that all financial statements, audits and filings are accurate and reliable.',
  },
  {
    title: 'Practical Reporting',
    body: 'We use practical systems and reporting tools to improve accuracy, efficiency and visibility.',
  },
];

export const WHY_US: Principle[] = [
  {
    title: 'Deep understanding of Saudi regulations',
    body: 'Our advisors closely track legislative and regulatory updates from ZATCA, MoC and other authorities, so your business stays ahead of compliance shifts.',
  },
  {
    title: 'Integrated support across the lifecycle',
    body: 'From initial company setup in Saudi Arabia to ongoing compliance, we offer a full suite of services under one roof.',
  },
  {
    title: 'Local presence, global expertise',
    body: 'Headquartered in the UK and active in the UAE, our on-ground presence and partnerships in Saudi Arabia guarantee localized support that meets the highest international standards.',
  },
];

export const SUITE: Suite[] = [
  {
    index: '01',
    title: 'Balance Sheet Management',
    tagline: 'From static reporting to active control',
    points: [
      'Monthly balance-sheet health reviews',
      'Working-capital structure analysis',
      'Debt vs equity positioning',
      'Intercompany balances & reconciliation oversight',
      'Capital structure clarity for founders and CFOs',
    ],
    outcome: 'A balance sheet that is understood, clean, and decision-ready.',
  },
  {
    index: '02',
    title: 'Balance Sheet Optimization',
    tagline: 'Unlocking trapped value',
    points: [
      'Working capital optimization (AR / AP / Inventory)',
      'Cash conversion cycle improvement',
      'Leverage and liquidity optimization',
      'Scenario analysis (growth, stress, refinancing)',
    ],
    outcome: 'Improved liquidity, reduced funding costs, and better ROIC.',
  },
  {
    index: '03',
    title: 'Cash Flow Management & Forecasting',
    tagline: 'Cash visibility beyond accounting',
    points: [
      'Short-term (13-week) cash flow forecasting',
      'Medium-term cash planning (6–18 months)',
      'Stress-testing under revenue or cost shocks',
      'Cash runway and burn-rate analysis',
    ],
    outcome: 'Fewer surprises, stronger planning, and confident cash decisions.',
  },
  {
    index: '04',
    title: 'Risk Management & Financial Controls',
    tagline: 'From reactive to resilient',
    points: [
      'Financial risk mapping (liquidity, FX, interest rate, concentration)',
      'Internal controls & process gap identification',
      'Sensitivity and downside scenario modeling',
      'Support for audit-ready and investor-ready controls',
    ],
    outcome: 'Reduced financial risk and increased stakeholder confidence.',
  },
  {
    index: '05',
    title: 'Business Valuation & Strategic Analytics',
    tagline: 'Turning numbers into strategic insight',
    points: [
      'Company valuation via DCF, market multiples & comparables',
      'Valuation support for fundraising, exits and M&A',
      'Strategic scenario modeling (growth, pricing, expansion)',
    ],
    outcome: 'Clear, defensible valuations grounded in data and assumptions.',
  },
];

export const TIERS: Tier[] = [
  {
    key: 'starter',
    name: 'Starter',
    headline: 'Financial Foundations',
    target: 'Small businesses, early-stage SMEs, owner-managed companies',
    positioning: 'We keep your numbers clean, compliant, and understandable.',
    groups: [
      {
        items: [
          'Bookkeeping & accounting',
          'Tax filings & tax audit support',
          'Monthly financial statements (P&L, Balance Sheet, Cash Flow)',
          'Bank & account reconciliations',
          'Basic management reporting',
        ],
      },
    ],
    value: ['Regulatory compliance', 'Accurate financial records', 'Peace of mind for founders'],
    buyer: 'Founder / Owner / Admin manager',
  },
  {
    key: 'growth',
    name: 'Growth',
    headline: 'Financial Control & Optimization',
    target: 'Scaling SMEs, multi-entity companies, VC-backed or fast-growing firms',
    positioning: 'We help you control cash, optimize your balance sheet, and plan growth.',
    featured: true,
    groups: [
      {
        label: 'Balance Sheet Management',
        items: [
          'Monthly balance-sheet reviews',
          'Working capital analysis (AR / AP / Inventory)',
          'Capital structure & debt monitoring',
        ],
      },
      {
        label: 'Cash Flow Management',
        items: [
          'Rolling cash flow forecasts (13-week + medium-term)',
          'Cash runway and liquidity planning',
          'Scenario and stress testing',
        ],
      },
      {
        label: 'Financial Controls & Risk',
        items: [
          'Key financial risk identification',
          'Internal control and process review',
          'Management KPIs & dashboards',
        ],
      },
    ],
    value: [
      'Cash visibility and predictability',
      'Improved liquidity and funding readiness',
      'Stronger financial discipline',
    ],
    buyer: 'Founder, COO, Head of Finance',
  },
  {
    key: 'cfo',
    name: 'Strategic CFO',
    headline: 'Advisory & Value Creation',
    target: 'PE-backed companies, mature SMEs, pre-IPO or M&A-active firms',
    positioning: 'A virtual CFO office focused on value creation and strategic decisions.',
    groups: [
      {
        label: 'Strategic Financial Leadership',
        items: [
          'Virtual CFO / Finance Director role',
          'Board-level reporting and insights',
          'Strategic planning & budgeting',
        ],
      },
      {
        label: 'Valuation & Corporate Finance',
        items: [
          'Company valuation (DCF + market comparable)',
          'Fundraising and investor support',
          'M&A and exit scenario analysis',
        ],
      },
      {
        label: 'Advanced Risk & Capital Strategy',
        items: [
          'Liquidity, leverage & capital optimization',
          'Interest rate / FX exposure analysis',
          'Stress testing under adverse scenarios',
        ],
      },
    ],
    value: [
      'Data-driven strategic decisions',
      'Investor-ready financial narrative',
      'Maximized enterprise value',
    ],
    buyer: 'CEO, Board, Investors, PE funds',
  },
];

export const LADDER: LadderStep[] = [
  { stage: 'Starter', need: 'Are my books correct?', trigger: 'Growth in revenue or complexity' },
  { stage: 'Growth', need: 'Do I have enough cash?', trigger: 'Fundraising, debt, expansion' },
  { stage: 'Strategic CFO', need: 'What is my company worth?', trigger: 'M&A, exit, PE involvement' },
];

export const ADD_ONS: string[] = [
  'Multi-entity consolidation',
  'Industry benchmarking',
  'System integration (ERP, BI tools)',
  'One-off valuation or transaction support',
];

export const PRICING: { tier: string; model: string }[] = [
  { tier: 'Starter', model: 'Fixed monthly fee' },
  { tier: 'Growth', model: 'Monthly fee + complexity bands' },
  { tier: 'Strategic CFO', model: 'Retainer + project-based advisory' },
];
