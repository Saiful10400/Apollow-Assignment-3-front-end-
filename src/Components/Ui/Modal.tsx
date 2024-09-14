import imageUpload from "../../Utils/imageUpload";

const Modal = () => {
  return (
    <dialog id="my_modal" className="modal">
      <div className="modal-box p-3">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {/* main content is form here. */}

<input type="file" onInput={e=>imageUpload(e.target.files[0])} />

      </div>
    </dialog>
  );
};

export default Modal;
