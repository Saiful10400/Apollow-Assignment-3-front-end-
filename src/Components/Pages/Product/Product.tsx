import React, { useEffect, useRef, useState } from "react";
import CenterAlign from "../../Helper/CenterAlign";
import { useGetProductsQuery } from "../../../Redux/api/api";
import ProductCart from "../../Ui/ProductCart";
import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Product = () => {
  const { isLoading, data } = useGetProductsQuery(null);

  const initialValue = {
    maxPrice: 0,
    minPrice: 0,
    sortBy: "",
    serchText: "",
  };

  const [searchData, setSearchData] = useState(initialValue);
  const timerIdRef = useRef(null);
  const update = (data) => {
    setSearchData({ ...searchData, ...data });
  };

  

  //filtered data- this is a the data which we get form main object query.

  const [queryData, setQueryData] = useState(null);
  // shalow copyes.
  const [rangeShalow,setRangeShalow]=useState()


  useEffect(() => {
    if (!data?.data) return;
    setQueryData(data.data);
    setRangeShalow(data.data)
  }, [data]);



  // search handle.
  const serArchHandle = (e) => {
    const input = e.target.value;

    const queryItems = data?.data?.filter((item) => {
      const name = item.name.toUpperCase();
      const brand = item.brand.toUpperCase();
      const searchText = input.toUpperCase();
      if (name.indexOf(searchText) !== -1 || brand.indexOf(searchText) !== -1) {
        return true;
      }
      return false;
    });
    update({ maxPrice: 0, minPrice: 0 });
    setQueryData(queryItems);
    setRangeShalow(queryItems)
  };

  // debaunch.
  const debaunch = (fn, delay) => {
    let timerId;
    return (e) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn(e);
      }, delay);
    };
  };



  // range debaunce.
  const rangeDebaunch = (fn, delay) => {
   
    return (e) => {
    
      if (timerIdRef.current){
        clearTimeout(timerIdRef.current);
      } 
      update({ maxPrice: e[1], minPrice: e[0] });
      timerIdRef.current = setTimeout(() => {
        fn(e);
      }, delay);
    };
  };


  // range handle.
  const rangeHadle = (e) => {
   console.log(e,"saiful:::::")
    const queryItem=rangeShalow?.filter(item=>{
      if(item.price>=e[0] && item.price<=e[1]) return true
      return false
    })

    setQueryData(queryItem)
  };



  return (
    <CenterAlign>
      <div>
        <div className="mt-8 flex items-center justify-between">
          <div className=" flex  w-[30%]">
            <input
              onChange={debaunch(serArchHandle, 500)}
              placeholder="Search Keyboards By Name,Keyword or Brand....."
              type="text"
              className="w-full focus:outline-none border-2 border-black rounded-lg py-2 pl-2 font-normal text-lg"
            />
          </div>
          <div className="flex items-center w-[40%] gap-9">
            <h1 className="min-w-[100px] to-center rounded-md text-lg  min-h-[40px] border border-black font-normal">
             Min: ${searchData.minPrice}
            </h1>
            <RangeSlider
              onChange={rangeDebaunch(rangeHadle,500)}
              aria-label={["min", "max"]}
              max={1000}
              min={0}
              value={[searchData.minPrice,searchData.maxPrice]}
              colorScheme="blue"
              // value={[searchData.minPrice, searchData.maxPrice]}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack bg="black" boxSize={20} />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={8} index={0}>
                <Box color="tomato" as={IoIosArrowBack} />
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={8} index={1}>
                <Box color="tomato" as={IoIosArrowForward} />
              </RangeSliderThumb>
            </RangeSlider>
            <h1 className="min-w-[100px] to-center rounded-md text-lg  min-h-[40px] border border-black font-normal">
              Max: ${searchData.maxPrice}
            </h1>
          </div>
          <div>
            <select
              onChange={(e) => update({ sortBy: e.target.value })}
              value={searchData.sortBy}
              className="h-[40px] ml-3 px-3 border border-black rounded-md"
              name=""
              id=""
            >
              <option value="" disabled selected hidden>
                Sort By
              </option>
              <option value="Price,low to high">Price,low to high</option>
              <option value="Price,high to low">Price,high to low</option>
            </select>
          </div>
          <button className="h-[40px] bg-black  text-white w-[100px] rounded-md ml-3 font-semibold">
            Clear
          </button>
        </div>

        {queryData?.length === 0 ? (
          <div className="to-center w-full h-[70vh] text-lg mt-4">
            No Product Available!
          </div>
        ) : (
          <div className="grid grid-cols-1 mt-12 lg:grid-cols-5 lg:gap-5">
            {queryData?.map((item) => (
              <ProductCart key={item._id} data={item} />
            ))}
          </div>
        )}
      </div>
    </CenterAlign>
  );
};

export default Product;
