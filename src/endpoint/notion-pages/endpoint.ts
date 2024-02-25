import { Endpoint } from "endpoint-client";
import { NotionPageObject } from "../../object";

/**
 * POST /notion-pages
 * 노션 페이지를 로드합니다.
 */
export const LoadNotionPage: Endpoint<LoadNotionPageReq, LoadNotionPageRes> = {
  method: "POST",
  path: (e) => `/notion-pages`,
  bodyParams: ["path", "notionPageId"],
};
export type LoadNotionPageReqBody = {
  path?: string;
  notionPageId: string;
};
export type LoadNotionPageReq = LoadNotionPageReqBody;
export type LoadNotionPageRes = {
  result: "added" | "updated" | "deleted";
  notionPage?: NotionPageObject;
};

/**
 * POST /notion-pages/reload
 * 노션 페이지를 다시 불러옵니다.
 */
export const ReloadNotionPage: Endpoint<
  ReloadNotionPageReq,
  ReloadNotionPageRes
> = {
  method: "POST",
  path: (e) => `/notion-pages/reload`,
  bodyParams: ["notionPageId"],
};
export type ReloadNotionPageReqBody = {
  notionPageId: string;
};
export type ReloadNotionPageReq = ReloadNotionPageReqBody;
export type ReloadNotionPageRes = {
  result: "added" | "updated" | "deleted";
  notionPage?: NotionPageObject;
};

/**
 * DELETE /notion-pages/:notionPageId
 * 노션 페이지를 삭제합니다.
 */
export const DeleteNotionPage: Endpoint<
  DeleteNotionPageReq,
  DeleteNotionPageRes
> = {
  method: "DELETE",
  path: (e) => `/notion-pages/${e.notionPageId}`,
  pathParams: ["notionPageId"],
};
export type DeleteNotionPageReqPath = {
  notionPageId: string;
};
export type DeleteNotionPageReq = DeleteNotionPageReqPath;
export type DeleteNotionPageRes = {
  result: "deleted";
};

/**
 * GET /notion-pages
 * 노션 페이지 목록을 조회합니다.
 */
export const ListNotionPage: Endpoint<ListNotionPageReq, ListNotionPageRes> = {
  method: "GET",
  path: (e) => `/notion-pages`,
  queryParams: ["page", "take"],
};
export type ListNotionPageReqQuery = {
  page?: number;
  take?: number;
};
export type ListNotionPageReq = ListNotionPageReqQuery;
export type ListNotionPageRes = {
  notionPages: NotionPageObject[];
  total: number;
};

/**
 * GET /notion-pages/:notionPageId
 * 노션 페이지를 조회합니다.
 */
export const GetNotionPage: Endpoint<GetNotionPageReq, GetNotionPageRes> = {
  method: "GET",
  path: (e) => `/notion-pages/${e.notionPageQuery}`,
  pathParams: ["notionPageQuery"],
};
export type GetNotionPageReqPath = {
  notionPageQuery: string;
};
export type GetNotionPageReq = GetNotionPageReqPath;
export type GetNotionPageRes = {
  notionPage: NotionPageObject;
};
