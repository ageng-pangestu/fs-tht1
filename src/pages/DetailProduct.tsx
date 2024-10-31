import { useParams } from "react-router-dom";
import { useProductFunction } from "../services/product/hooks/useProductFunction";
import { useEffect, useState } from "react";
import { IProductModel } from "../services/product/types/product";
import { useCartFuntion } from "../services/cart/hooks/useCartFunction";

function DetailProduct() {
  const { id } = useParams();
  const { getProductById } = useProductFunction();
  const { addToCart } = useCartFuntion();
  const [notification, setNotification] = useState<string>("");
  const [notificationType, setNotificationType] = useState<"success" | "danger">("success");
  const [productData, setProductData] = useState<IProductModel>();

  useEffect(() => {
    getProductById(String(id)).then((result: any) => {
      setProductData(result);
    });
  }, [id]);

  const onSubmit = async (productId: string) => {
    try {
      const result = await addToCart(productId);

      if (result) {
        setNotification("Successfully added to cart");
        setNotificationType("success"); // Setel tipe notifikasi ke "success"
      } else {
        setNotification("Product already exists in the cart");
        setNotificationType("danger");
      }

      setTimeout(() => setNotification(""), 3000);
      console.log("result", result);
    } catch (error) {
      console.log(error);
    }
  };

  const categoryStyle = {
    color: productData?.category === "Armor" ? "gold" : productData?.category === "Weapons" ? "red" : "black",
  };

  return (
    <div className="container bg-body-tertiary p-4 shadow rounded" style={{ marginTop: "50px", width: "70%" }}>
      {notification && (
        <div className={`alert alert-${notificationType}`} role="alert">
          {notification}
        </div>
      )}
      <div className="container d-flex">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="container d-flex flex-column justify-content-between p-3">
          <h1>{productData?.productName}</h1>
          <div>
            <h6>Category</h6>
            <p className="fw-bold" style={categoryStyle}>
              {productData?.category}
            </p>
          </div>
          <div>
            <h6>Price</h6>
            <p className="card-text text-success fw-bold">{productData?.price ? Number(productData?.price).toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0, maximumFractionDigits: 0 }) : ""}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="mt-4 fs-4">{productData?.description}</p>
      </div>
      <div className="container d-flex justify-content-end">
        <button
          onClick={() => {
            onSubmit(String(id));
          }}
          type="button"
          className="btn btn-dark"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default DetailProduct;
