import React, { useEffect, useState } from "react";

const ShopUserInfo = () => {
  const [countryName, setcountryName] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountryName(data));
  }, []);
  return (
    <form>
      <div class="relative z-0 mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-md text-black 
          bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-black dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          required=""
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-md  text-black dark:text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name=""
          id=""
          class="block py-2.5 px-0 w-full text-md text-black 
           bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-black dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          required=""
        />
        <label
          for=""
          class="peer-focus:font-medium absolute text-md  text-black dark:text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Address
        </label>
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name=""
          id=""
          class="block py-2.5 px-0 w-full text-md text-black 
          bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-black dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          required=""
        />
        <label
          for=""
          class="peer-focus:font-medium absolute text-md  text-black dark:text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Apartment,suite,etc.
        </label>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            class="block py-2.5 px-0 w-full text-md text-black 
            bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-black dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required=""
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-md  text-black dark:text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            class="block py-2.5 px-0 w-full text-md text-black 
            bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-black dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required=""
          />
          <label
            for="floating_last_name"
            class="peer-focus:font-medium absolute text-md  text-black dark:text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            class="block py-2.5 px-0 w-full text-md text-black 
            bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-black dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required=""
          />
          <label
            for="floating_phone"
            class="peer-focus:font-medium absolute text-md  text-black dark:text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number 
          </label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
      
          <select class="block py-2.5 px-0 w-full text-md text-black 
            bg-transparent border-0 border-b-2 border-black appearance-none  dark:border-black dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" name="" id="">
            <option value="" disabled>Select Country</option>
            {
                countryName.map(country=> <option>{country.name.common}</option>)
            }
          </select>
          <label
            for="floating_company"
            class="peer-focus:font-medium absolute text-md  text-black dark:text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Country Name
          </label>
        </div>
      </div>
     
    </form>
  );
};

export default ShopUserInfo;
