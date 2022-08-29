import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from '../../src/asset/Images/banner-bg.png';

const Banner = () => {
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/book/${id}`);
  };

  const [searchText, setSearchText] = useState('""');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = `https://the-online-book-shop.herokuapp.com/product/?name=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(e.target.name.value);
  };

  return (
    <section className="relative bg-[#F5FFF7]">
      <div class="bg-no-repeat bg-contain bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="py-32">
          <div class="text-center text-neutral-content">
            <div class="">
              <h1 class="mb-5 lg:text-[64px] text-4xl font-bold lg:leading-[81px] text-[#0B1B28] capitalize">
                Buy your favorite books
                <br />from anywhere
              </h1>
              <h1 className="text-xl text-[#0B1B28CC]">We Are Available 24/7</h1>
            </div>
            <div className="lg:w-2/5 mt-[60px] w-4/5 lg:p-3 p-2 mx-auto bg-white rounded-lg shadow-lg">
              <div class="relative">
                <form onSubmit={handleSubmit} className="flex">
                  <input
                    type="text"
                    name="name"
                    placeholder="Search by book name"
                    class="input input-bordered input-primary rounded-r-none text-black w-full "
                  />
                  <input
                    type="submit"
                    value="Search"
                    class="btn btn-primary rounded-l-none text-white"
                  />
                </form>
                <div className="absolute bg-white shadow-md mx-auto lg:w-full">
                  <h3 className="">
                    {books?.map((book) => (
                      <p onClick={() => navigateToProductDetail(book._id)} className="text-accent hover:text-primary cursor-pointer py-3">{book.name}</p>
                    ))}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Banner;
