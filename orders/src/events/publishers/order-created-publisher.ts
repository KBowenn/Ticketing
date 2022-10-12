import { Publisher, OrderCreatedEvent, Subjects } from "@ticketskb/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
};

