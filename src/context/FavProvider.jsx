import React, { useState } from "react";
import FavContext from "./FavContext";
import { getCart } from "../utils/localStorage/get";

const CartProvider = ({ children }) => {
  const [fav, setFav] = useState(getCart());

  return (
    <FavContext.Provider value={{ fav, setFav, handleLike }}>
      {children}
    </FavContext.Provider>
  );
};

export default CartProvider;
