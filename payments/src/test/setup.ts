import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import jwt from "jsonwebtoken";

import { app } from "../app";

declare global {
    var signin: (id?: string) => string[];
  }

jest.mock('../nats-wrapper');   // use a fake file to avoid running nats during tests, route to real nats-wrapper, jest will look in __mock__ for fake file

process.env.STRIPE_KEY = 'sk_test_51LefDMB6ubWqHFPr24VXRJULVAqjnL0EKt1vNlgqeuRPMY5RX7JE72oJG6wbdxuX8hmVZPQW9GsEVqY2w290u80B00SPzGXcwX';

let mongo:any;
beforeAll (async () => {
    process.env.JWT_KEY = 'asdfasdf';
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    mongo = new MongoMemoryServer();
    await mongo.start();
    const mongoUri = await mongo.getUri();          // Uri = Uniform Resource Identifier
    await mongoose.connect(mongoUri);
});

beforeEach (async () => {
    jest.clearAllMocks();
    
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

afterAll (async () => {
    await mongo.stop();
    await mongoose.connection.close();
});

global.signin = (id?: string) => {
// Build a JWT payload. {id,email}
    const payload = {
        id: id || new mongoose.Types.ObjectId().toHexString(),   // id: id (if id is provided use id) || (or) (randomly generate an id)
        email: 'test1@test.com'
    };

// Create the JWT
    const token = jwt.sign(payload, process.env.JWT_KEY!);

// Build session Object. {jwt: MY_JWT}
    const session = { jwt: token };

// Turn that session into JSON
    const sessionJSON = JSON.stringify(session);

// Take JSON and encode it as base64
    const base64 = Buffer.from(sessionJSON).toString('base64');

// Return a string that's the cookie with encoded data
    return [`session=${base64}`];
};
