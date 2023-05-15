import React, { useState } from "react";
import ImageContext from "./ImageContext"
import { getCart } from "../utils/localStorage/get";

const CartProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(getCart());
  return (
    <ImageContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
};

export default CartProvider;