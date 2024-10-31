export interface ICartModel {
  id: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  cartItems: ICartItemsModel[];
}

interface ICartItemsModel {
  id: number;
  cartId: number;
  productId: number;
  product: IProductModel;
}

interface IProductModel {
  id: string;
  productName: string;
  description: string;
  category: string;
  price: number;
  image?: string;
}
