import { Endpoint } from "endpoint-client";

/**
 * GET /books/:bookId/sections/:sectionId/block-comments/:blockCommentId/notification
 * 블록 댓글 알림을 활성화했는지 조회합니다.
 */
export const GetIsBlockCommentNotificationOn: Endpoint<
  GetBlockCommentNotificationReq,
  GetBlockCommentNotificationRes
> = {
  method: "GET",
  path: (e) =>
    `/books/${e.bookId}/sections/${e.sectionId}/block-comments/${e.blockCommentId}/notification`,
  pathParams: ["bookId", "sectionId", "blockCommentId"],
};
export type GetBlockCommentNotificationReqPath = {
  bookId: number | string;
  sectionId: number | string;
  blockCommentId: number | string;
};
export type GetBlockCommentNotificationReq = GetBlockCommentNotificationReqPath;
export type GetBlockCommentNotificationRes = {
  isOn: boolean;
};

/**
 * POST /books/:bookId/sections/:sectionId/block-comments/:blockCommentId/notification
 * 블록 댓글 알림을 활성화합니다.
 */
export const SetBlockCommentNotificationOn: Endpoint<
  SetBlockCommentNotificationOnReq,
  SetBlockCommentNotificationOnRes
> = {
  method: "POST",
  path: (e) =>
    `/books/${e.bookId}/sections/${e.sectionId}/block-comments/${e.blockCommentId}/notification`,
  pathParams: ["bookId", "sectionId", "blockCommentId"],
};
export type SetBlockCommentNotificationOnReqPath = {
  bookId: number | string;
  sectionId: number | string;
  blockCommentId: number | string;
};
export type SetBlockCommentNotificationOnReq =
  SetBlockCommentNotificationOnReqPath;
export type SetBlockCommentNotificationOnRes = {};

/**
 * DELETE /books/:bookId/sections/:sectionId/block-comments/:blockCommentId/notification
 * 블록 댓글 알림을 비활성화합니다.
 */
export const SetBlockCommentNotificationOff: Endpoint<
  SetBlockCommentNotificationOffReq,
  SetBlockCommentNotificationOffRes
> = {
  method: "DELETE",
  path: (e) =>
    `/books/${e.bookId}/sections/${e.sectionId}/block-comments/${e.blockCommentId}/notification`,
  pathParams: ["bookId", "sectionId", "blockCommentId"],
};
export type SetBlockCommentNotificationOffReqPath = {
  bookId: number | string;
  sectionId: number | string;
  blockCommentId: number | string;
};
export type SetBlockCommentNotificationOffReq =
  SetBlockCommentNotificationOffReqPath;
export type SetBlockCommentNotificationOffRes = {};
