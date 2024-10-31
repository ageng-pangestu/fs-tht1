import axois from "axios";

export const api = axois.create({
  // baseURL: import.meta.env.BASE_URL || "http://localhost:3000",
  baseURL: "http://localhost:3000",
});
