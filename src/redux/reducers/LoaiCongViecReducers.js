import {
  LAY_DS_LOAI_CONG_VIEC,
  ADD_LOAI_CONG_VIEC,
  EDIT_LOAI_CONG_VIEC,
} from "../types/LoaiCongViecType";

const stateDefault = {
  listTypeJob: [],
  addTypeJob: {},

  infoTypeJob: {},
};

export const LoaiCongViecReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DS_LOAI_CONG_VIEC: {
      state.listTypeJob = action.listTypeJob;
      return { ...state };
    }
    case ADD_LOAI_CONG_VIEC: {
      state.addTypeJob = action.addTypeJob;
      return { ...state };
    }
    case EDIT_LOAI_CONG_VIEC: {
      state.infoTypeJob = action.infoTypeJob;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
