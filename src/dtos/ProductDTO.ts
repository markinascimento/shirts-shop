export interface ProductDTO {
  category: {
    id: number;
    name: string;
  };
  _id: string;
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}
