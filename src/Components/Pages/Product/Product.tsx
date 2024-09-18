import React, { useState } from "react";
import CenterAlign from "../../Helper/CenterAlign";
import { useGetProductsQuery } from "../../../Redux/api/api";
import ProductCart from "../../Ui/ProductCart";
import { Box, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Product = () => {
  const { isLoading, data } = useGetProductsQuery(null);

  const initialValue={
    maxPrice:0,
    minPrice:0,
    sortBy:"",
    serchText:""
  }

  const[searchData,setSearchData]=useState(initialValue)

  const update = (data) => {

    setSearchData({ ...searchData, ...data });
  };

  // range handle.
  const rangeHadle = (e) => {
    update({maxPrice:e[1],minPrice:e[0]})
    console.log(e)
  };
  return (
    <CenterAlign>
      <div>


        <div className="mt-8 flex items-center justify-between">
        <div className=" flex  w-[30%]">

          <input
            placeholder="Search Keyboards By Name,Keyword or Brand....."
            type="text"
            className="w-full focus:outline-none border-2 border-black rounded-lg py-2 pl-2 font-normal text-lg"
          />
        </div>
        <div className="flex items-center w-[40%] gap-9">
            <h1 className="min-w-[80px] to-center rounded-md text-xl  min-h-[40px] border border-black font-semibold">${searchData.minPrice}</h1>
            <RangeSlider onChange={rangeHadle} aria-label={["min", "max"]} colorScheme="blue" defaultValue={[searchData.minPrice, searchData.maxPrice]}>
              <RangeSliderTrack>
                <RangeSliderFilledTrack bg="black" boxSize={20} />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={8} index={0} >
              <Box color='tomato' as={IoIosArrowBack} />
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={8} index={1} >
              <Box color='tomato' as={IoIosArrowForward} />
              </RangeSliderThumb>
            </RangeSlider>
            <h1 className="min-w-[80px] to-center rounded-md text-xl  min-h-[40px] border border-black font-semibold">${searchData.maxPrice}</h1>
        </div>
        <div>
            <select onChange={(e)=>update({sortBy:e.target.value})} value={searchData.sortBy} className="h-[40px] ml-3 px-3 border border-black rounded-md" name="" id="">
                <option value="" disabled selected hidden>Sort By</option>
                <option value="Price,low to high">Price,low to high</option>
                <option value="Price,high to low">Price,high to low</option>
            </select>
        </div>
        <button className="h-[40px] bg-black  text-white w-[100px] rounded-md ml-3 font-semibold">Clear</button>
        </div>
       

        <div className="grid grid-cols-1 mt-12 lg:grid-cols-5 lg:gap-5">
          {data?.data?.map((item) => (
            <ProductCart key={item._id} data={item} />
          ))}
        </div>
      </div>
    </CenterAlign>
  );
};

export default Product;
