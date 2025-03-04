import express from 'express';
import cors from 'cors';
import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Initialize Payload first
const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET!,
    express: app,
  });

  // Then apply CORS
  app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

  // Add Payload routes
  app.use('/api', payload.router);

  app.listen(3000, () => {
    console.log(`Payload CMS running on ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`);
  });
};

start();