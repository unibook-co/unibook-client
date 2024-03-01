import { Endpoint } from "endpoint-client";
import { ParentBlockMemoObject } from "../../../../object";

/**
 * GET /books/:bookId/sections/:sectionId/block-memos
 * 블록 메모 목록을 조회합니다.
 */
export const ListBlockMemo: Endpoint<ListBlockMemoReq, ListBlockMemoRes> = {
  method: "GET",
  path: (req) => `/books/${req.bookId}/sections/${req.sectionId}/block-memos`,
  pathParams: ["bookId", "sectionId"],
};
export type ListBlockMemoReqPath = {
  bookId: number | string;
  sectionId: number | string;
};
export type ListBlockMemoReq = ListBlockMemoReqPath;
export type ListBlockMemoRes = {
  memos: ParentBlockMemoObject[];
};

/**
 * POST /books/:bookId/sections/:sectionId/block-memos
 * 블록 메모를 생성합니다.
 */
export const CreateBlockMemo: Endpoint<CreateBlockMemoReq, CreateBlockMemoRes> =
  {
    method: "POST",
    path: (req) => `/books/${req.bookId}/sections/${req.sectionId}/block-memos`,
    pathParams: ["bookId", "sectionId"],
    bodyParams: ["blockId", "content", "parentId"],
  };
export type CreateBlockMemoReqPath = {
  bookId: number | string;
  sectionId: number | string;
};
export type CreateBlockMemoReqBody = {
  blockId: string;
  content: string;
  parentId?: number;
};
export type CreateBlockMemoReq = CreateBlockMemoReqPath &
  CreateBlockMemoReqBody;
export type CreateBlockMemoRes = {
  memo: ParentBlockMemoObject;
};

/**
 * PATCH /books/:bookId/sections/:sectionId/block-memos/:blockMemoId
 * 블록 메모를 수정합니다.
 */
export const UpdateBlockMemo: Endpoint<UpdateBlockMemoReq, UpdateBlockMemoRes> =
  {
    method: "PATCH",
    path: (req) =>
      `/books/${req.bookId}/sections/${req.sectionId}/block-memos/${req.blockMemoId}`,
    pathParams: ["bookId", "sectionId", "blockMemoId"],
    bodyParams: ["content"],
  };
export type UpdateBlockMemoReqPath = {
  bookId: number | string;
  sectionId: number | string;
  blockMemoId: number | string;
};
export type UpdateBlockMemoReqBody = {
  content: string;
};
export type UpdateBlockMemoReq = UpdateBlockMemoReqPath &
  UpdateBlockMemoReqBody;
export type UpdateBlockMemoRes = {
  memo: ParentBlockMemoObject;
};

/**
 * DELETE /books/:bookId/sections/:sectionId/block-memos/:blockMemoId
 * 블록 메모를 삭제합니다.
 */
export const DeleteBlockMemo: Endpoint<DeleteBlockMemoReq, DeleteBlockMemoRes> =
  {
    method: "DELETE",
    path: (req) =>
      `/books/${req.bookId}/sections/${req.sectionId}/block-memos/${req.blockMemoId}`,
    pathParams: ["bookId", "sectionId", "blockMemoId"],
  };
export type DeleteBlockMemoReqPath = {
  bookId: number | string;
  sectionId: number | string;
  blockMemoId: number | string;
};
export type DeleteBlockMemoReq = DeleteBlockMemoReqPath;
export type DeleteBlockMemoRes = {};
