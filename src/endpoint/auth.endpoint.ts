import { Endpoint } from "endpoint-client";

/**
 * POST /auth/oauth/google
 * 구글 OAuth로 로그인
 */
export const AuthOAuthGoogle: Endpoint<AuthOAuthGoogleReq, AuthOAuthGoogleRes> =
  {
    method: "POST",
    path: () => `/auth/oauth/google`,
    bodyParams: ["code", "callbackUrl"],
  };
export type AuthOAuthGoogleReq = {
  code: string;
  callbackUrl: string;
};
export type AuthOAuthGoogleRes = {
  token: string;
};

/**
 * POST /auth/issue-token
 * 토큰 발급
 */
export const IssueToken: Endpoint<IssueTokenReq, IssueTokenRes> = {
  method: "POST",
  path: () => `/auth/issue-token`,
  bodyParams: ["userId"],
};
export type IssueTokenReq = {
  userId: string;
};
export type IssueTokenRes = {
  token: string;
};
