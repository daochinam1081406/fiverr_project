import { LAY_DS_LOAI_CONG_VIEC } from "../types/LoaiCongViecType";

const stateDefault = {
  listTypeJob: [],
};

export const LoaiCongViecReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DS_LOAI_CONG_VIEC: {
      state.listTypeJob = action.listTypeJob;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
