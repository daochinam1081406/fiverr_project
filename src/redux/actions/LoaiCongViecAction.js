import { loaiCongViecServices } from "../../services/loaicongviecservice";
import { LAY_DS_LOAI_CONG_VIEC } from "../types/LoaiCongViecType";
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
