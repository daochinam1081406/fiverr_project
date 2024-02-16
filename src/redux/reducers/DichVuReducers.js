import { LAY_DS_DICH_VU } from "../types/DichVuType";

const stateDefault = {
  listService: [],
};

export const DichVuReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DS_DICH_VU: {
      state.listService = action.listService;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
