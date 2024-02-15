/**
 * GET /books/:bookId/sections/:sectionId/block-comments/:blockCommentId/reactions
 * 블록 댓글의 반응을 조회합니다.
 */

import { Endpoint } from "endpoint-client";
import { BlockCommentReactionObject } from "../../../../object";

export const ListBlockCommentReaction: Endpoint<
    ListBlockCommentReactionReq,
    ListBlockCommentReactionRes
> = {
    method: "GET",
    path: (req) =>
        `/books/${req.bookId}/sections/${req.sectionId}/block-comments/${req.blockCommentId}/reactions`,
    pathParams: ["bookId", "sectionId", "blockCommentId"],
};
export type ListBlockCommentReactionReqPath = {
    bookId: number | string;
    sectionId: number | string;
    blockCommentId: string;
};
export type ListBlockCommentReactionReq = ListBlockCommentReactionReqPath;
export type ListBlockCommentReactionRes = {
    reactions: BlockCommentReactionObject[];
};

/**
 * POST /books/:bookId/sections/:sectionId/block-comments/:blockCommentId/reactions
 * 블록 댓글에 반응을 추가합니다.
 */
export const CreateBlockCommentReaction: Endpoint<
    CreateBlockCommentReactionReq,
    CreateBlockCommentReactionRes
> = {
    method: "POST",
    path: (req) =>
        `/books/${req.bookId}/sections/${req.sectionId}/block-comments/${req.blockCommentId}/reactions`,
    pathParams: ["bookId", "sectionId", "blockCommentId"],
    bodyParams: ["reaction"],
};
export type CreateBlockCommentReactionReqPath = {
    bookId: number | string;
    sectionId: number | string;
    blockCommentId: string;
};
export type CreateBlockCommentReactionReqBody = {
    reaction: string;
};
export type CreateBlockCommentReactionReq = CreateBlockCommentReactionReqPath &
    CreateBlockCommentReactionReqBody;
export type CreateBlockCommentReactionRes = {
    reaction: BlockCommentReactionObject;
};

/**
 * DELETE /books/:bookId/sections/:sectionId/block-comments/:blockCommentId/reactions/:reactionId
 * 블록 댓글의 반응을 삭제합니다.
 */
export const DeleteBlockCommentReaction: Endpoint<
    DeleteBlockCommentReactionReq,
    DeleteBlockCommentReactionRes
> = {
    method: "DELETE",
    path: (req) =>
        `/books/${req.bookId}/sections/${req.sectionId}/block-comments/${req.blockCommentId}/reactions/${req.reactionId}`,
    pathParams: ["bookId", "sectionId", "blockCommentId", "reactionId"],
};
export type DeleteBlockCommentReactionReqPath = {
    bookId: number | string;
    sectionId: number | string;
    blockCommentId: string;
    reactionId: string;
};
export type DeleteBlockCommentReactionReq = DeleteBlockCommentReactionReqPath;
export type DeleteBlockCommentReactionRes = {};
