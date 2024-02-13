import { nguoiDungServices } from "../../services/nguoiDungServices";
import {
  GET_USER_ACTION,
  GET_USER_ID_ACTION,
  POST_USER_ACTION,
  POST_AVATAR_ACTION,
  PUT_USER_ID_ACTION,
  SEARCH_USER,
} from "../types/NguoiDungType";
import {
  alertEditSuccess,
  alertSuccess,
} from "../../components/SweetAlert/alertSuccess";
import Swal from "sweetalert2";

export const getUserAction = () => {
  return async (dispatch) => {
    try {
      const result = await nguoiDungServices.getUserService();
      if (result.status === 200) {
        dispatch({
          type: GET_USER_ACTION,
          user: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const getUserIdAction = (userId) => {
  return async (dispatch) => {
    try {
      const result = await nguoiDungServices.getUserIdService(userId);

      if (result.status === 200) {
        dispatch({
          type: GET_USER_ID_ACTION,
          userId: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const putUserIdAction = (values) => {
  return async (dispatch) => {
    try {
      const result = await nguoiDungServices.putUserIdService(values);
      alertEditSuccess();
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const postUserAction = (values) => {
  return async (dispatch) => {
    try {
      const result = await nguoiDungServices.postUserService(values);
      if (result.status === 200) {
        dispatch({
          type: POST_USER_ACTION,
          userId: result.data?.content,
        });
      }
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Add success !",
        showConfirmButton: false,
        timer: 1500,
      }).then(function () {
        window.location.reload();
      });
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const postAvatarAction = (formdata) => {
  return async (dispatch) => {
    try {
      const result = await nguoiDungServices.postAvatarService(formdata);

      console.log(result.data?.content);
      if (result.status === 200) {
        dispatch({
          type: POST_AVATAR_ACTION,
          ThongTinDangNhap: result.data?.content,
        });
        const avatar = result.data?.content?.avatar;
        const userLoginData = JSON.parse(localStorage.getItem("USER_LOGIN"));
        if (userLoginData) {
          userLoginData.user.avatar = avatar;
          localStorage.setItem("USER_LOGIN", JSON.stringify(userLoginData));
        }
      }
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Add sucess!",
        showConfirmButton: false,
        timer: 1500,
      }).then(function () {
        window.location.reload();
      });
    } catch (error) {
      console.log("error: ssdsdsd", error.response?.data);
    }
  };
};

export const deleteUserAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await nguoiDungServices.deleteUserService(id);

      dispatch(getUserAction(id));

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Remove success !",
        showConfirmButton: false,
        timer: 1500,
      }).then(function () {
        window.location.reload();
      });
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};
