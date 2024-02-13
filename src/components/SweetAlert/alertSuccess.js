import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const alertSuccess = () => {
  // const navigate = useNavigate()
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Booking success !",
    showConfirmButton: false,
    timer: 1500,
  }).then(function () {
    window.location.href = "/";
  });
};

const alertDeleteSuccess = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Remove success !",
    showConfirmButton: false,
    timer: 1500,
  });
};

const alertEditSuccess = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Update success!",
    showConfirmButton: false,
    timer: 1500,
  }).then(function () {
    window.location.reload();
  });
};

const alertSignUpSuccess = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Sign up success !",
    showConfirmButton: false,
    timer: 1500,
  }).then(function () {
    window.location.href = "/login";
  });
};

export {
  alertSuccess,
  alertDeleteSuccess,
  alertEditSuccess,
  alertSignUpSuccess,
};
