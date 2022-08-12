import { useEffect, useState } from "react";

const useCartBooks = () => {
  let [cartProduct, setcartProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cartProduct")
      .then((res) => res.json())
      .then((data) => setcartProduct(data));
  }, []);
  
  
  return [cartProduct, setcartProduct];
};
export default useCartBooks