import { loaiCongViecServices } from "../../services/loaicongviecservice";
import {
  LAY_DS_LOAI_CONG_VIEC,
  ADD_LOAI_CONG_VIEC,
  EDIT_LOAI_CONG_VIEC,
} from "../types/LoaiCongViecType";
import Swal from "sweetalert2";

export const layDSLoaiCongViecAction = () => {
  return async (dispatch) => {
    try {
      const result = await loaiCongViecServices.layDanhSachLoaiCongViec();
      if (result.status === 200) {
        dispatch({
          type: LAY_DS_LOAI_CONG_VIEC,
          listTypeJob: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};
export const addJobTypeAction = (values) => {
  return async (dispatch) => {
    try {
      const result = await loaiCongViecServices.addJobTypeService(values);
      if (result.status === 200) {
        dispatch({
          type: ADD_LOAI_CONG_VIEC,
          addJob: result.data.content,
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

export const editJobTypeAction = (values) => {
  return async (dispatch) => {
    try {
      const result = await loaiCongViecServices.editJobTypeService(values);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Update success !",
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

export const deleteJobTypeAction = (idJobType) => {
  return async (dispatch) => {
    try {
      const result = await loaiCongViecServices.deleteJobTypeService(idJobType);
      dispatch(layDSLoaiCongViecAction(idJobType));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Remove success!",
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
