import {
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAILURE,
} from "../types/AdminTemplateTypes";

export const updateAvatarSuccess = () => ({
  type: UPDATE_AVATAR_SUCCESS,
});

export const updateAvatarFailure = (error) => ({
  type: UPDATE_AVATAR_FAILURE,
  payload: error,
});
