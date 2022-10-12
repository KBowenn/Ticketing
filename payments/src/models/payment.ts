import mongoose from "mongoose";

interface PaymentsAttrs {  // properties to provide to a payment
    orderId: string;
    stripeId: string;
};

interface PaymentDoc extends mongoose.Document {  // list of properties a paymnet has
    orderId: string;
    stripeId: string;
};

interface PaymentModel extends mongoose.Model<PaymentDoc> {
    build(attrs: PaymentsAttrs): PaymentDoc;    // has build method that has attrs of type PaymentAttrs will return a PaymentDoc
};

const paymentSchema = new mongoose.Schema({
    orderId: {
        required: true,
        type: String
    },
    stripeId: {
        required: true,
        type: String
    },
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

paymentSchema.statics.build = (attrs: PaymentsAttrs) => {
    return new Payment(attrs)
};

const Payment = mongoose.model<PaymentDoc, PaymentModel>('Payment', paymentSchema);

export{ Payment }