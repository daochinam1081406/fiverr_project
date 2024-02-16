import { binhLuanServices } from "../../services/binhLuanService";
import { LAY_DS_BINH_LUAN, THEM_BINH_LUAN } from "../types/BinhLuanTypes";

export const layBinhLuanTheoCongViecAction = (maCongViec) => {
  return async (dispatch) => {
    try {
      const result = await binhLuanServices.layBinhLuanTheoCongViec(maCongViec);

      if (result.status === 200) {
        console.log("yyyyyy" + result.data.content);
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
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};
