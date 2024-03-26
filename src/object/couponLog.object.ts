export class CouponLogObject {
  id: number;
  couponId: number;
  type: "create" | "update" | "expire" | "delete";
  message: string;
  createdAt: string;

  constructor(data: {
    id: number;
    couponId: number;
    type: "create" | "update" | "expire" | "delete";
    message: string;
    createdAt: string;
  }) {
    this.id = data.id;
    this.couponId = data.couponId;
    this.type = data.type;
    this.message = data.message;
    this.createdAt = data.createdAt;
  }
}
