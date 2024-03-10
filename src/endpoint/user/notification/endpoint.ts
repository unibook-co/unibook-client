import { Endpoint } from "endpoint-client";
import { NotificationObject } from "../../../object/notification.object";

/**
 * GET /users/:userId/notifications
 * 알림 목록을 조회합니다.
 */
export const ListUserNotification: Endpoint<
  ListUserNotificationReq,
  ListUserNotificationRes
> = {
  method: "GET",
  path: (e) => `/users/${e.userId}/notifications`,
  pathParams: ["userId"],
  queryParams: ["page", "take"],
};
export type ListUserNotificationReqPath = {
  userId: number | string;
};
export type ListUserNotificationReqQuery = {
  page?: number;
  take?: number;
};
export type ListUserNotificationReq = ListUserNotificationReqPath &
  ListUserNotificationReqQuery;
export type ListUserNotificationRes = {
  notifications: NotificationObject[];
  total: number;
};

/**
 * DELETE /users/:userId/notifications/:notificationId
 * 알림을 삭제합니다.
 */
export const DeleteUserNotification: Endpoint<
  DeleteUserNotificationReq,
  DeleteUserNotificationRes
> = {
  method: "DELETE",
  path: (e) => `/users/${e.userId}/notifications/${e.notificationId}`,
  pathParams: ["userId", "notificationId"],
};
export type DeleteUserNotificationReqPath = {
  userId: number | string;
  notificationId: number | string;
};
export type DeleteUserNotificationReq = DeleteUserNotificationReqPath;
export type DeleteUserNotificationRes = {};
