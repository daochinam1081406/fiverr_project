import { api } from "../constants/api";

export const ServiceServices = {
  layDanhSachDichVu: () => {
    return api.get(`/thue-cong-viec`);
  },
};
