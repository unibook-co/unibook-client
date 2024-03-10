import { Endpoint } from "endpoint-client";
import { UserSettingObject } from "../../../object";

/**
 * GET /users/:userId/settings
 * 사용자 설정을 조회합니다.
 */
export const GetUserSetting: Endpoint<GetUserSettingReq, GetUserSettingRes> = {
  method: "GET",
  path: (e) => `/users/${e.userId}/settings`,
  pathParams: ["userId"],
};

export type GetUserSettingReqPath = {
  userId: number | string;
};
export type GetUserSettingReq = GetUserSettingReqPath;
export type GetUserSettingRes = {
  userSetting: UserSettingObject;
};

/**
 * PATCH /users/:userId/settings
 */
export const UpdateUserSetting: Endpoint<
  UpdateUserSettingReq,
  UpdateUserSettingRes
> = {
  method: "PATCH",
  path: (e) => `/users/${e.userId}/settings`,
  pathParams: ["userId"],
  bodyParams: ["userSetting"],
};
export type UpdateUserSettingReqPath = {
  userId: number | string;
};
export type UpdateUserSettingBody = {
  userSetting: Partial<UserSettingObject>;
};
export type UpdateUserSettingReq = UpdateUserSettingReqPath &
  UpdateUserSettingBody;
export type UpdateUserSettingRes = {};
