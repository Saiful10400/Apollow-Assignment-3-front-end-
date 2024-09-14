import swal from "sweetalert";

const imageUpload = (data) => {
  const image = new FormData();
  image.append("image", data);

  fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB_SECRET}`, {
    method: "POST",
    body: image,
  })
    .then((details) => details.json())
    .then((res) => {
console.log(res.data.display_url)
    }).catch(()=>{
        swal("Upload Faild!", "Please check your file and try again.", "error")
    })
};

export default imageUpload;
