import { useEffect, useState } from "react";
import { MdOutlineCategory } from "react-icons/md";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import EachProductForShop from "./EachProductForShop";
import Loading from "./Loading";

const Shop = () => {
  const { data, isLoading } = useQuery("AllProducts", () =>
    fetch("https://book-store-46yi.onrender.com/products").then((res) => res.json())
  );

  const [filteredItem, setFilteredItem] = useState([]);

  const showAllProduct = () => {
    fetch("https://book-store-46yi.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setFilteredItem(data));
  };

  useEffect(() => {
    setFilteredItem(data);
  }, [data]);

  const filterResult = (categoryName) => {
    const result = data?.filter((curDate) => {
      return curDate.category === categoryName;
    });

    setFilteredItem(result);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div class="drawer drawer-mobile ">
      {/* <PageTitle title="Shop" /> */}
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <label
        for="my-drawer-2"
        class="btn btn-primary absolute top-6 drawer-button lg:hidden"
      >
        Open drawer
      </label>
      <div class="drawer-content py-10">
        <div className="flex justify-between items-center lg:px-7 px-2">
          <div class="breadcrumbs text-black lg:text-lg lg:font-semibold">
            <ul>
              <li>
                <Link to="">Shop</Link>
              </li>
              <li>
                <Link onClick={() => showAllProduct()} to="">
                  All Products
                </Link>
              </li>
              {filteredItem?.slice(0, 1).map((b) => (
                <li>{b.category}</li>
              ))}
            </ul>
          </div>
          <h1 className="text-lg text-black my-4 font-semibold">
            Showing all {filteredItem?.length} books
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {filteredItem?.map((EachBook) => (
            <EachProductForShop
              key={EachBook._id}
              book={EachBook}
            ></EachProductForShop>
          ))}
        </div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="text-left p-10 overflow-y-auto w-80 text-base-content bg-white">
          <h1 className="text-2xl text-black font-semibold text-left">
            <MdOutlineCategory className="inline-block relative bottom-[2px]" />{" "}
            Categories
          </h1>
          <div className="border-t-2 border-gray-300 mt-3"></div>
          <li className="text-black my-1 hover:underline hover:underline-offset-2 active:text-red-800">
            <Link onClick={() => filterResult("Poem")} to="">
              Poem
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link onClick={() => filterResult("Novel")} to="">
              Novel
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link onClick={() => filterResult("Drama")} to="">
              Drama
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link onClick={() => filterResult("History")} to="">
              History
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link onClick={() => filterResult("Research")} to="">
              Research
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link onClick={() => filterResult("Business")} to="">
              Business
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link onClick={() => filterResult("Criticism")} to="">
              Criticism
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link onClick={() => filterResult("Biography")} to="">
              Biography
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link onClick={() => filterResult("Phycology")} to="">
              Phycology
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link onClick={() => filterResult("Philosophy")} to="">
              Philosophy
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link onClick={() => filterResult("Science fiction")} to="">
              Science fiction
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link onClick={() => filterResult("Mystery and thriller")} to="">
              Mystery and thriller
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link onClick={() => filterResult("Fantasy and adventure")} to="">
              Fantasy and adventure
            </Link>
          </li>
          <li className="text-black my-1 hover:underline hover:underline-offset-2">
            <Link
              onClick={() => filterResult("Science and technologies")}
              to=""
            >
              Science and technologies
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shop;
