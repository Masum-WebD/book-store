import { useEffect, useState } from "react";

const useProducts = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  return [book, setBook];
};

export default useProducts;
