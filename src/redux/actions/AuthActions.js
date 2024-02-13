import { useNavigate } from "react-router-dom";
import { alertSignUpSuccess } from "../../components/SweetAlert/alertSuccess";
import { authServices } from "../../services/authServices";
import { DANG_KY_ACTION, DANG_NHAP_ACTION } from "../types/AuthType";
import Swal from "sweetalert2";

export const dangNhapAction = (thongTinDangNhap, navigate) => {
  return async (dispatch) => {
    try {
      const result = await authServices.dangNhapService(thongTinDangNhap);
      if (result.status === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login success !",
          showConfirmButton: false,
          timer: 1500,
        }).then(function () {
          window.location.href = "/";
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const dangKyAction = (thongTinDangKy, navigate) => {
  return async (dispatch) => {
    // const navigate = useNavigate()
    try {
      const result = await authServices.dangKyService(thongTinDangKy);
      alertSignUpSuccess();
      if (result.status === 200) {
        dispatch({
          type: DANG_KY_ACTION,
          thongTinDangKy: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
      Swal.fire({
        position: "center",
        icon: "fail",
        title: "Bạn đã đăng ký thất bại !",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};
