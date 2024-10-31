import { api } from "../../lib/api";

export async function addToCart(productID: string) {
  const response = await api.post("/cart/" + productID);

  console.log(response.data);
  return response.data;
}

export async function getCart() {
  const response = await api.get("/cart");

  console.log(response.data);
  return response.data;
}
