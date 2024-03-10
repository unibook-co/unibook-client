import { Endpoint } from "endpoint-client";
import { OrderObject } from "../../object";

/**
 * GET /orders
 * 주문 목록을 조회합니다.
 */
export const ListOrder: Endpoint<ListOrderReq, ListOrderRes> = {
  method: "GET",
  path: (e) => `/orders`,
  queryParams: ["page", "take"],
};
export type ListOrderReq = {
  page?: number;
  take?: number;
};
export type ListOrderRes = {
  orders: OrderObject[];
  total: number;
};

/**
 * GET /orders/:orderId
 * 주문을 조회합니다.
 */
export const GetOrder: Endpoint<GetOrderReq, GetOrderRes> = {
  method: "GET",
  path: (e) => `/orders/${e.orderId}`,
  pathParams: ["orderId"],
};
export type GetOrderReqPath = {
  orderId: number | string;
};
export type GetOrderReq = GetOrderReqPath;
export type GetOrderRes = {
  order: OrderObject;
};
