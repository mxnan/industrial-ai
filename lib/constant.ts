// navLinks.ts

interface NavLink {
  name: string;
  link: string;
}

const navLinks: NavLink[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

export default navLinks;