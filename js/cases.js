export const jobs = [
  {
    id: 'junior-auditor',
    title: 'Junior Auditor',
    subtitle: 'Public Accounting',
    available: true,
    cases: [
      {
        id: 'eras-tour',
        caseNumber: 1,
        emoji: '🎤',
        title: 'ERAS TOUR AUDIT',
        teaser: 'Verify Taylor Swift\u2019s tour-stop budget at Hoover Middle School.',
        scenario:
          'Taylor Swift has decided to host her next multi-million dollar "Eras Tour" concert right here at Hoover Middle School. The budget is completely out of control. As a Junior Auditor, you must confirm the costs and verify if these massive expenses are reasonable.',
      },
      {
        id: 'basketball-arena',
        caseNumber: 2,
        emoji: '🏀',
        title: 'HOOVER BASKETBALL ARENA AUDIT',
        teaser: 'Verify the NBA-level arena construction & technology budget.',
        scenario:
          'Hoover Middle School is tearing down its old gym to build a massive, NBA-level professional basketball arena! The construction and technology budgets are astronomical. As a Junior Auditor, you must verify these high-end expenses.',
      },
    ],
  },
  {
    id: 'budget-accountant',
    title: 'Budget Accountant',
    subtitle: 'Private Accounting',
    available: false,
    cases: [],
  },
];
