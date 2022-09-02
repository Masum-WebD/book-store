import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineHeart } from "react-icons/ai";
import { BiWalletAlt } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
import { FaShoppingCart, FaUndo } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { VscBook } from "react-icons/vsc";
import { useNavigate, useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import profile from "../asset/Images/author-1.jpg";
import profile2 from "../asset/Images/author-2.jpg";
import "./SingleProductDetails.css";
import auth from "../Firebase/firebase.init";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PageTitle from "./PageTitle";



const SingleProductDetails = () => {
  const { bookId } = useParams();
  const [user] = useAuthState(auth);
  const [item, setItem] = useState([]);

  const { _id, name, img, summary, category, language, author, price, stock } = item;

  const { register, formState: { errors }, handleSubmit, reset } = useForm();


  useEffect(() => {
    fetch(`https://book-store-46yi.onrender.com/product/${bookId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [bookId]);

  const navigate = useNavigate();


  const handleWishList = () => {
    if (user) {
      const product = {
        _id: _id,
        name: name,
        img: img,
        author: author,
        price: price,
        stock: stock,
        email: user.email,
      };
      fetch("https://book-store-46yi.onrender.com/wishList", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product Added to Wishlist Successfully",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
    } else {
      navigate("/login");
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You need to login first",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const onSubmit = async (data) => {

    if (user) {

      const AddToCart = {
        bookName: name,
        customerName: user?.displayName,
        img: img,
        price: price,
        stock: stock,
        email: user?.email,
        phone: data?.phone,
        address: data?.address,
        quantity: data?.quantity
      };

      fetch("https://book-store-46yi.onrender.com/add-to-cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(AddToCart),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Product added to cart successfully',
              showConfirmButton: false,
              timer: 2000
            });
            console.log(data);
          } else {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Something went wrong please try again.',
              showConfirmButton: false,
              timer: 2000
            });
            console.log(data)
          }
        });

    } else {

      navigate("/login");
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'You need to login first',
        showConfirmButton: false,
        timer: 2000
      });

    }

    reset();
    handleClose();
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #FF745C',
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="max-w-[1196px] mx-auto pt-[80px] lg:mt-0">
      <PageTitle title={name === undefined ? "Loading" : `${name}`} />
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
              <h2 className="card-title text-sm text-neutral mb-2 font-medium">
                ${price}
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
                  <AiOutlineHeart className="text-center mr-[4px] text-lg mt-[1px]" />{" "}
                  Add to Wishlist
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
                    {/* <button
                      onClick={handleAddToCart}
                      class="btn mt-5 bg-primary border-none capitalize text-[14px] hover:bg-secondary rounded-[5px] text-sm font-medium text-white mr-5 lg:mr-0"
                    >
                      Add to Cart <FaShoppingCart className="text-sm ml-2" />
                    </button> */}
                    <button onClick={handleOpen} class="btn modal-button mt-5 bg-primary border-none capitalize text-[14px] hover:bg-secondary rounded-[5px] text-sm font-medium text-white mr-5 lg:mr-0">Add to Cart <FaShoppingCart className="text-sm ml-2" /></button>


                    <input type="checkbox" id="cart-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                      <div class="modal-box">
                        <label for="cart-modal" class="btn btn-sm btn-circle btn-secondary absolute right-2 top-2">✕</label>

                      </div>
                    </div>

                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <label onClick={handleClose} class="btn btn-sm btn-circle btn-secondary absolute right-2 top-2">✕</label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-neutral">Name</span>
                            </label>
                            <input
                              className="input input-bordered text-black"
                              value={user?.displayName}
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-neutral">Email</span>
                            </label>
                            <input
                              className="input input-bordered text-black"
                              value={user?.email}
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-neutral">Phone</span>
                            </label>
                            <input
                              type="number"
                              placeholder="Your mobile number"
                              className="input input-bordered text-black"
                              {...register("phone", {
                                required: {
                                  value: true,
                                  message: "Phone number is required",
                                }
                              })}
                            />
                            <label className="label">
                              {errors.phone?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                  {errors.phone.message}
                                </span>
                              )}
                              {errors.phone?.type === "minLength" && (
                                <span className="label-text-alt text-red-500">
                                  {errors.phone.message}
                                </span>
                              )}
                            </label>
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-neutral">Delivery Address</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Your delivery address"
                              className="input input-bordered text-black"
                              {...register("address", {
                                required: {
                                  value: true,
                                  message: "Address number is required",
                                }
                              })}
                            />
                            <label className="label">
                              {errors.address?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                  {errors.address.message}
                                </span>
                              )}
                              {errors.address?.type === "minLength" && (
                                <span className="label-text-alt text-red-500">
                                  {errors.address.message}
                                </span>
                              )}
                            </label>
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-neutral">Quantity</span>
                            </label>
                            <input
                              type="number"
                              placeholder="How many books you want"
                              className="input input-bordered text-black"
                              {...register("quantity", {
                                required: {
                                  value: true,
                                  message: "Quantity is required",
                                }
                              })}
                            />
                            <label className="label">
                              {errors.quantity?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                  {errors.quantity.message}
                                </span>
                              )}
                              {errors.quantity?.type === "minLength" && (
                                <span className="label-text-alt text-red-500">
                                  {errors.quantity.message}
                                </span>
                              )}
                            </label>
                          </div>

                          <input
                            type="submit"
                            value="Add to cart"
                            className="btn btn-primary text-white w-full mt-3"
                          />
                        </form>
                      </Box>
                    </Modal>

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

      <div className="card bg-base-100 shadow text-left my-5 p-5">
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
                href="/"
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
      <div></div>
    </div>
  );
};

export default SingleProductDetails;
