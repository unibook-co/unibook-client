import { Endpoint } from "endpoint-client";
import { BlockCommentObject } from "../../../../object";
import { ParentBlockCommentObject } from "../../../../object/parentBlockComment.object";

/**
 * GET /books/:bookId/sections/:sectionId/block-comments
 * 블록 댓글을 조회합니다.
 */
export const ListBlockComment: Endpoint<
    ListBlockCommentReq,
    ListBlockCommentRes
> = {
    method: "GET",
    path: (req) =>
        `/books/${req.bookId}/sections/${req.sectionId}/block-comments`,
    pathParams: ["bookId", "sectionId"],
};
export type ListBlockCommentReqPath = {
    bookId: number | string;
    sectionId: number | string;
};
export type ListBlockCommentReq = ListBlockCommentReqPath;
export type ListBlockCommentRes = {
    comments: ParentBlockCommentObject[];
};

/**
 * POST /books/:bookId/sections/:sectionId/block-comments
 * 블록 댓글을 생성합니다.
 */
export const CreateBlockComment: Endpoint<
    CreateBlockCommentReq,
    CreateBlockCommentRes
> = {
    method: "POST",
    path: (req) =>
        `/books/${req.bookId}/sections/${req.sectionId}/block-comments`,
    pathParams: ["bookId", "sectionId"],
    bodyParams: ["blockId", "content", "type", "parentId"],
};
export type CreateBlockCommentReqPath = {
    bookId: number | string;
    sectionId: number | string;
};
export type CreateBlockCommentReqBody = {
    blockId: string;
    content: string;
    type: "comment" | "question";
    parentId?: number;
};
export type CreateBlockCommentReq = CreateBlockCommentReqPath &
    CreateBlockCommentReqBody;
export type CreateBlockCommentRes = {
    comment: BlockCommentObject;
};

/**
 * PATCH /books/:bookId/sections/:sectionId/block-comments/:blockCommentId
 * 블록 댓글을 수정합니다.
 */
export const EditBlockComment: Endpoint<
    EditBlockCommentReq,
    EditBlockCommentRes
> = {
    method: "PATCH",
    path: (req) =>
        `/books/${req.bookId}/sections/${req.sectionId}/block-comments/${req.blockCommentId}`,
    pathParams: ["bookId", "sectionId", "blockCommentId"],
    bodyParams: ["content"],
};
export type EditBlockCommentReqPath = {
    bookId: number | string;
    sectionId: number | string;
    blockCommentId: number | string;
};
export type EditBlockCommentReqBody = {
    content: string;
};
export type EditBlockCommentReq = EditBlockCommentReqPath &
    EditBlockCommentReqBody;
export type EditBlockCommentRes = {
    comment: BlockCommentObject;
};

/**
 * DELETE /books/:bookId/sections/:sectionId/block-comments/:blockCommentId
 * 블록 댓글을 삭제합니다.
 */
export const DeleteBlockComment: Endpoint<
    DeleteBlockCommentReq,
    DeleteBlockCommentRes
> = {
    method: "DELETE",
    path: (req) =>
        `/books/${req.bookId}/sections/${req.sectionId}/block-comments/${req.blockCommentId}`,
    pathParams: ["bookId", "sectionId", "blockCommentId"],
};
export type DeleteBlockCommentReqPath = {
    bookId: number | string;
    sectionId: number | string;
    blockCommentId: number | string;
};
export type DeleteBlockCommentReq = DeleteBlockCommentReqPath;
export type DeleteBlockCommentRes = {
    comment: BlockCommentObject;
};
