import { api } from "../../lib/api";

export async function getAllProduct() {
  const response = await api.get("/products");
  return response.data;
}

export async function getBookById(productId: string) {
  const response = await api.get("/products/" + productId);
  return response.data;
}
