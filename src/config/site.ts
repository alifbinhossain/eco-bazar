export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Eco Bazar',
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
      description:
        "Introducing our exquisite Green Apple, a crisp and succulent delight that tantalizes the taste buds with its unparalleled freshness. Grown in pristine orchards, these apples boast a vibrant green hue and a firm texture, ensuring a satisfying crunch with every bite. Bursting with a perfect balance of sweetness and tartness, our Green Apples are a wholesome snack that promises to invigorate your senses. Packed with vitamins, fiber, and antioxidants, they not only offer a delectable flavor but also contribute to your overall well-being. Elevate your snacking experience and add a touch of nature's goodness to your daily routine with our premium Green Apples.",
      image: '/assets/images/products/apple.png',
      price: 24.0,
      discount: 25,
      quantity: 200,
      unit: 'kg',
      available_stocks: 10,
      status: 'in_stock',
      tags: [],
      category: 'Fruits',
    },
    {
      id: 'product-2',
      name: 'Fresh Indian Malta',
      description:
        'Introducing Fresh Indian Malta, a delectable burst of citrus goodness that promises to elevate your taste buds to new heights! Sourced from the sun-kissed orchards of India, these handpicked Maltes boast a perfect balance of sweetness and tanginess, delivering an authentic and refreshing flavor experience. Bursting with natural vitamins and antioxidants, our Fresh Indian Malta is not just a treat for your taste buds but also a nutritious addition to your daily diet. Whether enjoyed on its own, juiced for a revitalizing beverage, or incorporated into salads and desserts, this premium fruit promises to infuse your culinary creations with the vibrant essence of Indian sunshine. Savor the freshness!',
      image: '/assets/images/products/orange.png',
      price: 20.0,
      discount: null,
      quantity: 100,
      unit: 'kg',
      available_stocks: 20,
      status: 'in_stock',
      tags: ['Vegetables', 'Healthy', 'Chinese', 'Cabbage'],
      category: 'Fruits',
    },
    {
      id: 'product-3',
      name: 'Chinese cabbage',
      description:
        "Introducing our premium Chinese Cabbage, a crisp and flavorful addition to elevate your culinary experience. Grown with care and expertise, our Chinese Cabbage boasts a tender texture and a sweet, mild taste that adds depth to salads, stir-fries, and soups. Packed with essential nutrients like vitamins A and C, this versatile vegetable promotes a healthy lifestyle. Its vibrant green leaves and compact shape ensure freshness and longevity, making it a perfect choice for your kitchen. From traditional Asian dishes to contemporary salads, our Chinese Cabbage promises a delightful crunch and a burst of freshness. Don't miss out on this culinary gem; order yours today!",
      image: '/assets/images/products/chinese-cabbage.png',
      price: 12.0,
      discount: null,
      quantity: 100,
      unit: 'kg',
      available_stocks: 20,
      status: 'out_stock',
      tags: [],
      category: 'Fruits',
    },
    {
      id: 'product-4',
      name: 'Green Lettuce',
      description:
        'Introducing our premium Green Lettuce, a crisp and vibrant addition to elevate your culinary experience. Sourced from trusted local farms, this lettuce is grown with care, ensuring a fresh and healthy product for your table. Bursting with vitamins and nutrients, our Green Lettuce adds a delightful crunch to salads, wraps, and sandwiches. Its rich, emerald-green leaves are a testament to its freshness and quality. Packed with flavor and versatility, this lettuce is perfect for health-conscious individuals and food enthusiasts alike. Make every meal a celebration of freshness with our Green Lettuce, your go-to choice for quality and taste.',
      image: '/assets/images/products/green-lettuce.png',
      price: 9.0,
      discount: null,
      quantity: 100,
      unit: 'kg',
      available_stocks: 20,
      status: 'in_stock',
      tags: [],
      category: 'Fruits',
    },
    {
      id: 'product-5',
      name: 'Eggplant',
      description:
        'Introducing our exquisite Eggplant, a culinary marvel that adds a touch of sophistication to your kitchen. Grown with care and harvested at peak ripeness, our eggplants boast a firm, glossy exterior and a rich, creamy interior. Versatile and nutrient-packed, they are a culinary canvas for your creativity. Whether grilled to perfection, roasted for a smoky flavor, or incorporated into savory stews, our eggplants elevate your dishes with a unique taste and velvety texture. Packed with antioxidants and vitamins, these eggplants not only tantalize your taste buds but also contribute to a healthy lifestyle. Elevate your culinary journey with our premium Eggplant – where freshness meets flavor!',
      image: '/assets/images/products/egg-plant.png',
      price: 34.0,
      discount: null,
      quantity: 100,
      unit: 'kg',
      available_stocks: 20,
      status: 'in_stock',
      tags: [],
      category: 'Fruits',
    },
    {
      id: 'product-6',
      name: 'Big Potatoes',
      description:
        'Introducing Big Potatoes, a culinary delight that transcends ordinary spuds! Grown with care and harvested at their peak, our potatoes are giants in both size and flavor. These colossal tubers are perfect for feeding a hungry crowd or creating memorable meals. Their robust, earthy taste makes them ideal for mashing, baking, or frying, elevating your culinary creations to new heights. Sourced from premium farms, Big Potatoes are rich in nutrients and versatility. From hearty stews to crispy fries, these oversized potatoes will redefine your kitchen experience. Add a touch of grandeur to your meals with Big Potatoes - where size meets scrumptiousness!',
      image: '/assets/images/products/potatoes.png',
      price: 20.0,
      discount: null,
      quantity: 100,
      unit: 'kg',
      available_stocks: 20,
      status: 'in_stock',
      tags: [],
      category: 'Fruits',
    },
    {
      id: 'product-7',
      name: 'Corn',
      description:
        "Introducing our premium Corn - nature's golden delight, now available at your fingertips! Grown with care on sun-kissed fields, our corn embodies the essence of wholesome goodness. Bursting with sweet, succulent kernels, each ear promises a delightful crunch that will elevate your culinary creations. Packed with essential nutrients like fiber and vitamins, our corn adds a nutritious touch to your meals. Whether grilled, boiled, or tossed in salads, its versatility knows no bounds. Sourced from trusted farms, our corn ensures a farm-to-table experience, delivering freshness and flavor that will leave your taste buds dancing. Elevate your cooking with the finest corn – a testament to quality and taste!",
      image: '/assets/images/products/corn.png',
      price: 20.99,
      discount: null,
      quantity: 100,
      unit: 'kg',
      available_stocks: 20,
      status: 'in_stock',
      tags: [],
      category: 'Fruits',
    },
    {
      id: 'product-8',
      name: 'Fresh Cauliflower',
      description:
        'Introducing our premium Fresh Cauliflower, a culinary gem that elevates your kitchen creations to new heights. Harvested at the peak of freshness, each head boasts crisp, ivory florets with a mild, nutty flavor, providing a versatile canvas for your culinary imagination. Packed with essential nutrients, including vitamin C and fiber, our cauliflower is a wholesome addition to your healthy lifestyle. Whether roasted to golden perfection, blended into creamy soups, or tossed into vibrant salads, this Fresh Cauliflower promises a delectable experience. Sourced from trusted growers, it arrives at your doorstep bursting with vitality. Elevate your meals with the pristine quality of our Fresh Cauliflower today!',
      image: '/assets/images/products/cauliflower.png',
      price: 12.0,
      discount: null,
      quantity: 100,
      unit: 'kg',
      available_stocks: 20,
      status: 'in_stock',
      tags: [],
      category: 'Fruits',
    },
    {
      id: 'product-9',
      name: 'Green Capsicum',
      description:
        "Introducing our vibrant Green Capsicum, a crisp and flavorful addition to elevate your culinary creations. Grown with care and precision, these fresh green gems boast a brilliant hue and a robust, sweet taste. Packed with essential vitamins and antioxidants, our Green Capsicum is not only a feast for the eyes but also a nutritional powerhouse. Whether you're sautéing, grilling, stuffing, or enjoying them raw, these capsicums add a burst of freshness to salads, stir-fries, and more. Handpicked at peak ripeness, our Green Capsicum guarantees quality and satisfaction. Bring home the essence of freshness and health with each crunchy bite.",
      image: '/assets/images/products/green-capsicum.png',
      price: 9.0,
      discount: null,
      quantity: 100,
      unit: 'kg',
      available_stocks: 20,
      status: 'in_stock',
      tags: [],
      category: 'Fruits',
    },
    {
      id: 'product-10',
      name: 'Green Chili',
      description: `Introducing our vibrant Green Chili, a culinary delight that adds a zesty kick to your dishes! Grown in nutrient-rich soils, these handpicked green chilies boast a robust flavor profile, balancing heat and freshness. Ideal for spice enthusiasts, our Green Chili elevates your culinary creations with its bold, fiery essence. Whether you're whipping up salsas, curries, or sauces, these chilies bring a dynamic burst of heat that tingles the taste buds. Packed with vitamins and antioxidants, our Green Chili not only excites your palate but also offers a healthy twist to your meals. Elevate your culinary repertoire with the intense and invigorating Green Chili – a kitchen essential!`,
      image: '/assets/images/products/green-chili.png',
      price: 34.0,
      discount: null,
      quantity: 100,
      unit: 'kg',
      available_stocks: 20,
      status: 'in_stock',
      tags: [],
      category: 'Fruits',
    },
  ] satisfies IProduct[],
};
