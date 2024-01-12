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
  description: string;
  image: string;
  price: number;
  discount: number | null;
  tags: string[];
  category: string;
  quantity: number;
  unit: 'kg' | 'gm' | 'ltr';
  status: 'in_stock' | 'out_stock';
  available_stocks: number;
};

type ICartProduct = IProduct & {
  cartQuantity: number;
};

type ISocialPlatform = 'facebook' | 'whatsapp';
