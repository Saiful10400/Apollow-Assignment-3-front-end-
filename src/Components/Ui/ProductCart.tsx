import { FaStar } from "react-icons/fa6";
import getNumberArrayFromNumber from "../../Utils/getNumberArrayFromNumber";
import { Link } from "react-router-dom";
const ProductCart = ({ data }) => {
  return (
    <div className="w-full p-2 py-4 rounded-xl shadow-lg bg-white">
      <img src={data?.img} className="w-full h-[120px] object-cover" alt="" />
      <div>
        <h1 className='font-semibold text-gray-500 text-xs'>{data.brand}</h1>
        <h1 className="font-normal text-4xl mt-1">${data.price}</h1>
        <div className="flex items-center ">
          {getNumberArrayFromNumber(data.rating).map((item) => (
            <FaStar className="text-[#f0b407]" key={item} />
          ))}<span className="ml-4">({data.rating})</span>
        </div>
        <h1 className="font-medium  h-[100px] mt-4 mb-3">{data.name.length>=100?data.name.slice(0,100)+"...":data.name}</h1>
      </div>
      <Link to={data._id} className="w-full block text-center py-2 font-semibold border border-gray-400 rounded-3xl">Details</Link>
    </div>
  );
};

export default ProductCart;
