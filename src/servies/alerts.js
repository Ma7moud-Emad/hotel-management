import { Zoom, toast } from "react-toastify";

export default function toastAlert(typeT, msg) {
  toast[typeT](msg, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Zoom,
  });
}
