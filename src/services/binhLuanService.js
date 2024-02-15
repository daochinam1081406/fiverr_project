import { api } from "../constants/api";

export const binhLuanServices = {
  binhLuan: (binhLuan) => {
    return api.post(`binh-luan`, binhLuan);
  },

  layBinhLuanTheoCongViec: (maCongViec) => {
    return api.get(`binh-luan/lay-binh-luan-theo-cong-viec/${maCongViec}`);
  },
};
