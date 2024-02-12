import { BookObject } from "./book.object";
import { UserObject } from "./user.object";

export class OrderObject {
    orderId: string;
    orderName: string;
    paymentKey?: string;
    method?: string;
    totalAmount: number;
    balanceAmount: number;
    orderedAt?: Date;
    requestedAt?: Date;
    approvedAt?: Date;
    receiptUrl?: string;
    status: "in_progress" | "pending" | "done" | "canceled" | "expired";

    user?: UserObject;
    book?: BookObject;

    constructor(data: {
        orderId: string;
        orderName: string;
        paymentKey?: string;
        method?: string;
        totalAmount: number;
        balanceAmount: number;
        orderedAt?: Date;
        requestedAt?: Date;
        approvedAt?: Date;
        receiptUrl?: string;
        status: "in_progress" | "pending" | "done" | "canceled" | "expired";
        user?: UserObject;
        book?: BookObject;
    }) {
        this.orderId = data.orderId;
        this.orderName = data.orderName;
        this.paymentKey = data.paymentKey;
        this.method = data.method;
        this.totalAmount = data.totalAmount;
        this.balanceAmount = data.balanceAmount;
        this.orderedAt = data.orderedAt;
        this.requestedAt = data.requestedAt;
        this.approvedAt = data.approvedAt;
        this.receiptUrl = data.receiptUrl;
        this.status = data.status;
        this.user = data.user;
        this.book = data.book;
    }
}
