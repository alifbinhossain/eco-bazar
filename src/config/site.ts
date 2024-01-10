export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: '',
  description: '',
  url: '',
  ogImage: '',

  mainNavItems: [
    {
      name: 'Home',
      href: '/',
    },

    {
      name: 'Shop',
      href: '/shop',
    },

    {
      name: 'About Us',
      href: '/about-us',
    },

    {
      name: 'Contact Us',
      href: '/contact-us',
    },
  ] satisfies INavItem[],

  categories: [
    {
      name: 'Fresh Fruit',
      href: '/',
      icon: {
        light: '/assets/images/categories/fruits.svg',
        dark: '/assets/images/categories/fruits-dark.svg',
      },
    },
    {
      name: 'Vegetables',
      href: '/',
      icon: {
        light: '/assets/images/categories/vegetables.svg',
        dark: '/assets/images/categories/vegetables-dark.svg',
      },
    },
    {
      name: 'River Fish',
      href: '/',
      icon: {
        light: '/assets/images/categories/fish.svg',
        dark: '/assets/images/categories/fish-dark.svg',
      },
    },
    {
      name: 'Chicken & Meat',
      href: '/',
      icon: {
        light: '/assets/images/categories/chicken.svg',
        dark: '/assets/images/categories/chicken-dark.svg',
      },
    },
    {
      name: 'Drink & Water',
      href: '/',
      icon: {
        light: '/assets/images/categories/drink.svg',
        dark: '/assets/images/categories/drink-dark.svg',
      },
    },
    {
      name: 'Yogurt & ice Cream',
      href: '/',
      icon: {
        light: '/assets/images/categories/ice-cream.svg',
        dark: '/assets/images/categories/ice-cream-dark.svg',
      },
    },
    {
      name: 'Cake & Bread',
      href: '/',
      icon: {
        light: '/assets/images/categories/cake.svg',
        dark: '/assets/images/categories/cake-dark.svg',
      },
    },
    {
      name: 'Butter & Cream',
      href: '/',
      icon: {
        light: '/assets/images/categories/butter.svg',
        dark: '/assets/images/categories/butter-dark.svg',
      },
    },
    {
      name: 'Cooking',
      href: '/',
      icon: {
        light: '/assets/images/categories/cooking.svg',
        dark: '/assets/images/categories/cooking-dark.svg',
      },
    },
  ] satisfies ICategory[],
};
