import { values } from "lodash";
import { api } from "../constants/api";

export const nguoiDungServices = {
  getUserService: () => {
    return api.get(`users`);
  },

  getUserIdService: (userId) => {
    return api.get(`users/${userId}`, userId);
  },

  putUserIdService: (values) => {
    return api.put(`users/${values.id}`, values);
  },

  postUserService: (userId) => {
    return api.post(`users`, userId);
  },

  deleteUserService: (user) => {
    return api.delete(`users?id=${user}`);
  },

  searchUserSerVice: (valueSearch) => {
    return api.get(`users/search/${valueSearch}`);
  },
  postAvatarService: (formFile) => {
    const formData = new FormData();
    formData.append("formFile", formFile);

    return api.post(`/users/upload-avatar`, formData);
  },
};
