import { PaymentCreatedEvent, Publisher, Subjects } from "@ticketskb/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}