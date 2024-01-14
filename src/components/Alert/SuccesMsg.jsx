import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { resetSuccesAction } from "../../Redux/Slices/globalSlice/globalSlice";

const SuccesMsg = ({ message }) => {
  const dispatch = useDispatch();
  Swal.fire({
    icon: "success",
    title: "Tebrikler",
    text: message,
  });
  dispatch(resetSuccesAction());
};

export default SuccesMsg;
