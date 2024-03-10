import { Endpoint } from "endpoint-client";
import { DeviceObject } from "../../../object/device.object";

/**
 * GET /users/:userId/devices
 * 디바이스 목록을 조회합니다.
 */
export const ListUserDevice: Endpoint<ListUserDeviceReq, ListUserDeviceRes> = {
  method: "GET",
  path: (e) => `/users/${e.userId}/devices`,
  pathParams: ["userId"],
};
export type ListUserDeviceReqPath = {
  userId: number | string;
};
export type ListUserDeviceReq = ListUserDeviceReqPath;
export type ListUserDeviceRes = {
  devices: DeviceObject[];
  total: number;
};

/**
 * DELETE /users/:userId/devices/:deviceId
 * 디바이스를 삭제합니다.
 */
export const DeleteUserDevice: Endpoint<
  DeleteUserDeviceReq,
  DeleteUserDeviceRes
> = {
  method: "DELETE",
  path: (e) => `/users/${e.userId}/devices/${e.deviceId}`,
  pathParams: ["userId", "deviceId"],
};
export type DeleteUserDeviceReqPath = {
  userId: number | string;
  deviceId: number | string;
};
export type DeleteUserDeviceReq = DeleteUserDeviceReqPath;
export type DeleteUserDeviceRes = {
  device: DeviceObject;
};
