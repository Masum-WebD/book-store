import { useEffect, useState } from "react";

const useCartBooks = () => {
  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cartProduct")
      .then((res) => res.json())
      .then((data) => setCartProduct(data));
  }, []);

  return [cartProduct, setCartProduct];
};
export default useCartBooks;
