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

// This hook can be used to access the ShopContext
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
  //using this state to prevent hydration mismatch
  const [initialLoad, setInitialLoad] = useState(false);
  useEffect(() => {
    if (!initialLoad) {
      setInitialLoad(true);
    }
  }, [initialLoad]);

  //initialize local storage
  let localStorage = typeof window !== 'undefined' ? window.localStorage : null;

  const [cart, setCart] = useState(
    localStorage ? JSON.parse(localStorage.getItem('cart')!) || [] : []
  );

  const defaultValues = useMemo((): ReturnType<typeof useShopContext> => {
    return {
      cart,

      // this function will add product to the cart
      setCart: (id: string) => {
        if (cart.includes(id)) return;
        localStorage &&
          localStorage.setItem('cart', JSON.stringify([...cart, id]));

        setCart([...cart, id]);
      },

      // this function will return products that are in the cart
      getCartProducts: (products: IProduct[]) => {
        return products.filter((product: IProduct) =>
          cart.includes(product.id)
        );
      },

      // this function will remove product from the cart
      removeCart: (id: string) => {
        const newCart = cart.filter((item: string) => item !== id);
        localStorage && localStorage.setItem('cart', JSON.stringify(newCart));

        setCart(newCart);
      },

      // this function will clear the cart
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
