import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: getPermalink('/'),
    },
    {
      text: 'Tentang',
      href: '/#about',
    },
    {
      text: 'Layanan',
      href: '/#services',
    },
    {
      text: 'Portofolio',
      href: '/#portfolio',
    },
    {
      text: 'Blog',
      href: getBlogPermalink('/'),
    },
    {
      text: 'Kontak',
      href: '/#contact',
    },
    {
      text: 'Pelatihan',
      href: getPermalink('/training'),
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Social Media',
      links: [
        { text: 'TikTok', href: 'https://www.tiktok.com/@binaa.sukses' },
        { text: 'Instagram', href: 'https://instagram.com/binaa.sukses' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/company/bina-anugerah-sukses' },
        { text: 'Github', href: 'https://github.com/BAS-Team' },
        { text: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=6281528339901' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Software Developer', },
        { text: 'Network Engineer', },
        { text: 'Outsourcing', },
        { text: 'IT Consulting', },
        { text: 'Certification', },
        { text: 'General Supplier', },
        { text: 'Training Center', },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Network' },
        { text: 'Software ', },
        { text: 'Business & Marketing', },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/#about' },
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'Trainings', href: getPermalink('/training') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@binaa.sukses' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/binaa.sukses' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/BAS-Team' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/bina-anugerah-sukses/' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://api.whatsapp.com/send?phone=6281528339901' },
  ],
  footNote: `
    Made by <a class="text-green-800 hover:underline dark:text-gray-200" href="https://binaanugerahsukses.com/"> Bina Anugerah Sukses</a> · All rights reserved.
  `,
};
