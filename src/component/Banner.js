import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import sicon from '../../src/asset/Images/Rectangle 22.png';
import bg from '../../src/asset/Images/thebanner.png';

const Banner = () => {
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/book/${id}`);
  };

  const [searchText, setSearchText] = useState('""');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = `https://book-store-46yi.onrender.com/product/?name=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(e.target.name.value);
  };

  return (
    <section className="relative bg-[#F5FFF7] lg:mt-[60px]">
      <div class="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})` }}>

        <div className="lg:py-[90px] py-[50px] lg:px-0 px-4 max-w-[1196px] mx-auto">

          <div class="text-left text-neutral-content lg:w-1/2">
            <div class="">
              <h3 className="text-neutral text-sm lg:text-[16px] font-medium capitalize">
                Explore our online shop and
              </h3>
              <h1 class="mb-5 lg:text-[64px] w-2/3 lg:w-full mt-2 text-2xl font-bold lg:leading-[81px] text-[#0B1B28] capitalize ">
                Get your new <span className="text-primary">book</span> with the best price
              </h1>
            </div>
            <div className=" bg-white rounded-full lg:p-2 shadow-lg">
              <div class="relative">
                <form onSubmit={handleSubmit} className="flex justify-between items-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="Search by book name"
                    class="pl-3 w-full bg-white text-sm text-neutral outline-none"
                  />
                  <span className="bg-primary py-3 px-4 rounded-full flex justify-between items-center">
                    <img src={sicon} alt="" className="mr-2" />
                    <input
                      type="submit"
                      value="Search"
                      class="text-white cursor-pointer text-sm mr-2"
                    />
                    {/* ddd */}
                  </span>
                </form>
                <div className="absolute bg-white w-full">
                  {books?.map((book) => (
                    <p onClick={() => navigateToProductDetail(book._id)} className="text-accent hover:text-primary text-sm cursor-pointer p-3">{book.name}</p>
                  ))}
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
