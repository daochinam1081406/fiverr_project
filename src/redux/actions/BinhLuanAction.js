import { binhLuanServices } from "../../services/binhLuanService";
import { LAY_DS_BINH_LUAN, THEM_BINH_LUAN } from "../types/BinhLuanTypes";
import Swal from "sweetalert2";

export const layBinhLuanTheoCongViecAction = (maCongViec) => {
  return async (dispatch) => {
    try {
      const result = await binhLuanServices.layBinhLuanTheoCongViec(maCongViec);

      if (result.status === 200) {
        console.log(result.data.content);
        dispatch({
          type: LAY_DS_BINH_LUAN,
          listBinhLuan: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const themBinhLuan = (values) => {
  return async (dispatch) => {
    try {
      const result = await binhLuanServices.binhLuan(values);
      if (result.status === 200) {
        dispatch({
          type: THEM_BINH_LUAN,
          themBinhLuan: result.data.content,
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
