import Swal from "sweetalert2";

const SuccesMsg = ({ message }) => {
  Swal.fire({
    icon: "İşlem Başarılı",
    title: "Aferin",
    text: message,
  });
};

export default SuccesMsg;
