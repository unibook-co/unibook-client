import { Endpoint } from "endpoint-client";
import {
  CouponDiscount,
  CouponLogObject,
  CouponObject,
  CouponTarget,
  CouponUseLogObject,
} from "../../object";

/**
 * GET /coupons
 * 쿠폰 목록을 조회합니다.
 */
export const ListCoupon: Endpoint<ListCouponReq, ListCouponRes> = {
  method: "GET",
  path: (e) => `/coupons`,
  queryParams: ["page", "take"],
};
export type ListCouponReqQuery = {
  page?: number;
  take?: number;
};
export type ListCouponReq = ListCouponReqQuery;
export type ListCouponRes = {
  coupons: CouponObject[];
  total: number;
};

/**
 * GET /coupons/:couponId
 * 쿠폰을 조회합니다.
 */
export const GetCoupon: Endpoint<GetCouponReq, GetCouponRes> = {
  method: "GET",
  path: (e) => `/coupons/${e.couponId}`,
  pathParams: ["couponId"],
};
export type GetCouponReqPath = {
  couponId: number | string;
};
export type GetCouponReq = GetCouponReqPath;
export type GetCouponRes = {
  coupon: CouponObject;
};

/**
 * GET /coupons/code/:couponCode
 * 쿠폰을 조회합니다.
 */
export const GetCouponByCode: Endpoint<GetCouponByCodeReq, GetCouponByCodeRes> =
  {
    method: "GET",
    path: (e) => `/coupons/code/${e.couponCode}`,
    pathParams: ["couponCode"],
  };
export type GetCouponByCodeReqPath = {
  couponCode: string;
};
export type GetCouponByCodeReq = GetCouponByCodeReqPath;
export type GetCouponByCodeRes = {
  coupon: CouponObject;
};

/**
 * POST /coupons
 * 쿠폰을 생성합니다.
 */
export const CreateCoupon: Endpoint<CreateCouponReq, CreateCouponRes> = {
  method: "POST",
  path: (e) => `/coupons`,
  bodyParams: [
    "name",
    "code",
    "description",
    "target",
    "discount",
    "status",
    "quota",
    "amount",
    "expiresAt",
  ],
};
export type CreateCouponReqBody = {
  code: string;
  name: string;
  description?: string;
  target: CouponTarget;
  discount: CouponDiscount;
  status: CouponObject["status"];
  quota: number;
  amount: number;
  expiresAt: string;
};
export type CreateCouponReq = CreateCouponReqBody;
export type CreateCouponRes = {
  coupon: CouponObject;
};

/**
 * PATCH /coupons/:couponId
 * 쿠폰을 수정합니다.
 */
export const UpdateCoupon: Endpoint<UpdateCouponReq, UpdateCouponRes> = {
  method: "PATCH",
  path: (e) => `/coupons/${e.couponId}`,
  pathParams: ["couponId"],
  bodyParams: [
    "name",
    "description",
    "target",
    "discount",
    "status",
    "quota",
    "amount",
    "expiresAt",
  ],
};
export type UpdateCouponReqPath = {
  couponId: number | string;
};
export type UpdateCouponReqBody = {
  name?: string;
  description?: string;
  target?: CouponTarget;
  discount?: CouponDiscount;
  status?: CouponObject["status"];
  quota?: number;
  amount?: number;
  expiresAt?: string;
};
export type UpdateCouponReq = UpdateCouponReqPath & UpdateCouponReqBody;
export type UpdateCouponRes = {
  coupon: CouponObject;
};

/**
 * DELETE /coupons/:couponId
 * 쿠폰을 삭제합니다.
 */
export const DeleteCoupon: Endpoint<DeleteCouponReq, DeleteCouponRes> = {
  method: "DELETE",
  path: (e) => `/coupons/${e.couponId}`,
  pathParams: ["couponId"],
};
export type DeleteCouponReqPath = {
  couponId: number | string;
};
export type DeleteCouponReq = DeleteCouponReqPath;
export type DeleteCouponRes = {};

/**
 * GET /coupons/logs
 * 쿠폰 로그를 조회합니다.
 */
export const ListCouponLog: Endpoint<ListCouponLogReq, ListCouponLogRes> = {
  method: "GET",
  path: (e) => `/coupons/logs`,
  queryParams: ["page", "take", "type", "couponId"],
};
export type ListCouponLogReqQuery = {
  page?: number;
  take?: number;
  type?: CouponLogObject["type"];
  couponId?: number;
};
export type ListCouponLogReq = ListCouponLogReqQuery;
export type ListCouponLogRes = {
  couponLogs: CouponLogObject[];
  total: number;
};

/**
 * GET /coupons/use-logs
 * 쿠폰 사용 로그를 조회합니다.
 */
export const ListCouponUseLog: Endpoint<
  ListCouponUseLogReq,
  ListCouponUseLogRes
> = {
  method: "GET",
  path: (e) => `/coupons/use-logs`,
  queryParams: ["page", "take", "bookId", "userId", "couponId"],
};
export type ListCouponUseLogReqQuery = {
  page?: number;
  take?: number;
  bookId?: number;
  userId?: number;
  couponId?: number;
};
export type ListCouponUseLogReq = ListCouponUseLogReqQuery;
export type ListCouponUseLogRes = {
  couponUseLogs: CouponUseLogObject[];
  total: number;
};
