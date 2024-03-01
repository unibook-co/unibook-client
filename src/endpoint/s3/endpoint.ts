import { Endpoint } from "endpoint-client";

/**
 * POST /s3/upload
 * S3에 파일을 업로드합니다.
 */
export const UploadFile: Endpoint<UploadFileReq, UploadFileRes> = {
  method: "POST",
  path: (e) => `/s3/upload`,
  bodyParams: ["file", "folder", "key", "contentType"],
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
export type UploadFileReqBody = {
  file: any;
  folder: string;
  key: string;
  contentType: string;
};
export type UploadFileReq = UploadFileReqBody;
export type UploadFileRes = {
  key: string;
  url: string;
};
