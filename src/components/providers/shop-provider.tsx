'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type ShopContextProps = {
  cart: string[] | [];
  getCartProducts: (products: IProduct[]) => IProduct[] | [];
  setCart: (id: string) => void;
  removeCart: (id: string) => void;
  clearCart: () => void;
};

const ShopContext = createContext<ShopContextProps>({
  cart: [],
  getCartProducts: () => [],
  setCart: () => {},
  removeCart: () => {},
  clearCart: () => {},
});

export const useShopContext = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error('useShopContext must be used within a ShopProvider');
  }

  return context;
};

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [initialLoad, setInitialLoad] = useState(false);
  useEffect(() => {
    if (!initialLoad) {
      setInitialLoad(true);
    }
  }, [initialLoad]);

  let localStorage = typeof window !== 'undefined' ? window.localStorage : null;

  const [cart, setCart] = useState(
    localStorage ? JSON.parse(localStorage.getItem('cart')!) || [] : []
  );

  const defaultValues = useMemo((): ReturnType<typeof useShopContext> => {
    return {
      cart,
      getCartProducts: (products: IProduct[]) => {
        return products.filter((product: IProduct) =>
          cart.includes(product.id)
        );
      },

      setCart: (id: string) => {
        if (cart.includes(id)) return;
        localStorage &&
          localStorage.setItem('cart', JSON.stringify([...cart, id]));

        setCart([...cart, id]);
      },
      removeCart: (id: string) => {
        const newCart = cart.filter((item: string) => item !== id);
        localStorage && localStorage.setItem('cart', JSON.stringify(newCart));

        setCart(newCart);
      },
      clearCart: () => {
        localStorage && localStorage.removeItem('cart');
        setCart([]);
      },
    };
  }, [cart, localStorage]);

  if (!initialLoad) {
    return null;
  }

  return (
    <ShopContext.Provider value={defaultValues}>
      {children}
    </ShopContext.Provider>
  );
};
