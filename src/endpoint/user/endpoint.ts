import { Endpoint } from "endpoint-client";
import { UserObject } from "../../object/user.object";

/**
 * GET /users
 * 유저를 조회합니다.
 */
export const ListUser: Endpoint<ListUserReq, ListUserRes> = {
    method: "GET",
    path: (e) => `/users`,
    queryParams: ["page", "take"],
};
export type ListUserReqQuery = {
    page?: number;
    take?: number;
};
export type ListUserReq = ListUserReqQuery
export type ListUserRes = {
    users: UserObject[];
    total: number;
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
 * PATCH /users/:userId/profile-image
 * 유저 프로필 이미지를 수정합니다.
 */
export const UpdateUserProfileImage: Endpoint<
    UpdateUserProfileImageReq,
    UpdateUserProfileImageRes
    > = {
    method: "PATCH",
    path: (e) => `/users/${e.userId}/profile-image`,
    pathParams: ["userId"],
    bodyParams: ["file"],
    headers: {
        "Content-Type": "multipart/form-data",
    }
};
export type UpdateUserProfileImageReqPath = {
    userId: number | string;
};
export type UpdateUserProfileImageReq = UpdateUserProfileImageReqPath & {
    file: any;
};
export type UpdateUserProfileImageRes = {
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
