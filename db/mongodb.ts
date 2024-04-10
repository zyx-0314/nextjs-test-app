import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export const dbConnection = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not provided');
        }

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully")

    } catch (error) {
        console.log("CONNECTION_ERROR: ", error)
        return new NextResponse("DB_CONNECTION", { status: 500 })
    }
}