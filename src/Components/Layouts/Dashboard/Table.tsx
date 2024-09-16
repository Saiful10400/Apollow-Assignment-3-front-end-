import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import { useGetProductsQuery } from "../../../Redux/api/api";
import UpdateModal from "../../Ui/UpdateModal";
import { useAppDispatch } from "../../../Redux/feathcer/hoocks";
import { setProduct } from "../../../Redux/feathcer/DashboardSlice";
const Table = () => {
  const { isLoading, data } = useGetProductsQuery(null);

  const dispatch=useAppDispatch()
  // update handle.
  const updateHandle = (data) => {
    console.log(data,"DATA.")
    dispatch(setProduct(data))
    document.getElementById("my_modal_2")?.showModal();
  };

  return (
    <div className="overflow-x-auto mt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr className=" text-xl font-semibold">
            <th>S/N</th>
            <th>Product Name</th>
            <th>Price ($)</th>
            <th>Brand</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="lg:text-base">
          {isLoading
            ? ""
            : data?.data.map((item, idx) => {
                return (
                  <tr
                    key={item._id}
                    className={` ${
                      idx % 2 !== 0 ? "bg-[#ffffff]" : "bg-[#f5f0f09c]"
                    }`}
                  >
                    <td className="font-semibold">{(idx += 1)}</td>
                    <td>
                      <div className="flex items-center justify-start gap-3">
                        <div className="">
                          <div className=" rounded-lg h-[60px] w-[80px]">
                            <img
                              className="w-full h-full rounded-lg object-cover"
                              src={item.img}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold">$ {item.price}</td>
                    <td className="font-semibold">{item.brand}</td>
                    <th>
                      <button
                        onClick={() => updateHandle(item)}
                        className="btn btn-success text-white btn-sm text-lg"
                      >
                        <LiaEditSolid />
                      </button>
                      <button className="btn btn-error text-white btn-sm text-lg ml-4">
                        <MdDeleteForever />
                      </button>
                    </th>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <UpdateModal />
    </div>
  );
};

export default Table;
