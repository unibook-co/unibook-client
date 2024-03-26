import { Endpoint } from "endpoint-client";
import { OrderObject } from "../../../object";

/**
 * POST /users/:userId/orders
 * 주문을 생성합니다.
 */
export const CreateUserOrder: Endpoint<CreateUserOrderReq, CreateUserOrderRes> =
  {
    method: "POST",
    path: (e) => `/users/${e.userId}/orders`,
    pathParams: ["userId"],
    bodyParams: ["bookId", "couponCode"],
  };
export type CreateUserOrderReqPath = {
  userId: number | string;
};
export type CreateUserOrderReqBody = {
  bookId: number | string;
  couponCode?: string;
};
export type CreateUserOrderReq = CreateUserOrderReqPath &
  CreateUserOrderReqBody;
export type CreateUserOrderRes = {
  order: OrderObject;
};

/**
 * POST /users/:userId/orders/cash
 * 현금 주문을 생성합니다.
 */
export const CreateAndApproveCashUserOrder: Endpoint<
  CreateAndApproveCashUserOrderReq,
  CreateAndApproveCashUserOrderRes
> = {
  method: "POST",
  path: (e) => `/users/${e.userId}/orders/cash`,
  pathParams: ["userId"],
  bodyParams: ["bookId"],
};
export type CreateAndApproveCashUserOrderReqPath = {
  userId: number | string;
};
export type CreateAndApproveCashUserOrderReq =
  CreateAndApproveCashUserOrderReqPath & {
    bookId: number | string;
  };
export type CreateAndApproveCashUserOrderRes = {
  order: OrderObject;
};

/**
 * POST /users/:userId/orders/:orderId/approve
 * 주문을 승인합니다.
 */
export const ApproveUserOrder: Endpoint<
  ApproveUserOrderReq,
  ApproveUserOrderRes
> = {
  method: "POST",
  path: (e) => `/users/${e.userId}/orders/${e.orderId}/approve`,
  pathParams: ["userId", "orderId"],
  bodyParams: ["paymentKey", "amount"],
};
export type ApproveUserOrderReqPath = {
  userId: number | string;
  orderId: number | string;
};
export type ApproveUserOrderReq = ApproveUserOrderReqPath & {
  paymentKey: string;
  amount: number;
};
export type ApproveUserOrderRes = {
  result: "success";
  order: OrderObject;
};
export type ApproveUserOrderResError = {
  result: "error";
  code: string;
  message: string;
};

/**
 * POST /users/:userId/orders/:orderId/cancel
 * 주문을 취소합니다.
 */
export const CancelUserOrder: Endpoint<CancelUserOrderReq, CancelUserOrderRes> =
  {
    method: "POST",
    path: (e) => `/users/${e.userId}/orders/${e.orderId}/cancel`,
    pathParams: ["userId", "orderId"],
    bodyParams: ["reason"],
  };
export type CancelUserOrderReqPath = {
  userId: number | string;
  orderId: number | string;
};
export type CancelUserOrderReq = CancelUserOrderReqPath & {
  reason: string;
};
export type CancelUserOrderRes = {
  result: "success";
  order: OrderObject;
};
export type CancelUserOrderResError = {
  result: "error";
  code: string;
  message: string;
};

/**
 * GET /users/:userId/orders
 * 주문 목록을 조회합니다.
 */
export const ListUserOrder: Endpoint<ListUserOrderReq, ListUserOrderRes> = {
  method: "GET",
  path: (e) => `/users/${e.userId}/orders`,
  pathParams: ["userId"],
  queryParams: ["page", "take"],
};
export type ListUserOrderReqPath = {
  userId: number | string;
};
export type ListUserOrderReq = ListUserOrderReqPath & {
  page?: number;
  take?: number;
};
export type ListUserOrderRes = {
  orders: OrderObject[];
  total: number;
};
