import React, { useEffect } from "react";
import SingleProduct from "./SingleProduct";
import { fetchProducts, STATUSES } from '../store/productSlice'
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";

const AllProducts = () => {
  // const [products, setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
    // fetch("https://p-hero-bookshop.herokuapp.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));

  }, [dispatch]);
  if (status === STATUSES.LOADING) {
    return <Loading />
  }
  if (status === STATUSES.ERROR) {
    return <h2 className="text-black">Product not found!</h2>
  }
  console.log(products.map(p => p.category));
  return (
    <div>
      <h2 className="uppercase text-primary text-3xl mt-20 font-bold">
        Popular books
      </h2>
      <div className="h-[3px] w-[120px] bg-primary mt-2 mx-auto"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 md:container mx-auto my-16 gap-5">
        {products.slice(0, 6).map((book) => (
          <SingleProduct book={book}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;