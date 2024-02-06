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
