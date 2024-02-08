import { Endpoint } from "endpoint-client";
import { SectionObject } from "../../object/section.object";
import { SectionPreviewObject } from "../../object/sectionPreview.object";

/**
 * GET /books/:bookId/sections
 * 책의 섹션 목록을 조회합니다.
 */
export const ListSection: Endpoint<ListSectionReq, ListSectionRes> = {
    method: "GET",
    path: (e) => `/books/${e.bookId}/sections`,
    pathParams: ["bookId"],
};
export type ListSectionReqPath = {
    bookId: number | string;
};
export type ListSectionReq = ListSectionReqPath;
export type ListSectionRes = {
    sections: SectionPreviewObject[];
};

/**
 * GET /books/:bookId/sections/:sectionId
 * 책의 섹션을 조회합니다.
 */
export const GetSection: Endpoint<GetSectionReq, GetSectionRes> = {
    method: "GET",
    path: (e) => `/books/${e.bookId}/sections/${e.sectionId}`,
    pathParams: ["bookId", "sectionId"],
};
export type GetSectionReqPath = {
    bookId: number | string;
    sectionId: number | string;
};
export type GetSectionReq = GetSectionReqPath;
export type GetSectionRes = {
    section: SectionObject;
};

/**
 * GET /books/:bookId/sections/fetch
 * 노션 데이터베이스 내용과 함께 색션을 조회합니다
 */
export const FetchSection: Endpoint<FetchSectionReq, FetchSectionRes> = {
    method: "GET",
    path: (e) => `/books/${e.bookId}/sections/fetch`,
    pathParams: ["bookId"],
};
export type FetchSectionReqPath = {
    bookId: number | string;
};
export type FetchSectionReq = FetchSectionReqPath;
export type LoadedFetchSectionItem = {
    status: "loaded";
    notionPageId: string;
    section: SectionPreviewObject;
    page: {
        title: string;
        updatedAt: string;
    };
};
export type NotLoadedFetchSectionItem = {
    status: "not_loaded";
    notionPageId: string;
    page: {
        title: string;
        updatedAt: string;
    };
};
export type NotFoundFetchSectionItem = {
    status: "not_found";
    notionPageId: string;
    section: SectionPreviewObject;
};
export type FetchSectionItem =
    | LoadedFetchSectionItem
    | NotLoadedFetchSectionItem
    | NotFoundFetchSectionItem;
export type FetchSectionRes = {
    sections: FetchSectionItem[];
};

/**
 * POST /books/:bookId/sections
 * 책의 섹션을 생성합니다.
 */
export const LoadSection: Endpoint<LoadSectionReq, LoadSectionRes> = {
    method: "POST",
    path: (e) => `/books/${e.bookId}/sections`,
    pathParams: ["bookId"],
    bodyParams: ["notionPageId"],
};
export type LoadSectionReqPath = {
    bookId: number | string;
};
export type LoadSectionReq = LoadSectionReqPath & {
    notionPageId: string;
};
export type LoadSectionRes = {
    result: "added" | "updated" | "deleted";
    section?: SectionPreviewObject;
};

/**
 * PUT /books/:bookId/sections/:sectionId
 * 책의 섹션을 수정합니다.
 */
export const UpdateSection: Endpoint<UpdateSectionReq, UpdateSectionRes> = {
    method: "PUT",
    path: (e) => `/books/${e.bookId}/sections/${e.sectionId}`,
    pathParams: ["bookId", "sectionId"],
    bodyParams: [],
};
export type UpdateSectionReqPath = {
    bookId: number | string;
    sectionId: number | string;
};
export type UpdateSectionReq = UpdateSectionReqPath & {};
export type UpdateSectionRes = {
    section: SectionPreviewObject;
};

/**
 * DELETE /books/:bookId/sections/:sectionId
 * 책의 섹션을 삭제합니다.
 */
export const DeleteSection: Endpoint<DeleteSectionReq, DeleteSectionRes> = {
    method: "DELETE",
    path: (e) => `/books/${e.bookId}/sections/${e.sectionId}`,
    pathParams: ["bookId", "sectionId"],
};
export type DeleteSectionReqPath = {
    bookId: number | string;
    sectionId: number | string;
};
export type DeleteSectionReq = DeleteSectionReqPath;
export type DeleteSectionRes = {};
