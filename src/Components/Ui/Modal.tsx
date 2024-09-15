import { useState } from "react";
import imageUpload from "../../Utils/imageUpload";
import InputField from "./Input";
import Button from "./Button";

const Modal = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  // image upload handle.
  const imageUploadHandle = async (e) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);

    // upload image.
    setIsUploading(true);
    setErrorMessage(null);
    imageUpload(e.target.files[0])
      .then((details) => details.json())
      .then((res) => {
        setImageUrl(res.data.display_url);
        setIsUploading(false);
      })
      .catch(() => {
        isUploading(false)
        setErrorMessage(
          <span className="font-bold text-red-400">"Upload Failed!"</span>
        );
      });
  };

  // form submit handle.
  const formSubmitHandle = (e) => {
    e.preventDefault();
   if(isUploading && !imageUrl) return
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const brand = form.brand.value;
    const img = imageUrl;
    console.log({name,price,quantity,rating,description,brand,img})
  };
  return (
    <dialog id="my_modal" className="modal">
      <div className="modal-box lg:max-w-[50vw] ">
        <form className="mb-4" method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {/* main content is form here. */}
        <h1 className="font-semibold text-xl mb-4">Crate A New Product.</h1>
        <div className="flex flex-col lg:flex-row gap-5">
          <label
            className="lg:w-1/2 h-max cursor-pointer"
            htmlFor="product_image"
          >
            <div className="rounded-lg overflow-hidden w-full h-[200px] ">
              {imageUrl ? (
                <div className="relative w-full h-full">
                  {isUploading && (
                    <div className="to-center flex-col text-gray-200 rounded-lg absolute top-0 left-0 w-full h-full bg-[#3b3b3bc0]">
                      <span
                        className={
                          errorMessage
                            ? "hidden"
                            : "loading loading-spinner loading-lg"
                        }
                      ></span>
                      <h1>{errorMessage ? errorMessage : "Uploading"}</h1>
                    </div>
                  )}
                  <img
                    className="w-full h-full object-cover"
                    src={imageUrl}
                    alt=""
                  />
                </div>
              ) : (
                <div className="w-full h-full border-dashed border-2 border-black rounded-lg to-center">
                  Click To Upload
                </div>
              )}
            </div>
          </label>
          <input
            className="hidden"
            id="product_image"
            type="file"
            onInput={imageUploadHandle}
          />
          <form onSubmit={formSubmitHandle} className="lg:w-[50%] " action="">
            <div className="grid grid-cols-1 gap-3 gap- lg:grid-cols-2">
              <InputField type="text" name="name" placeholder="Product Name" />
              <InputField type="text" name="brand" placeholder="Brand Name" />
              <InputField
                type="number"
                name="price"
                placeholder="Product Price"
              />
              <InputField
                type="number"
                name="quantity"
                placeholder="Product Quantity"
              />
              <InputField
                type="number"
                name="rating"
                placeholder="Product Rating"
              />
            </div>
            <InputField
              type="textarea"
              name="description"
              placeholder="Product Description"
            />
            <div className="text-end">
              <Button text={"Create"} />
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
