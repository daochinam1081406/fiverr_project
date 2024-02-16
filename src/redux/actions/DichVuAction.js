import { ServiceServices } from "../../services/dichVuService";
import { LAY_DS_DICH_VU } from "../types/DichVuType";

export const layDSDichVuAction = () => {
  return async (dispatch) => {
    try {
      const result = await ServiceServices.layDanhSachDichVu();
      if (result.status === 200) {
        dispatch({
          type: LAY_DS_DICH_VU,
          listService: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};
