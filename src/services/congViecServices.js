import { values } from "lodash";
import { api } from "../constants/api";

export const congViecServices = {
  layDanhSachCongViec: () => {
    return api.get(`/cong-viec`);
  },
  layDanhSachLoaiCongViec: () => {
    return api.get(`/loai-cong-viec`);
  },
  layMenuCongViec: () => {
    return api.get(`cong-viec/lay-menu-loai-cong-viec`);
  },

  layDanhSachCongViecTheoTenService: (valueSearch) => {
    return api.get(`cong-viec/lay-danh-sach-cong-viec-theo-ten/${valueSearch}`);
  },

  layCongViecTheoChiTietLoaiService: (maChiTietLoai) => {
    return api.get(
      `cong-viec/lay-cong-viec-theo-chi-tiet-loai/${maChiTietLoai}`
    );
  },
  layChiTietLoaiCongViecService: (maChiTietLoai) => {
    return api.get(`cong-viec/lay-chi-tiet-loai-cong-viec/${maChiTietLoai}`);
  },
  layCongViecChiTietService: (maCongViec) => {
    return api.get(`cong-viec/lay-cong-viec-chi-tiet/${maCongViec}`);
  },

  infoJobService: (id) => {
    return api.get(`cong-viec/${id}`);
  },

  addJobService: (job) => {
    return api.post(`/cong-viec`, job);
  },

  addImageJobService: (idJob) => {
    return api.post(`cong-viec/upload-hinh-cong-viec/${idJob}`, values);
  },

  editJobService: (values) => {
    return api.put(`cong-viec/${values.id}`, values);
  },
  deleteJobService: (idJob) => {
    return api.delete(`cong-viec/${idJob}`);
  },
  PostImageAction: (formFile, maCongViec) => {
    const formData = new FormData();
    formData.append("formFile", formFile);
    return api.post(`cong-viec/upload-hinh-cong-viec/${maCongViec}`, formData);
  },
};
