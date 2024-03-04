import { Endpoint } from "endpoint-client";

/**
 * POST /books/:bookId/sections/:sectionId/export/pdf
 * 색션 PDF를 생성합니다.
 */
export const ExportSectionPDF: Endpoint<
  ExportSectionPDFReq,
  ExportSectionPDFRes
> = {
  method: "POST",
  path: (e) => `/books/${e.bookId}/sections/${e.sectionId}/pdf`,
  pathParams: ["bookId", "sectionId"],
};
export type ExportSectionPDFReqPath = {
  bookId: number | string;
  sectionId: number | string;
};
export type ExportSectionPDFReq = ExportSectionPDFReqPath;
export type ExportSectionPDFRes = {
  url: string;
};
