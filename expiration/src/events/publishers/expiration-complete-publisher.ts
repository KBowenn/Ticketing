import { Subjects, Publisher, ExpirationCompleteEvent } from "@ticketskb/common";


export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}