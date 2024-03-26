import { Endpoint } from "endpoint-client";
import { BookObject, SectionPreviewObject } from "../../object";
import { AdminBookObject } from "../../object/adminBook.object";

/**
 * GET /books
 * 책 목록을 조회합니다.
 */
export const ListBook: Endpoint<ListBookReq, ListBookRes> = {
  method: "GET",
  path: (e) => `/books`,
  queryParams: ["page", "take"],
};
export type ListBookReqQuery = {
  page?: number;
  take?: number;
};
export type ListBookReq = ListBookReqQuery;
export type ListBookRes = {
  books: BookObject[];
  total: number;
};

/**
 * GET /books/admin
 * 책 목록을 조회합니다.
 */
export const ListAdminBook: Endpoint<ListAdminBookReq, ListAdminBookRes> = {
  method: "GET",
  path: (e) => `/books/admin`,
  queryParams: ["page", "take"],
};
export type ListAdminBookReqQuery = {
  page?: number;
  take?: number;
};
export type ListAdminBookReq = ListAdminBookReqQuery;
export type ListAdminBookRes = {
  books: AdminBookObject[];
  total: number;
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
 * GET /books/:bookId/admin
 * 책을 조회합니다.
 */
export const GetAdminBook: Endpoint<GetAdminBookReq, GetAdminBookRes> = {
  method: "GET",
  path: (e) => `/books/${e.bookId}/admin`,
  pathParams: ["bookId"],
};
export type GetAdminBookReqPath = {
  bookId: number | string;
};
export type GetAdminBookReq = GetAdminBookReqPath;
export type GetAdminBookRes = {
  book: AdminBookObject;
};

/**
 * GET /books/:bookId/search
 * 책을 검색합니다.
 */
export const SearchBook: Endpoint<SearchBookReq, SearchBookRes> = {
  method: "GET",
  path: (e) => `/books/search`,
  queryParams: ["query"],
};
export type SearchBookReqQuery = {
  query: string;
};
export type SearchBookReq = SearchBookReqQuery;
export type SearchBookRes = {
  books: BookObject[];
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
    "price",
    "coverImage",
    "notionDatabaseId",
    "regularPrice",
    "publisher",
    "publishedAt",
  ],
};
export type CreateBookReqBody = {
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage: string;
  notionDatabaseId: string;
  regularPrice: number;
  publisher: string;
  publishedAt: string;
  ISBN?: string;
};
export type CreateBookReq = CreateBookReqBody;
export type CreateBookRes = {
  book: AdminBookObject;
};

/**
 * PATCH /books/:bookId
 * 책을 수정합니다.
 */
export const UpdateBook: Endpoint<UpdateBookReq, UpdateBookRes> = {
  method: "PATCH",
  path: (e) => `/books/${e.bookId}`,
  pathParams: ["bookId"],
  bodyParams: [
    "title",
    "author",
    "description",
    "price",
    "coverImage",
    "notionDatabaseId",
    "status",
    "isExportPDFEnabled",
    "regularPrice",
    "publisher",
    "publishedAt",
    "ISBN",
  ],
};
export type UpdateBookReqPath = {
  bookId: number | string;
};
export type UpdateBookReqBody = {
  title?: string;
  author?: string;
  description?: string;
  price?: number;
  coverImage?: string;
  notionDatabaseId?: string;
  status?: "draft" | "pending" | "published" | "deleted";
  isExportPDFEnabled?: boolean;
  regularPrice: number;
  publisher: string;
  publishedAt: string;
  ISBN?: string;
};
export type UpdateBookReq = UpdateBookReqPath & UpdateBookReqBody;
export type UpdateBookRes = {
  book: AdminBookObject;
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
