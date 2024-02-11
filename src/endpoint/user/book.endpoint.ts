import { Endpoint } from "endpoint-client";
import { BookObject } from "../../object";

/**
 * GET /users/:userId/books
 * 책 목록을 조회합니다.
 */
export const ListUserBook: Endpoint<ListUserBookReq, ListUserBookRes> = {
    method: "GET",
    path: (e) => `/users/${e.userId}/books`,
    pathParams: ["userId"],
};
export type ListUserBookReqPath = {
    userId: number | string;
};
export type ListUserBookReq = ListUserBookReqPath;
export type ListUserBookRes = {
    books: BookObject[];
};
