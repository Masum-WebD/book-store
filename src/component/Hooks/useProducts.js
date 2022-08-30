import { useEffect, useState } from "react";

const useProducts = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("https://book-store-46yi.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  return [book, setBook];
};

export default useProducts;
