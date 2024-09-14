import imageUpload from "../../Utils/imageUpload";
import InputField from "./Input";
let url = "https://www.daskeyboard.com/images/mactigr/MacTigr-thumb-top.jpeg";
const Modal = () => {
  return (
    <dialog id="my_modal" className="modal">
      <div className="modal-box lg:max-w-[30vw] ">
        <form className="mb-4" method="dialog  ">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {/* main content is form here. */}

        <label htmlFor="product_image">
          <div className="border border-black lg:h-[200px] ">
            <img className="w-full h-full object-cover" src={url} alt="" />
          </div>
        </label>

        <form action="">
          <InputField
            type="text"
            name="companyName"
            placeholder="Company Name"
          />
        </form>

        {/* <input
          id="product_image"
          type="file"
          onInput={(e) => imageUpload(e.target.files[0])}
        /> */}
      </div>
    </dialog>
  );
};

export default Modal;
