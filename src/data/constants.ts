// Logos

import cssLogo from '@/assets/logos/css3-logo.svg';
import htmlLogo from '@/assets/logos/html5-logo.svg';
import jqueryLogo from '@/assets/logos/jquery-logo.svg';
import jsLogo from '@/assets/logos/js-logo.svg';
import laravelLogo from '@/assets/logos/laravel-logo.svg';
import mysqlLogo from '@/assets/logos/mysql-logo.svg';
import nextLogo from '@/assets/logos/nextjs-logo.svg';
import nodeLogo from '@/assets/logos/nodejs-logo.webp';
import phpLogo from '@/assets/logos/php-logo.svg';
import reactLogo from '@/assets/logos/react-logo.svg';

export const NAVS = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'experience', label: 'Experience', icon: '⚡' },
  { id: 'skills', label: 'Skills', icon: '🛠️' },
  { id: 'portfolio', label: 'Portfolio', icon: '📁' },
  { id: 'contact', label: 'Contact', icon: '✉️' },
];

export const SECTIONS = NAVS.map((nav) => nav.id);

export const SKILLS = {
  frontend: [
    { name: 'JavaScript', level: 90, icon: jsLogo },
    { name: 'React', level: 85, icon: reactLogo },
    { name: 'Next.js', level: 85, icon: nextLogo },
    { name: 'HTML5', level: 95, icon: htmlLogo },
    { name: 'CSS 3', level: 90, icon: cssLogo },
    { name: 'jQuery', level: 80, icon: jqueryLogo },
    {
      name: 'Azure AD',
      level: 70,
      icon: 'https://img.icons8.com/color/48/000000/azure-1.png',
    },
  ],
  backend: [
    { name: 'PHP', level: 88, icon: phpLogo },
    { name: 'Laravel', level: 85, icon: laravelLogo },
    { name: 'Node.js', level: 80, icon: nodeLogo },
    { name: 'SQL/MySQL', level: 85, icon: mysqlLogo },
    {
      name: 'PostgreSQL',
      level: 85,
      icon: 'https://img.icons8.com/color/48/000000/postgreesql.png',
    },
    {
      name: 'Redis',
      level: 70,
      icon: 'https://img.icons8.com/color/48/000000/redis.png',
    },
    {
      name: 'AWS',
      level: 70,
      icon: 'https://img.icons8.com/color/48/000000/amazon-web-services.png',
    },
  ],
};

export const EXPERIENCES = [
  {
    period: '2021 - Present',
    role: 'Senior Frontend Web Developer at Rollingglory',
    company: 'Bandung, Remote',
    points: [
      'Reviewing code quality and ensuring best practices',
      'Developing scalable e-commerce platforms',
      'Optimizing application performance and SEO',
      'Mentoring junior developers',
      'Building reusable components and libraries for future use',
      'Building CMS Codebase using Next.js Pages Router for developers',
    ],
  },
  {
    period: 'February 2019 — August 2021',
    role: 'Middle Web Developer at Universitas Negeri Jakarta',
    company: 'DKI Jakarta',
    points: [
      'Analyzing Program Codes',
      'Giving advice on good algorithms and clean codes',
      'Using modern web development frameworks',
      'Help achieving good requirement for systems',
    ],
  },
  {
    period: 'June 2018 — February 2019',
    role: 'Junior Web Developer at Universitas Negeri Jakarta',
    company: 'DKI Jakarta',
    points: [
      'Developing college tuition system',
      'Website maintenance',
      'Applying an up to date software development frameworks',
    ],
  },
];
