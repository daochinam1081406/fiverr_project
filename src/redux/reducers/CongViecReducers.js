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
  LAY_DS_LOAI_CONG_VIEC,
} from "../types/CongViecTypes";

const stateDefault = {
  menuJob: [],
  menuItem: [],

  resultSearchJobByName: [],

  menuDetail: [],

  detailJobs: [],

  listJob: [],

  addJob: {},

  infoJob: {},
};

export const CongViecReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DS_CONG_VIEC: {
      state.listJob = action.listJob;
      return { ...state };
    }

    case SET_MENU_CONG_VIEC: {
      state.menuJob = action.menuJob;
      return { ...state };
    }
    case POST_IMAGE:
      return {
        ...state,
        formFile: action.formFile,
      };

    case LAY_DS_CONG_VIEC_THEO_TEN: {
      state.resultSearchJobByName = action.resultSearchJobByName;
      return { ...state };
    }

    case LAY_CHI_TIET_LOAI_CONG_VIEC: {
      state.menuItem = action.menuItem;
      return { ...state };
    }

    case LAY_CONG_VIEC_THEO_CHI_TIET_LOAI: {
      state.detailItem = action.detailItem;
      return { ...state };
    }

    case LAY_CONG_VIEC_CHI_TIET: {
      state.detailJobs = action.detailJobs;
      return { ...state };
    }

    case ADD_CONG_VIEC: {
      state.addJob = action.addJob;
      return { ...state };
    }
    case INFO_CONG_VIEC: {
      state.infoJob = action.infoJob;
      return { ...state };
    }
    case EDIT_CONG_VIEC: {
      state.infoJob = action.infoJob;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
