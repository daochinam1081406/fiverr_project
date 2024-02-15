import { congViecServices } from "../../services/congViecServices";
import {
  ADD_CONG_VIEC,
  EDIT_CONG_VIEC,
  INFO_CONG_VIEC,
  LAY_CHI_TIET_LOAI_CONG_VIEC,
  LAY_CONG_VIEC_CHI_TIET,
  LAY_CONG_VIEC_THEO_CHI_TIET_LOAI,
  LAY_DS_CONG_VIEC,
  LAY_DS_CONG_VIEC_THEO_TEN,
  SET_MENU_CONG_VIEC,
  POST_IMAGE,
  THEM_CONG_VIEC,
} from "../types/CongViecTypes";
import Swal from "sweetalert2";

export const layDSCongViecAction = () => {
  return async (dispatch) => {
    try {
      const result = await congViecServices.layDanhSachCongViec();
      if (result.status === 200) {
        dispatch({
          type: LAY_DS_CONG_VIEC,
          listJob: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const layMenuCongViecAction = () => {
  return async (dispatch) => {
    try {
      const result = await congViecServices.layMenuCongViec();
      if (result.status === 200) {
        dispatch({
          type: SET_MENU_CONG_VIEC,
          menuJob: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};
export const postImageJobAction = (formdata, maCongViec) => {
  return async (dispatch) => {
    try {
      const result = await congViecServices.PostImageAction(
        formdata,
        maCongViec
      );

      if (result.status === 200) {
        dispatch({
          type: POST_IMAGE,
          listJob: result.data.content,
        });
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

export const layChiTietLoaiCongViecAction = (maChiTietLoai) => {
  return async (dispatch) => {
    try {
      const result = await congViecServices.layChiTietLoaiCongViecService(
        maChiTietLoai
      );
      if (result.status === 200) {
        dispatch({
          type: LAY_CHI_TIET_LOAI_CONG_VIEC,
          menuItem: result.data.content[0],
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const layCongViecTheoChiTietLoaiAction = (maChiTietLoai) => {
  return async (dispatch) => {
    try {
      const result = await congViecServices.layCongViecTheoChiTietLoaiService(
        maChiTietLoai
      );
      if (result.status === 200) {
        dispatch({
          type: LAY_CONG_VIEC_THEO_CHI_TIET_LOAI,
          menuItem: result.data.content[0],
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const layCongViecChiTietAction = (maCongViec) => {
  return async (dispatch) => {
    try {
      const result = await congViecServices.layCongViecChiTietService(
        maCongViec
      );
      if (result.status === 200) {
        dispatch({
          type: LAY_CONG_VIEC_CHI_TIET,
          detailJobs: result.data.content[0],
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const layDanhSachCongViecTheoTenAction = (valueSearch) => {
  return async (dispatch) => {
    try {
      const result = await congViecServices.layDanhSachCongViecTheoTenService(
        valueSearch
      );
      if (result.status === 200) {
        dispatch({
          type: LAY_DS_CONG_VIEC_THEO_TEN,
          resultSearchJobByName: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

// Admin

export const infoJobAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await congViecServices.infoJobService(id);
      if (result.status === 200) {
        dispatch({
          type: INFO_CONG_VIEC,
          infoJob: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const addJobAction = (values) => {
  return async (dispatch) => {
    try {
      const result = await congViecServices.addJobService(values);
      if (result.status === 200) {
        dispatch({
          type: ADD_CONG_VIEC,
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

export const editJobAction = (values) => {
  return async (dispatch) => {
    try {
      const result = await congViecServices.editJobService(values);

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

export const deleteJobAction = (idJob) => {
  return async (dispatch) => {
    try {
      const result = await congViecServices.deleteJobService(idJob);
      dispatch(layDSCongViecAction(idJob));
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
