// -> ReactJS
import { useContext } from "react";

// -> ContextAPI
import { ShoesContext } from "@/context/ShoesContext";

export function useShoes() {
  return useContext(ShoesContext)
}