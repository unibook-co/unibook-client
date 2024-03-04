import { Endpoint } from "endpoint-client";

/**
 * POST /books/:bookId/authors
 * 책의 저자를 추가합니다.
 */
export const AddBookAuthor: Endpoint<AddBookAuthorReq, AddBookAuthorRes> = {
  method: "POST",
  path: (e) => `/books/${e.bookId}/authors`,
  pathParams: ["bookId"],
  bodyParams: ["userId", "role"],
};
export type AddBookAuthorReqPath = {
  bookId: number | string;
};
export type AddBookAuthorReqBody = {
  userId: number | string;
  role: string;
};
export type AddBookAuthorReq = AddBookAuthorReqPath & AddBookAuthorReqBody;
export type AddBookAuthorRes = {};

/**
 * PATCH /books/:bookId/authors/:userId
 * 책의 저자를 수정합니다.
 */
export const UpdateBookAuthor: Endpoint<
  UpdateBookAuthorReq,
  UpdateBookAuthorRes
> = {
  method: "PATCH",
  path: (e) => `/books/${e.bookId}/authors/${e.userId}`,
  pathParams: ["bookId", "userId"],
  bodyParams: ["role"],
};
export type UpdateBookAuthorReqPath = {
  bookId: number | string;
  userId: number | string;
};
export type UpdateBookAuthorReqBody = {
  role: string;
};
export type UpdateBookAuthorReq = UpdateBookAuthorReqPath &
  UpdateBookAuthorReqBody;
export type UpdateBookAuthorRes = {};

/**
 * DELETE /books/:bookId/authors/:userId
 * 책의 저자를 삭제합니다.
 */
export const DeleteBookAuthor: Endpoint<
  DeleteBookAuthorReq,
  DeleteBookAuthorRes
> = {
  method: "DELETE",
  path: (e) => `/books/${e.bookId}/authors/${e.userId}`,
  pathParams: ["bookId", "userId"],
};
export type DeleteBookAuthorReqPath = {
  bookId: number | string;
  userId: number | string;
};
export type DeleteBookAuthorReq = DeleteBookAuthorReqPath;
export type DeleteBookAuthorRes = {};
