import React, { useEffect, useState } from 'react';

const ShopUserInfo = () => {
    const [countryName, setcountryName]=useState([]);
    useEffect(() =>{
            fetch('https://restcountries.com/v3.1/all')
            .then(res=>res.json())
            .then(data =>setcountryName(data))
    },[])
    return (
        <div>
            <div className="mb-10">
                <h1 className='text-lg font-bold mb-10 '>Contact Information</h1>
                <label className='text-start block'>Email Address</label><br/>

                <input type="text" className='w-full h-[40px] rounded-md' />
            </div>
            <div>
                <h1 className='text-lg font-bold mb-10'>Shipping Information</h1>
                
                   <div className="flex mt-10">
                   <label className='text-start block' >First Name </label> <br/>
                    <input type="text" className='h-[40px] rounded-md mr-2' /><br />
                    <label htmlFor="">Last Name </label> <br/>
                    <input type="text" className='h-[40px] rounded-md' />
                   </div>
                    <label ClassName='text-start block'>Company</label >
                    <input type="text" className='w-full h-[40px] rounded-md' /> 
                    <h2 >Address</h2 >
                    <input type="text" className='w-full h-[40px] rounded-md' />
                    <h2>Apartment, suit,etc.</h2>
                    <input type="text"  className='w-full h-[40px] rounded-md'/>
              
                
                    <div className="flex mt-3 mb-3">
                    <label htmlFor="">City</label><br/>
                    <input type="text" className='h-[40px] rounded-md mr-2' />
                    <label htmlFor="">country </label>
                    <select name="" id="">
                        <option value="" disabled >select country</option>
                        {
                            countryName.map(country => <option>{country.name.common}</option>)
                        }
                       
                    </select>
                    </div>
               
                
                   <div className="flex">
                   <label className=' block ' >State/Province</label>
                    <input type="text" className='h-[40px] rounded-md mr-2' />
                    <label htmlFor="">Postal code</label>
                    <input type="number" className='h-[40px] rounded-md' />
                   </div>
                
            </div>
            <label className='text-start block '>Phone</label>
            <input type="number" name="" id="" className='w-full h-[40px] rounded-md ' />
        </div>
    );
};

export default ShopUserInfo;