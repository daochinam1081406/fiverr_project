import { LAY_DS_BINH_LUAN, THEM_BINH_LUAN } from "../types/BinhLuanTypes";

const stateDefault = {
  listBinhLuan: [],
  themBinhLuan: {},
};

export const BinhLuanReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DS_BINH_LUAN: {
      // Trả về một trạng thái mới thay vì cập nhật trực tiếp trạng thái hiện tại
      return {
        ...state,
        listBinhLuan: action.listBinhLuan,
      };
    }

    case THEM_BINH_LUAN: {
      // Tương tự, trả về một trạng thái mới
      return {
        ...state,
        themBinhLuan: action.themBinhLuan,
      };
    }

    default:
      // Nếu không có action nào khớp, trả về trạng thái hiện tại
      return state;
  }
};
