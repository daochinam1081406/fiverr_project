import { LAY_DS_BINH_LUAN, THEM_BINH_LUAN } from "../types/BinhLuanTypes";

const stateDefault = {
  listBinhLuan: [],
  themBinhLuan: {},
};

export const BinhLuanReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DS_BINH_LUAN: {
      return {
        ...state,
        listBinhLuan: action.listBinhLuan,
      };
    }
    case THEM_BINH_LUAN: {
      return {
        ...state,
        themBinhLuan: action.themBinhLuan,
      };
    }
    default:
      return state;
  }
};
