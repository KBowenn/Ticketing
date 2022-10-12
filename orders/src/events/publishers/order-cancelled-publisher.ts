import { Publisher, OrderCancelledEvent, Subjects } from "@ticketskb/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled
};