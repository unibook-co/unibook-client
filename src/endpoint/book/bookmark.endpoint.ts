import { Endpoint } from "endpoint-client";
import { SectionObject } from "../../object/section.object";

/**
 * GET /books/:bookId/bookmarks
 * 책의 북마크를 조회합니다.
 */
export const ListBookmark: Endpoint<ListBookmarkReq, ListBookmarkRes> = {
    method: "GET",
    path: (e) => `/books/${e.bookId}/bookmarks`,
    pathParams: ["bookId"],
};
export type ListBookmarkReqPath = {
    bookId: number | string;
};
export type ListBookmarkReq = ListBookmarkReqPath;
export type ListBookmarkRes = {
    sections: SectionObject[];
};

/**
 * POST /books/:bookId/bookmarks
 * 책에 북마크를 추가합니다.
 */
export const CreateBookmark: Endpoint<CreateBookmarkReq, CreateBookmarkRes> = {
    method: "POST",
    path: (e) => `/books/${e.bookId}/bookmarks`,
    pathParams: ["bookId"],
    bodyParams: ["sectionId"],
};
export type CreateBookmarkReqPath = {
    bookId: number | string;
};
export type CreateBookmarkReq = CreateBookmarkReqPath & {
    sectionId: number | string;
};
export type CreateBookmarkRes = {};

/**
 * DELETE /books/:bookId/bookmarks/:sectionId
 * 책의 북마크를 삭제합니다.
 */
export const DeleteBookmark: Endpoint<DeleteBookmarkReq, DeleteBookmarkRes> = {
    method: "DELETE",
    path: (e) => `/books/${e.bookId}/bookmarks/${e.sectionId}`,
    pathParams: ["bookId", "sectionId"],
};
export type DeleteBookmarkReqPath = {
    bookId: number | string;
    sectionId: number | string;
};
export type DeleteBookmarkReq = DeleteBookmarkReqPath;
export type DeleteBookmarkRes = {};
