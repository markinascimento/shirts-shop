'use client'
// -> ReactJS
import { createContext, useCallback, useState, type ReactNode } from "react";

// -> Types
import type { CarItemDTO } from "@/dtos/CarItemDTO";
import type { ProductDTO } from "@/dtos/ProductDTO";
interface IShoesContextProps {
  cartItems: CarItemDTO[]
  handleAddToCart(product: ProductDTO): void;
  handleRemoveFromCart(product: ProductDTO): void;
}

export const ShoesContext = createContext({} as IShoesContextProps) 

export function ShoesProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CarItemDTO[]>([]);

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

  return(
    <ShoesContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleRemoveFromCart
      }}
    >
      {children}
    </ShoesContext.Provider>
  );
}
