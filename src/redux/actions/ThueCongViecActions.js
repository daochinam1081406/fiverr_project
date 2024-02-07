import { useNavigate } from "react-router-dom";
import { alertFail } from "../../components/SweetAlert/alertFail";
import {
  alertDeleteSuccess,
  alertSuccess,
} from "../../components/SweetAlert/alertSuccess";
import { ThongTinThueCongViec } from "../../models/ThongTinThueCongViec";
import { thueCongViecServices } from "../../services/thueCongViecServices";
import {
  DS_CONG_VIEC_DA_THUE,
  THUE_CONG_VIEC,
} from "../types/ThueCongViecType";

export const ThueCongViecActions = (
  thongTinThueCongViec = new ThongTinThueCongViec()
) => {
  // const navigate = useNavigate()
  return async (dispatch) => {
    try {
      const result = await thueCongViecServices.thueCongViecService(
        thongTinThueCongViec
      );
      alertSuccess();

      if (result.status === 201) {
        dispatch({
          type: THUE_CONG_VIEC,
          thueCongViec: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
      alertFail();
    }
  };
};

export const LayDanhSachCongViecDaThueActions = () => {
  return async (dispatch) => {
    try {
      const result = await thueCongViecServices.layDanhSachCVDaThueService();
      if (result.status === 200) {
        dispatch({
          type: DS_CONG_VIEC_DA_THUE,
          dsCongViecDaThue: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const XoaCongViecAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await thueCongViecServices.xoaCongViecService(id);
      alertDeleteSuccess();
      dispatch(LayDanhSachCongViecDaThueActions());
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};
