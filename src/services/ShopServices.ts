/* eslint-disable import/no-anonymous-default-export */
import type { ProductDTO } from "@/dtos/ProductDTO";
import axios from "axios";

const api = axios.create({
  baseURL: 'https://react-shop-backend.liara.run',
})

class ShopServices {
  public async getAllProducts() {
    const { data } = await api.get<ProductDTO[]>("/products")
    return data;
  }
}

export default new ShopServices()