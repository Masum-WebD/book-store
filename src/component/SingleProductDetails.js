
import React, { useEffect, useState } from "react";
import { BiWalletAlt } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
import { VscBook } from "react-icons/vsc";
import { FaShoppingCart, FaUndo } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import profile from "../asset/Images/author-1.jpg";
import profile2 from "../asset/Images/author-2.jpg";
import "./SingleProductDetails.css";
import { add } from "../store/cartSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
const SingleProductDetails = () => {
  const { bookId } = useParams();
  const [user] = useAuthState(auth);
  const [item, setItem] = useState([]);
  const { _id, name, img, summary, category, language, author, price, stock } =
    item;

  useEffect(() => {
<<<<<<< HEAD
 fetch(`http://localhost:5000/product/${bookId}`)
=======

    fetch(`https://book-store-46yi.onrender.com/product/${bookId}`)
>>>>>>> 6620c76314bf0aa478fbc6b7a28565049185c267
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [bookId]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    const AddToCart = {
      _id: _id,
      name: name,
      img: img,
      author: author,
      price: price,
      stock: stock,
      email: user.email,
    };
<<<<<<< HEAD
    fetch("http://localhost:5000/cartProduct", {
=======

    fetch("https://book-store-46yi.onrender.com/cartProduct", {
>>>>>>> 6620c76314bf0aa478fbc6b7a28565049185c267
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AddToCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleWishList = () => {
    const product = {
      _id: _id,
      name: name,
      img: img,
      author: author,
      price: price,
      stock: stock,
      email: user.email,
    };
<<<<<<< HEAD
    fetch("http://localhost:5000/wishList", {
=======
    fetch("https://book-store-46yi.onrender.com/wishList", {
>>>>>>> 6620c76314bf0aa478fbc6b7a28565049185c267
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Product Added to Wishlist Successfully");
        }
      });
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
<<<<<<< HEAD
    fetch("http://localhost:5000/products")
=======
    fetch("https://book-store-46yi.onrender.com/products")
>>>>>>> 6620c76314bf0aa478fbc6b7a28565049185c267
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="max-w-[1196px] mx-auto pt-[80px] lg:mt-0">
      <div className="lg:gap-3">

        <div class="card lg:card-side bg-base-100 shadow-sm rounded-none lg:mt-5">
          <figure
            className=" 
          rounded-md"
          >
            <img src={img} alt="Book" className="rounded-md" />
          </figure>
          <div class="card-body">
            <div>
              <h2 className="card-title text-left mb-3 text-2xl text-neutral">
                {name}
              </h2>
              <h2 className="card-title mb-3 text-sm capitalize text-neutral">
                by:<span className=" text-primary">{author}</span>
              </h2>
              <h2 className="card-title text-sm text-neutral mb-2 font-medium">$
                {price}
              </h2>
              <div className="">
                <p className="text-sm text-left text-neutral">
                  In Stock: {stock}
                </p>
                <button
                  onClick={() => handleWishList(item)}
                  className="text-start text-neutral text-sm capitalize flex hover:text-primary pt-5"
                >
                  {" "}
                  <AiOutlineHeart className="text-center mr-[4px] text-lg mt-[1px]" /> Add to
                  Wishlist
                </button>
              </div>
              <div className="mt-2">
                <div className="flex flex-row lg:gap-6">
                  <div className="flex items-center justify-center">
                    {/* <button class="btn btn-primary text-white">
                    Read The Book <VscBook className="text-lg ml-2" />
                  </button> */}
                    <label
                      for="my-modal-5"
                      class="btn mt-5 bg-primary border-none capitalize text-[14px] hover:bg-secondary rounded-[5px] text-sm font-medium text-white mr-5 lg:mr-0"
                    >
                      Read a bit <VscBook className="ml-2" />
                    </label>

                    <input
                      type="checkbox"
                      id="my-modal-5"
                      class="modal-toggle"
                    />
                    <div class="modal modal-bottom sm:modal-middle">
                      <div class="modal-box w-2/3 relative">
                        <label
                          for="my-modal-5"
                          class="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <img
                          src="https://i.ibb.co/FVs7qgZ/longs.png"
                          alt="longs"
                          border="0"
                        />
                        <div class="modal-action"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleAddToCart}
                      class="btn mt-5 bg-primary border-none capitalize text-[14px] hover:bg-secondary rounded-[5px] text-sm font-medium text-white mr-5 lg:mr-0"
                    >
                      Add to Cart <FaShoppingCart className="text-sm ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-2 bg-gray-100">
            <ul class="menu bg-gray-100 p-2">
              <li>
                <a className="text-left text-neutral" href=" ">
                  <BsCashCoin className="text-lg" />
                  Cash On Delivery
                </a>
              </li>
              <li>
                <a className="text-left text-neutral" href=" ">
                  <FaUndo className="text-lg" />7 Days Happy Return
                </a>
              </li>
              <li>
                <a className="text-left text-neutral" href=" ">
                  <TbTruckDelivery className="text-2xl" />
                  Delivery Charge <br />
                  $50(Online Order)
                </a>
              </li>
              <li>
                <a className="text-left text-neutral" href=" ">
                  <BiWalletAlt className="text-lg" />
                  Purchase & Earn
                </a>
              </li>
              {/* <li>
                <div class="stats shadow">
                  <div class="stat">
                    <h1 class=" text-green-500">Positive Ratings</h1>
                    <h3 class="text-gray-700">64%</h3>
                  </div>
                  <div class="divider lg:divider-horizontal"></div> 
                  <div class="stat">
                    <h1 class=" text-green-500">Shipped On Time</h1>
                    <h3 class="text-gray-700">84%</h3>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-sm text-left my-5 p-5">
        <Tabs>
          <TabList>
            <Tab>
              <h3 class="collapse-title font-medium text-primary">Summary</h3>
            </Tab>
            <Tab>
              <h3 class="collapse-title font-medium text-primary">
                Specification
              </h3>
            </Tab>
            <Tab>
              <h3 class="collapse-title font-medium text-primary">Reviews</h3>
            </Tab>
          </TabList>

          <TabPanel>
            <p className="text-neutral font-normal leading-6">{summary}</p>
            <p className="text-gray-500">
              Source:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Mario"
                target="_blank"
                rel="noreferrer"
              >
                Wikipedia
              </a>
            </p>
          </TabPanel>
          <TabPanel className="overflow-auto lg:overflow-visible">
            <table class="table w-full">
              <tbody>
                <tr>
                  <td className="text-primary">Title</td>
                  <td className="text-gray-600">{name}</td>
                </tr>
                <tr>
                  <td className="text-primary">Author</td>
                  <td className="text-gray-600">{author}</td>
                </tr>
                <tr>
                  <td className="text-primary">Category</td>
                  <td className="text-gray-600">{category}</td>
                </tr>
                <tr>
                  <td className="text-primary">Language</td>
                  <td className="text-gray-600">{language}</td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
          <TabPanel>
            <div class="flex flex-col">
              <h2 className="text-primary font-semibold">Write Your Review</h2>

              <div class="rating my-2">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
              </div>

              <textarea
                placeholder="Please write your honest opinion here..."
                className="review-area textarea text-black"
              />

              <button className="review-btn text-white">Submit</button>
            </div>

            <article className="mt-14">
              <div class="flex items-center mb-4 space-x-4">
                <img class="w-10 h-10 rounded-full" src={profile} alt="" />
                <div class="space-y-1 font-medium ">
                  <p className="text-black">Jese Leos</p>
                </div>
              </div>
              <div class="flex items-center mb-1">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>

              <p class="mb-2 font-light text-black">
                Thanks for fast delivery. The book quality is good.
              </p>
              <a
                href="#"
                class="block mb-5 text-sm font-medium link text-primary"
              >
                Read more
              </a>
            </article>

            <article className="mt-14">
              <div class="flex items-center mb-4 space-x-4">
                <img class="w-10 h-10 rounded-full" src={profile2} alt="" />
                <div class="space-y-1 font-medium ">
                  <p className="text-black">Chris Hemsworth</p>
                </div>
              </div>
              <div class="flex items-center mb-1">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p class="mb-2 font-light text-black">
                This is my third order from book store. As a book lover I can
                say proudly that the site is very helpful for a book reader.
                Thank you book store.
              </p>
              <a
                href="# "
                class="block mb-5 text-sm font-medium link text-primary"
              >
                Read more
              </a>
            </article>
          </TabPanel>
        </Tabs>
      </div>
      <div>
        {/* <h1 className="uppercase text-gray-600 text-2xl mt-10 mb-5 font-bold">
          Related Books
        </h1> */}
        {/* <Carousel breakPoints={breakPoints}>
          {products.slice(50, 68).map((book) => (
            <RelatedProducts book={book}></RelatedProducts>
          ))}
        </Carousel> */}
      </div>
    </div>
  );
};

export default SingleProductDetails;