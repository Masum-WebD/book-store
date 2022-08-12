import { useEffect, useState } from "react";

const useProducts = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("https://p-hero-bookshop.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  return [book, setBook];
};

export default useProducts;
