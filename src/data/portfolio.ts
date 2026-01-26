// import type { StaticImageData } from 'next/image';
import imgUjian from '@/assets/projects/aplikasi-ujian.webp';
// ... imports return strings in Vite

import imgBeasiswa from '@/assets/projects/beasiswa-sfd.webp';
import imgBintang from '@/assets/projects/bintang7.webp';
import imgEiger from '@/assets/projects/eigeradventure.webp';
import imgEigerCms from '@/assets/projects/eigeradventure-cms.webp';
import imgModuitAdvisor from '@/assets/projects/moduit-advisor-beta.webp';
import imgModuitAdvisorLogin from '@/assets/projects/moduit-advisor-beta-login.webp';
import imgModuitEquityLogin from '@/assets/projects/moduit-equity-login.webp';
import imgModuitEquityPM from '@/assets/projects/moduit-equity-pm.webp';
import imgModuitReksa from '@/assets/projects/moduit-reksa.webp';
import imgModuitBeyond from '@/assets/projects/moduit-reksa-beyond.webp';
import imgMultimedia from '@/assets/projects/multibank.webp';
import imgPeat from '@/assets/projects/people-for-peat.webp';
import imgSisca from '@/assets/projects/sisca.webp';
import imgSiukat from '@/assets/projects/siukat.webp';
import imgVerif from '@/assets/projects/verif-akademik.webp';

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  tech: string[];
  images: string[];
  link?: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: 'People for Peat',
    category: 'Non-Profit',
    description:
      'A platform dedicated to peatland conservation and sustainable management.',
    tech: ['Next.js', 'React'],
    images: [imgPeat],
    link: 'https://web.archive.org/web/20250713132121/https://peopleforpeat.org/',
  },
  {
    title: 'Moduit Reksa',
    category: 'Fintech',
    description:
      'Mutual fund investment platform allowing users to buy and sell mutual funds easily.',
    tech: ['React'],
    images: [imgModuitReksa, imgModuitBeyond],
    link: 'https://reksa.moduit.id/',
  },
  {
    title: 'Moduit Advisor Beta',
    category: 'Fintech Dashboard',
    description:
      'Dashboard for financial advisors to manage their clients portfolios.',
    tech: ['Next.js'],
    images: [imgModuitAdvisor, imgModuitAdvisorLogin],
    link: 'https://advisor-beta.moduit.id/',
  },
  {
    title: 'Moduit Equity',
    category: 'Fintech Dashboard',
    description:
      'Equity trading platform dashboard for monitoring market trends and portfolio performance.',
    tech: ['React'],
    images: [imgModuitEquityLogin, imgModuitEquityPM],
  },
  {
    title: 'Bintang Toedjoe',
    category: 'Corporate',
    description:
      'Corporate website for a leading pharmaceutical company in Indonesia.',
    tech: ['Next.js'],
    images: [imgBintang],
    link: 'https://bintang7.com/',
  },
  {
    title: 'Eiger Adventure',
    category: 'E-commerce',
    description:
      'Official e-commerce store for Eiger Adventure, focusing on outdoor gear.',
    tech: ['Next.js', 'React'],
    images: [imgEiger],
    link: 'https://eigeradventure.com/',
  },
  {
    title: 'Eiger Atom CMS',
    category: 'Internal Tool',
    description:
      'Content Management System for managing Eiger Adventure e-commerce content.',
    tech: ['Vue.js'],
    images: [imgEigerCms],
  },
  {
    title: 'Beasiswa SFD',
    category: 'Web App',
    description:
      'Scholarship application portal for students to apply for financial aid.',
    tech: ['React'],
    images: [imgBeasiswa],
  },
  {
    title: 'Multi Bank',
    category: 'Finance',
    description:
      'Banking application interface for managing accounts and transactions.',
    tech: ['React', 'Node.js'],
    images: [imgMultimedia],
  },
  {
    title: 'Aplikasi Ujian',
    category: 'Education',
    description:
      'Online examination system for conducting and grading student exams.',
    tech: ['React', 'MySQL'],
    images: [imgUjian],
  },
  {
    title: 'SISCA',
    category: 'System',
    description:
      'Information system for academic and administrative management.',
    tech: ['Laravel'],
    images: [imgSisca],
  },
  {
    title: 'Verifikasi Akademik',
    category: 'Education',
    description: 'System for verifying academic documents and student records.',
    tech: ['React', 'Express', 'MySQL'],
    images: [imgVerif],
  },
  {
    title: 'SIUKAT',
    category: 'Management',
    description:
      'Management system for university tuition classes and categorisation.',
    tech: ['React', 'MySQL'],
    images: [imgSiukat],
  },
];
