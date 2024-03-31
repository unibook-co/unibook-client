export class CouponUseLogObject {
  id: number;
  couponId: number;
  orderId: number;
  userId: number;
  price: number;
  message: string;
  createdAt: string;

  constructor(data: {
    id: number;
    couponId: number;
    orderId: number;
    userId: number;
    price: number;
    message: string;
    createdAt: string;
  }) {
    this.id = data.id;
    this.couponId = data.couponId;
    this.orderId = data.orderId;
    this.userId = data.userId;
    this.price = data.price;
    this.message = data.message;
    this.createdAt = data.createdAt;
  }
}
