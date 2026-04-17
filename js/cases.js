export const jobs = [
  {
    id: 'junior-auditor',
    title: 'Junior Auditor',
    subtitle: 'Public Accounting',
    available: true,
    cases: [
      {
        id: 'dog-bakery',
        title: 'Pups & Pastries Dog Bakery',
        teaser: 'Audit a dog-treat bakery applying for a small-business loan.',
        scenario:
          "Pups & Pastries is a dog bakery. The owner wants a loan from the bank to open a second shop. The bank hired YOU, a junior auditor, to check three things before they approve the loan.",
        questions: [
          {
            visit: 'Dog Bakery',
            prompt: 'What does the bakery spend the most money on?',
            options: [
              'Flour & peanut butter (ingredients)',
              'Oven electricity',
              'Packaging boxes',
              'Delivery gas',
            ],
          },
          {
            visit: 'CPA Accountant',
            prompt:
              'Dog-treat ingredients (flour, eggs, peanut butter) should be recorded as what kind of expense?',
            options: [
              'Office Supplies',
              'Cost of Goods Sold',
              'Marketing Expense',
              'Travel Expense',
            ],
          },
          {
            visit: 'Attorney (any Attorney table)',
            prompt:
              'Does a business that sells food for pets need a permit from the local health department?',
            options: [
              'Yes',
              'No',
              'Only if they have more than 5 employees',
              'Only if they sell online',
            ],
          },
        ],
      },
      {
        id: 'runway-dreams',
        title: 'Runway Dreams Boutique',
        teaser: 'Audit a fashion designer opening her first boutique.',
        scenario:
          "A Fashion Designer is opening a small boutique in a shopping center. Before the bank lends her the money, YOU must audit three parts of her business story.",
        questions: [
          {
            visit: 'Fashion Designer',
            prompt: 'Which is her biggest yearly cost?',
            options: [
              'Fabric & materials',
              'Studio / shop rent',
              'Online ads',
              'Sewing machines',
            ],
          },
          {
            visit: 'Realtor',
            prompt:
              'About how much does a small shop in a busy shopping area rent for each month?',
            options: ['~$500', '~$2,500', '~$10,000', '~$50,000'],
          },
          {
            visit: 'Marketing Manager — Bitcoin company',
            prompt:
              'A customer paid for a $300 dress using bitcoin. How do you decide what dollar amount to write in the books?',
            options: [
              "Use today's bitcoin price in dollars",
              'Use the bitcoin price from when bitcoin was first invented',
              'Always write $300 no matter what',
              "Don't record the sale",
            ],
          },
        ],
      },
      {
        id: 'rockets-revenue',
        title: 'Rockets & Revenue',
        teaser: 'Audit a $5 million rocket-parts inventory at an aerospace company.',
        scenario:
          "An aerospace company says it has $5 million worth of rocket parts in its warehouse. Your audit must check that the parts are REAL, TESTED, and valued correctly.",
        questions: [
          {
            visit: 'Aerospace Engineer',
            prompt: 'Name one expensive machine used to make rocket parts.',
            options: [
              '3-D metal printer',
              'Home sewing machine',
              'Pizza oven',
              'Lawn mower',
            ],
          },
          {
            visit: 'Structural Engineer',
            prompt: 'What document proves a part was tested and passed safety checks?',
            options: [
              'A test / inspection report',
              'A birthday card',
              'A sales receipt',
              'A casual email',
            ],
          },
          {
            visit: 'Attorney Advisor — U.S. Treasury Office of Tax Policy',
            prompt:
              'When the company sells parts to the U.S. government, is the sale taxed the SAME as a normal retail sale?',
            options: [
              'Yes, always the same',
              'No — often tax-exempt or with special rules',
              'Double taxed',
              'Only taxed on holidays',
            ],
          },
        ],
      },
      {
        id: 'cyber-startup',
        title: 'Cyber Startup Books',
        teaser: 'Audit a cyber-security startup with huge cloud bills.',
        scenario:
          "A small cyber-security startup says it is very profitable. But its cloud computing bills look HUGE. You are the junior auditor — check three things.",
        questions: [
          {
            visit: 'Software Engineer',
            prompt: 'What is something software companies pay for every month?',
            options: [
              'Cloud servers (AWS / Azure / Google)',
              'Paper clips',
              'Firewood',
              'Postage stamps',
            ],
          },
          {
            visit: 'Cyber Security AI  —OR—  Technical Leader, AI Security (Cisco)',
            prompt: "What kind of attack could ERASE a company's financial records?",
            options: [
              'Ransomware',
              'A rainstorm',
              'Someone tripping over a power cord',
              'A paper shredder',
            ],
          },
          {
            visit: 'Machine Learning Engineer',
            prompt:
              "The startup built an AI model they will use for 5 years. On the books it should be an…",
            options: [
              'Expense right now (one-time)',
              'Asset, recorded over time',
              'Revenue',
              'Customer',
            ],
          },
        ],
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
