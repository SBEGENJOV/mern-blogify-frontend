import Swal from "sweetalert2";
import { resetErrorAction } from "../../Redux/Slices/globalSlice/globalSlice";
import { useDispatch } from "react-redux";
const ErrorMsg = ({ message }) => {
  const dispatch = useDispatch();
  Swal.fire({
    icon: "error",
    title: "Oops",
    text: message,
  });
  dispatch(resetErrorAction());
};

export default ErrorMsg;
