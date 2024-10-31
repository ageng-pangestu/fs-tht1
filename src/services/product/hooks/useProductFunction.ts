import * as productAsync from "../productApi";

export const useProductFunction = () => {
  const getAllProduct = async () => {
    try {
      const resData = await productAsync.getAllProduct();

      return resData;
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (productId: string) => {
    try {
      const res = await productAsync.getBookById(productId);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllProduct, getProductById };
};
