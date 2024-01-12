'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type ShopContextProps = {
  cart: { id: string; quantity: number }[];
  getCartProducts: (products: IProduct[]) => ICartProduct[] | [];
  addToCart: ({ id, quantity }: { id: string; quantity?: number }) => void;
  updateCart: ({
    id,
    operation,
  }: {
    id: string;
    operation: 'increment' | 'decrement';
  }) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const ShopContext = createContext<ShopContextProps>({
  cart: [],
  getCartProducts: () => [],
  addToCart: () => {},
  updateCart: () => {},
  removeFromCart: () => {},
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

  const [cart, setCart] = useState<{ id: string; quantity: number }[]>(
    localStorage ? JSON.parse(localStorage.getItem('cart')!) || [] : []
  );

  const defaultValues = useMemo((): ReturnType<typeof useShopContext> => {
    return {
      cart,

      // this function will add product to the cart
      addToCart: ({ id, quantity = 1 }) => {
        //check if the product is in the cart
        if (cart.find((item) => item.id === id)) {
          const newCart = cart.with(
            cart.findIndex((item) => item.id === id),
            {
              id,
              quantity,
            }
          );

          localStorage && localStorage.setItem('cart', JSON.stringify(newCart));
          setCart(newCart);

          return;
        } else {
          localStorage &&
            localStorage.setItem(
              'cart',
              JSON.stringify([...cart, { id, quantity }])
            );
          setCart([...cart, { id, quantity }]);
        }
      },

      // this function will update cart
      updateCart: ({ id, operation = 'increment' }) => {
        //check if the product is in the cart
        if (!cart.find((item) => item.id === id)) {
          localStorage &&
            localStorage.setItem(
              'cart',
              JSON.stringify([...cart, { id, quantity: 1 }])
            );
          setCart([...cart, { id, quantity: 1 }]);

          return;
        }
        const itemIndex = cart.findIndex((item) => item.id === id);
        const { quantity: currentQuantity } = cart[itemIndex];
        if (operation === 'decrement' && currentQuantity > 1) {
          const newCart = cart.with(itemIndex, {
            id,
            quantity: currentQuantity - 1,
          });
          setCart(newCart);
        } else if (operation === 'increment') {
          const newCart = cart.with(itemIndex, {
            id,
            quantity: currentQuantity + 1,
          });
          setCart(newCart);
        }

        localStorage && localStorage.setItem('cart', JSON.stringify([...cart]));
      },

      // this function will return products that are in the cart
      getCartProducts: (products: IProduct[]) => {
        return products
          .filter((product: IProduct) =>
            cart.find((item) => item.id === product.id)
          )
          .map((product) => {
            return {
              ...product,
              cartQuantity: cart.find((item) => item.id === product.id)
                ?.quantity!,
            };
          });
      },

      // this function will remove product from the cart
      removeFromCart: (id: string) => {
        const newCart = cart.filter((item) => item.id !== id);
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
