export type ProductCategory = 
  | 'Todos' 
  | 'Café en Grano' 
  | 'Bebidas de Barra' 
  | 'Métodos Filtrados' 
  | 'Repostería';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  stock: number;
  image: string;
  badge?: string;
  description: string;
  altitude?: string;
  notes?: string;
  roastLevel?: string;
  variants?: string[];
}
