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

  services: [
    {
      title: 'Free Shipping',
      description: 'Free shipping with discount',
      icon: '/assets/images/icons/truck.svg',
    },
    {
      title: 'Great Support 24/7',
      description: 'Instant access to Contact',
      icon: '/assets/images/icons/headphone.svg',
    },
    {
      title: '100% Secure Payment',
      description: 'We ensure your money is save',
      icon: '/assets/images/icons/shopping-bag-2.svg',
    },
    {
      title: 'Money-Back Guarantee',
      description: '30 days money-back guarantee',
      icon: '/assets/images/icons/box.svg',
    },
  ] satisfies IService[],

  popularCategories: [
    {
      name: 'Fresh Fruit',
      image: '/assets/images/popular-categories/fresh-fruit.png',
    },
    {
      name: 'Fresh Vegetables',
      image: '/assets/images/popular-categories/vegetables.png',
    },
    {
      name: 'Meat & Fish',
      image: '/assets/images/popular-categories/meat-and-fish.png',
    },
    {
      name: 'Snacks',
      image: '/assets/images/popular-categories/snacks.png',
    },
    {
      name: 'Beverages',
      image: '/assets/images/popular-categories/beverage.png',
    },
    {
      name: 'Beauty & Health',
      image: '/assets/images/popular-categories/beauty-and-health.png',
    },
    {
      name: 'Bread & Bakery',
      image: '/assets/images/popular-categories/bread-and-bakery.png',
    },
    {
      name: 'Baking Needs',
      image: '/assets/images/popular-categories/baking-needs.png',
    },
    {
      name: 'Cooking',
      image: '/assets/images/popular-categories/cooking.png',
    },
    {
      name: 'Diabetic Food',
      image: '/assets/images/popular-categories/diabetes-food.png',
    },
    {
      name: 'Dish Detergents',
      image: '/assets/images/popular-categories/dish-detergents.png',
    },
    {
      name: 'Oil',
      image: '/assets/images/popular-categories/oil.png',
    },
  ] satisfies IPopularCategory[],

  popularProducts: [
    {
      id: 'product-1',
      name: 'Green Apple',
      image: '/assets/images/products/apple.png',
      price: 24.0,
      discount: 25,
    },
    {
      id: 'product-2',
      name: 'Fresh Indian Malta',
      image: '/assets/images/products/orange.png',
      price: 20.0,
      discount: null,
    },
    {
      id: 'product-3',
      name: 'Chinese cabbage',
      image: '/assets/images/products/chinese-cabbage.png',
      price: 12.0,
      discount: null,
    },
    {
      id: 'product-4',
      name: 'Green Lettuce',
      image: '/assets/images/products/green-lettuce.png',
      price: 9.0,
      discount: null,
    },
    {
      id: 'product-5',
      name: 'Eggplant',
      image: '/assets/images/products/egg-plant.png',
      price: 34.0,
      discount: null,
    },
    {
      id: 'product-6',
      name: 'Big Potatoes',
      image: '/assets/images/products/potatoes.png',
      price: 20.0,
      discount: null,
    },
    {
      id: 'product-7',
      name: 'Corn',
      image: '/assets/images/products/corn.png',
      price: 20.99,
      discount: null,
    },
    {
      id: 'product-8',
      name: 'fresh Cauliflower',
      image: '/assets/images/products/cauliflower.png',
      price: 12.0,
      discount: null,
    },
    {
      id: 'product-9',
      name: 'Green Capsicum',
      image: '/assets/images/products/green-capsicum.png',
      price: 9.0,
      discount: null,
    },
    {
      id: 'product-10',
      name: 'Green Chili',
      image: '/assets/images/products/green-chili.png',
      price: 34.0,
      discount: null,
    },
  ] satisfies IProduct[],
};
