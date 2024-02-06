import { Endpoint } from "endpoint-client";
import { BookObject } from "../object";

/**
 * GET /books
 * 책 목록을 조회합니다.
 */
export const ListBook: Endpoint<ListBookReq, ListBookRes> = {
    method: "GET",
    path: (e) => `/books`,
};
export type ListBookReq = {};
export type ListBookRes = {
    books: BookObject[];
};

/**
 * GET /books/:bookId
 * 책을 조회합니다.
 */
export const GetBook: Endpoint<GetBookReq, GetBookRes> = {
    method: "GET",
    path: (e) => `/books/${e.bookId}`,
    pathParams: ["bookId"],
};
export type GetBookReqPath = {
    bookId: number | string;
};
export type GetBookReq = GetBookReqPath;
export type GetBookRes = {
    book: BookObject;
};

/**
 * POST /books
 * 책을 생성합니다.
 */
export const CreateBook: Endpoint<CreateBookReq, CreateBookRes> = {
    method: "POST",
    path: (e) => `/books`,
    bodyParams: [
        "title",
        "author",
        "description",
        "coverImage",
        "notionDatabaseId",
    ],
};
export type CreateBookReqBody = {
    title: string;
    author: string;
    description: string;
    coverImage: string;
    notionDatabaseId: string;
};
export type CreateBookReq = CreateBookReqBody;
export type CreateBookRes = {
    book: BookObject;
};

/**
 * PUT /books/:bookId
 * 책을 수정합니다.
 */
export const UpdateBook: Endpoint<UpdateBookReq, UpdateBookRes> = {
    method: "PUT",
    path: (e) => `/books/${e.bookId}`,
    pathParams: ["bookId"],
    bodyParams: [
        "title",
        "author",
        "description",
        "coverImage",
        "notionDatabaseId",
        "status",
    ],
};
export type UpdateBookReqPath = {
    bookId: number | string;
};
export type UpdateBookReqBody = {
    title?: string;
    author?: string;
    description?: string;
    coverImage?: string;
    notionDatabaseId?: string;
    status?: "draft" | "pending" | "published" | "deleted";
};
export type UpdateBookReq = UpdateBookReqPath & UpdateBookReqBody;
export type UpdateBookRes = {
    book: BookObject;
};

/**
 * DELETE /books/:bookId
 * 책을 삭제합니다.
 */
export const DeleteBook: Endpoint<DeleteBookReq, DeleteBookRes> = {
    method: "DELETE",
    path: (e) => `/books/${e.bookId}`,
    pathParams: ["bookId"],
};
export type DeleteBookReqPath = {
    bookId: number | string;
};
export type DeleteBookReq = DeleteBookReqPath;
export type DeleteBookRes = {};
