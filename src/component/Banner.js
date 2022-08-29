import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from '../../src/asset/Images/thebanner.png';
import sicon from '../../src/asset/Images/Rectangle 22.png';

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
      <div class="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})` }}>
        <div className="lg:py-[90px] max-w-[1196px] mx-auto">
          <div class="text-left text-neutral-content w-1/2">
            <div class="">
              <h3 className="text-neutral text-[16px] font-medium capitalize">
                Explore our online shop and
              </h3>
              <h1 class="mb-5 lg:text-[64px] mt-2 text-4xl font-bold lg:leading-[81px] text-[#0B1B28] capitalize ">
                Get your new <span className="text-primary">book</span> with the best price
              </h1>
            </div>
            <div className=" bg-white rounded-full p-2 shadow-lg">
              <div class="">
                <form onSubmit={handleSubmit} className="flex justify-between items-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="Search by book name"
                    class="pl-3"
                  />
                  <span className="bg-primary p-3 rounded-full flex justify-between items-center">
                    <img src={sicon} alt="" />
                    <input
                      type="submit"
                      value="Search"
                      class=" text-white pl-2"
                    />
                  </span>
                </form>
                <div className="">
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
