type INavItem = {
  name: string;
  href: string;
};

type ICategory = {
  name: string;
  href: string;
  icon: {
    dark: string;
    light: string;
  };
};

type IService = {
  title: string;
  description: string;
  icon: string;
};

type IPopularCategory = {
  name: string;
  image: string;
};

type IProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
  discount: number | null;
};
