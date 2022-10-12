import { Publisher, Subjects, TicketCreatedEvent } from '@ticketskb/common';

export class TicketCreatedPublisher extends Publisher< TicketCreatedEvent > {
    readonly subject = Subjects.TicketCreated;
}