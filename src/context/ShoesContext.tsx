'use client'
// -> ReactJS
import { createContext, useCallback, useState, type ReactNode } from "react";

// -> NextJS
import { useRouter } from "next/navigation";

// -> Types
import type { CarItemDTO } from "@/dtos/CarItemDTO";
import type { ProductDTO } from "@/dtos/ProductDTO";
interface IShoesContextProps {
  isCartOpen: boolean;
  cartItems: CarItemDTO[]
  openItensCart(): void;
  closeItensCart(): void;
  handleFinishBuy(): void;
  handleAddToCart(product: ProductDTO): void;
  handleRemoveFromCart(product: ProductDTO): void;
}

export const ShoesContext = createContext({} as IShoesContextProps) 

export function ShoesProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CarItemDTO[]>([]);

  const openItensCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeItensCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const handleAddToCart = useCallback((product: ProductDTO) => {
    setCartItems(prevState => {
      const index = prevState.findIndex((cartItem) => cartItem.product.id === product.id);

      if (index < 0) {
        return [...prevState, {
          product,
          quantity: 1
        }];
      }

      return prevState.map(cartItem => {
        if(cartItem.product.id === product.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1
          }
        }

        return cartItem
      })
    });
  }, [])

  const handleRemoveFromCart = useCallback((product: ProductDTO) => {
    setCartItems(prevState => {
      const item = prevState.find((cartItem) => cartItem.product.id === product.id);

      if (item?.quantity === 1) {
        return prevState.filter((cartItem) => 
          (cartItem.product.id !== product.id)
        );
      }

      return prevState.map(cartItem => {
        if(cartItem.product.id === product.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1
          }
        }

        return cartItem
      })
    });
  }, [])

  const handleFinishBuy = useCallback(() => {
    closeItensCart();
    setCartItems([])
    router.push('/finish')
  }, [router, closeItensCart]);

  return(
    <ShoesContext.Provider
      value={{
        cartItems,
        isCartOpen,
        closeItensCart,
        openItensCart,
        handleAddToCart,
        handleFinishBuy,
        handleRemoveFromCart
      }}
    >
      {children}
    </ShoesContext.Provider>
  );
}
