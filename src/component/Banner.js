import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/book/${id}`);
  };

  const [searchText, setSearchText] = useState('""');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/product/?name=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(e.target.name.value);
  };

  return (
    <section className="relative">
      <div class="banner">
        <div className="bg-green-900/70 py-40">
          <div class="text-center text-neutral-content">
            <div class="">
              <h1 class="mb-5 text-5xl font-bold leading-[60px] text-white">
                THE EASIEST WAY TO
                <br /> BUY ANY BOOK
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-3/5 w-4/5 lg:p-3 p-2 absolute lg:bottom-[-35px] lg:left-[20%] left-[10%] mx-auto lg:-mt-9 -mt-9 bg-white rounded-lg shadow-lg">
        <div class="">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Search by book name"
              class="input input-bordered rounded-md input-primary text-black w-full "
            />
            <input
              type="submit"
              value="Search"
              class="btn btn-primary absolute lg:top-3 lg:right-3 right-[8px] rounded-l-none text-white"
            />
          </form>
          <div className="absolute bg-white shadow-md mx-auto w-[97%]">
            <h3 className="">
              {books?.map((book) => (
                <p
                  onClick={() => navigateToProductDetail(book._id)}
                  className="text-accent hover:text-primary cursor-pointer py-3"
                >
                  {book.name}
                </p>
              ))}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
