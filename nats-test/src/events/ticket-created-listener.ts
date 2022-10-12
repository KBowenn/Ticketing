import { Message } from 'node-nats-streaming';

import { Listener } from '../events/base-listener';
import { Subjects } from './subjects';
import { TicketCreatedEvent } from './ticket-created-event';

export class TicketCreatedListener extends Listener< TicketCreatedEvent > {
    readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;     // Providing the type annotation makes sure you can never change value of subject
    queueGroupName = 'payments-service';

    onMessage(data: TicketCreatedEvent['data'], msg: Message) {
        console.log('Event data', data);

        msg.ack();
    };
};