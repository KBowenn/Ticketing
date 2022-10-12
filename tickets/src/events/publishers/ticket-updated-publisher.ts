import { Publisher, Subjects, TicketUpdatedEvent } from '@ticketskb/common';

export class TicketUpdatedPublisher extends Publisher< TicketUpdatedEvent > {
    readonly subject = Subjects.TicketUpdated
};