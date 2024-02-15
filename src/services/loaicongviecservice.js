import { api } from "../constants/api";

export const loaiCongViecServices = {
  layDanhSachLoaiCongViec: () => {
    return api.get(`/loai-cong-viec`);
  },
};
