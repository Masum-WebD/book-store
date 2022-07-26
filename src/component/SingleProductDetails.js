import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "./Hooks/useProducts";
import { FaShoppingCart } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import "./SingleProductDetails.css";
import { BiWalletAlt } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SingleProductDetails = () => {
  const { bookId } = useParams();
  const [book] = useProducts(bookId);
  const [item, setItem] = useState([]);
  const { _id, name, img, summary, category, language, author, price, stock } =
    item;
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState();

  const handleDecrement = () => {
    if (qty > 1) {
      setQty((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    if (qty < 100) {
      setQty((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    fetch(`https://p-hero-bookshop.herokuapp.com/product/${bookId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [bookId]);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      bookId: _id,
      book: name,
      totalPrice,
      order: qty,
    };
  };

  return (
    <div className="container lg:p-32 px-5 mt-20 lg:mt-0">
      <h2 className="text-left my-2 text-green-500 font-bold">Book / {name}</h2>
      <div onSubmit={handlePlaceOrder} className="gap-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <figure>
              <img src={img} className="book-img" alt="tool" />
            </figure>
          </div>
          <div className="book-card">
            <h2 className="card-title text-left mb-3 text-2xl text-gray-700">{name}</h2>
            <h2 className="card-title mb-3 text-sm text-gray-700">
              by <span className=" text-green-500">{author}</span>
            </h2>
            <h2 className="card-title text-secondary mb-2 font-bold">
              ${price}
            </h2>
            <div className="">
              <p className="text-xl text-left text-gray-600">
                In Stock: {stock}
              </p>
            </div>
            <div class="divider"></div>
            <div>
              <h2 className="text-xl text-left my-2 text-gray-600">Quantity</h2>
              <div className="flex flex-row gap-6">
                <div className="w-16 flex items-center justify-center">
                  <div className="from-control px-5 py-3 bg-primary border-green-200 rounded-lg text-white text-center my-auto">
                    {qty}
                  </div>

                  <div className="flex flex-col ml-2">
                    <div
                      type="button"
                      onClick={handleIncrement}
                      className="border-green-200 rounded-md"
                    >
                      <span className=" text-white btn btn-secondary btn-xs">
                        +
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleDecrement}
                      className=""
                    >
                      <span className=" text-white btn btn-secondary btn-xs">
                        -
                      </span>
                    </button>
                  </div>
                </div>
                <div>
                  <button class="btn btn-primary text-white">
                    Add To Cart <FaShoppingCart className="text-lg ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul class="menu bg-base-100 w-56 p-2 rounded-box">
              <li>
                <a className="text-left text-gray-600">
                  <BsCashCoin className="text-lg" />
                  Cash On Delivery
                </a>
              </li>
              <li>
                <a className="text-left text-gray-600">
                  <FaUndo className="text-lg" />7 Days Happy Return
                </a>
              </li>
              <li>
                <a className="text-left text-gray-600">
                  <TbTruckDelivery className="text-2xl" />
                  Delivery Charge <br />$50(Online Order)
                </a>
              </li>
              <li>
                <a className="text-left text-gray-600">
                  <BiWalletAlt className="text-lg" />
                  Purchase & Earn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-left my-12">
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
              <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
          <TabPanel>
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
              <textarea
                placeholder="Please write your honest opinion here..."
                className="review-area"
              />

              <button className="review-btn text-white">Submit</button>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SingleProductDetails;
