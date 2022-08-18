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
const SingleProductDetails = () => {
  const { bookId } = useParams();

  const [item, setItem] = useState([]);
  const { _id, name, img, summary, category, language, author, price, stock } =
    item;

  useEffect(() => {
    fetch(`http://localhost:5000/product/${bookId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [bookId]);

  const handleAddToCart = () => {
    const AddToCart = {
      _id: _id,
      name: name,
      img: img,
      author: author,
      price: price,
      stock: stock,
    };
    fetch("http://localhost:5000/cartProduct", {
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
    };
    fetch("http://localhost:5000/wishList", {
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

  return (
    <div className="container lg:p-32 p-5 mt-20 lg:mt-0">
      <h2 className="text-left my-2 text-green-500 font-bold">Book / {name}</h2>
      <div className="lg:gap-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
          <div>
            <figure>
              <img src={img} className="book-img" alt="tool" />
            </figure>
          </div>
          <div className="book-card">
            <h2 className="card-title text-left mb-3 text-2xl text-gray-700">
              {name}
            </h2>
            <h2 className="card-title mb-3 text-sm text-gray-700">
              by <span className=" text-green-500">{author}</span>
            </h2>
            <h2 className="card-title text-secondary mb-2 font-bold">
              <span className="line-through text-gray-600">$1500</span> ${price}
            </h2>
            <div className="">
              <p className="text-xl text-left text-gray-600">
                In Stock: {stock}
              </p>
              <button
                onClick={() => handleWishList(item)}
                className="text-start mt-[10px] text-gray-600 text-lg flex hover:text-primary pt-5"
              >
                {" "}
                <AiOutlineHeart className="text-center mt-[5px]" /> Add to
                Wishlist
              </button>
            </div>
            <div class="divider"></div>
            <div>
              <div className="flex flex-row lg:gap-6">
                <div className="flex items-center justify-center">
                  {/* <button class="btn btn-primary text-white">
                    Read The Book <VscBook className="text-lg ml-2" />
                  </button> */}
                  <label for="my-modal-6" class="btn btn-primary text-sm font-normal text-white">Read a bit <VscBook className="text-lg ml-2" /></label>

                  <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                  <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box w-2/3 relative">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src="https://i.ibb.co/FVs7qgZ/longs.png" alt="longs" border="0"/>
                        <div class="modal-action">
                        </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleAddToCart}
                    class="btn btn-primary text-sm font-normal text-white"
                  >
                    Add to Cart <FaShoppingCart className="text-sm ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul class="menu bg-base-100 w-56 p-2 rounded-box">
              <li>
                <a className="text-left text-gray-600" href=" ">
                  <BsCashCoin className="text-lg" />
                  Cash On Delivery
                </a>
              </li>
              <li>
                <a className="text-left text-gray-600" href=" ">
                  <FaUndo className="text-lg" />7 Days Happy Return
                </a>
              </li>
              <li>
                <a className="text-left text-gray-600" href=" ">
                  <TbTruckDelivery className="text-2xl" />
                  Delivery Charge <br />
                  $50(Online Order)
                </a>
              </li>
              <li>
                <a className="text-left text-gray-600" href=" ">
                  <BiWalletAlt className="text-lg" />
                  Purchase & Earn
                </a>
              </li>
            </ul>
            <div>
              <h1 className="uppercase text-gray-600 text-lg font-bold">
                Related Books
              </h1>
              <div class="w-50 carousel rounded-box">
                <div class="carousel-item w-full">
                  <div class="flex shadow-lg gap-5 p-5 border-box">
                    <img
                      className="object-scale-down h-[160px] w-[115px]"
                      src={img}
                      alt=""
                    />
                    <div className="text-left flex flex-col text-accent">
                      <h2 className="text-lg font-bold">{name}</h2>
                      <p>{author}</p>
                      <p>${price}</p>
                      <button
                        style={{ marginTop: "25px", maxWidth: "155px" }}
                        className="bg-primary text-white py-2 px-2 rounded-sm mt-4 uppercase"
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left my-5">
        <Tabs>
          <TabList>
            <Tab>
              <h3 class="collapse-title font-medium text-green-500">Summary</h3>
            </Tab>
            <Tab>
              <h3 class="collapse-title font-medium text-green-500">
                Specification
              </h3>
            </Tab>
            <Tab>
              <h3 class="collapse-title font-medium text-green-500">Reviews</h3>
            </Tab>
          </TabList>

          <TabPanel>
            <p className="text-gray-600">{summary}</p>
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
    </div>
  );
};

export default SingleProductDetails;
