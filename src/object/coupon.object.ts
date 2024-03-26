export type CouponTargetType = "book";
export type CouponBookTarget = {
  type: "book";
  bookId: number;
};
export type CouponTarget = CouponBookTarget;

export type CouponDiscountType = "price" | "rate";
export type CouponPriceDiscount = {
  type: "price";
  price: number;
};
export type CouponRateDiscount = {
  type: "rate";
  rate: number;
};
export type CouponDiscount = CouponPriceDiscount | CouponRateDiscount;

export class CouponObject {
  id: number;
  code: string;
  name: string;
  description?: string;
  target: CouponTarget;
  discount: CouponDiscount;
  status: "active" | "expired" | "used" | "deleted";
  quota: number;
  amount: number;
  expiresAt: string;
  createdAt: string;

  constructor(data: {
    id: number;
    code: string;
    name: string;
    description?: string;
    target: CouponTarget;
    discount: CouponDiscount;
    status: "active" | "expired" | "used" | "deleted";
    quota: number;
    amount: number;
    expiresAt: string;
    createdAt: string;
  }) {
    this.id = data.id;
    this.code = data.code;
    this.name = data.name;
    this.description = data.description;
    this.target = data.target;
    this.discount = data.discount;
    this.status = data.status;
    this.quota = data.quota;
    this.amount = data.amount;
    this.expiresAt = data.expiresAt;
    this.createdAt = data.createdAt;
  }
}
