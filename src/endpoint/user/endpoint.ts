import { Endpoint } from "endpoint-client";
import { UserObject } from "../../object/user.object";

/**
 * GET /users
 * 유저를 조회합니다.
 */
export const ListUser: Endpoint<ListUserReq, ListUserRes> = {
    method: "GET",
    path: (e) => `/users`,
};
export type ListUserReq = {};
export type ListUserRes = {
    users: UserObject[];
};

/**
 * GET /users/:userId
 * 유저를 조회합니다.
 */
export const GetUser: Endpoint<GetUserReq, GetUserRes> = {
    method: "GET",
    path: (e) => `/users/${e.userId}`,
    pathParams: ["userId"],
};
export type GetUserReqPath = {
    userId: number | string;
};
export type GetUserReq = GetUserReqPath;
export type GetUserRes = {
    user: UserObject;
};

/**
 * GET /users/search
 * 유저를 검색합니다.
 */
export const SearchUser: Endpoint<SearchUserReq, SearchUserRes> = {
    method: "GET",
    path: (e) => `/users/search`,
    queryParams: ["name", "email"],
};
export type SearchUserReq = {
    name?: string;
    email?: string;
};
export type SearchUserRes = {
    users: UserObject[];
};

/**
 * PATCH /users/:userId
 * 유저를 수정합니다.
 */
export const UpdateUser: Endpoint<UpdateUserReq, UpdateUserRes> = {
    method: "PATCH",
    path: (e) => `/users/${e.userId}`,
    pathParams: ["userId"],
    bodyParams: ["name", "profileImage"],
};
export type UpdateUserReqPath = {
    userId: number | string;
};
export type UpdateUserReq = UpdateUserReqPath & {
    name?: string;
    profileImage?: string;
};
export type UpdateUserRes = {
    user: UserObject;
};

/**
 * DELETE /users/:userId
 * 유저를 삭제합니다.
 */
export const DeleteUser: Endpoint<DeleteUserReq, DeleteUserRes> = {
    method: "DELETE",
    path: (e) => `/users/${e.userId}`,
    pathParams: ["userId"],
};
export type DeleteUserReqPath = {
    userId: number | string;
};
export type DeleteUserReq = DeleteUserReqPath;
export type DeleteUserRes = {};
