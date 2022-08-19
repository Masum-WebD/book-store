import { useEffect, useState } from "react";

const useCartBooks = () => {
  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    fetch("https://p-hero-bookshop.herokuapp.com/cartProduct")
      .then((res) => res.json())
      .then((data) => setCartProduct(data));
  }, []);

  return [cartProduct, setCartProduct];
};
export default useCartBooks;
