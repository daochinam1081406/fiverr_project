import { api } from "../constants/api";

export const loaiCongViecServices = {
  layDanhSachLoaiCongViec: () => {
    return api.get(`/loai-cong-viec`);
  },
  addJobTypeService: (job) => {
    return api.post(`/loai-cong-viec`, job);
  },

  editJobTypeService: (values) => {
    return api.put(`loai-cong-viec/${values.id}`, values);
  },
  deleteJobTypeService: (idJobType) => {
    return api.delete(`loai-cong-viec/${idJobType}`);
  },
};
