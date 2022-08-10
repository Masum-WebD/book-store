import React, { useEffect, useState } from "react";

import "./Banner.css";

const Banner = () => {

  const [searchText, setSearchText] = useState('""');
  const [books, setBooks] = useState([]);




  useEffect(() => {
    const url = `https://p-hero-bookshop.herokuapp.com/product/?name=${searchText}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [searchText])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchText(e.target.name.value)
  }



  return (
    <section className="">
      <div class="banner">
        <div className="bg-green-900/70 py-40">
          <div class="text-center text-neutral-content">
            <div class="">
              <h1 class="mb-5 text-5xl font-bold leading-[60px] text-white">
                THE EASIEST WAY TO<br /> BUY ANY BOOK
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-3/5 w-4/5 lg:p-3 p-2 mx-auto lg:-mt-9 -mt-9 relative bg-white rounded-lg shadow-lg">
        <div class="relative">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Search by book name" class="input input-bordered rounded-md input-primary text-black w-full " />
            <input type="submit" value="Search" class="btn btn-primary absolute top-0 right-0 rounded-l-none text-white" />
          </form>
          <div>
            <h3>
              {books?.map(book => <p className="text-accent">{book.name}</p>)}
            </h3>
          </div>

        </div>
      </div>
    </section >
  );
};

export default Banner;