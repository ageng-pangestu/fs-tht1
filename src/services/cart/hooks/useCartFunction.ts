import * as cartAsync from "../cartApi";

export const useCartFuntion = () => {
  const addToCart = async (productID: string) => {
    try {
      const res = await cartAsync.addToCart(productID);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const getCart = async () => {
    try {
      const res = await cartAsync.getCart();

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return { addToCart, getCart };
};
