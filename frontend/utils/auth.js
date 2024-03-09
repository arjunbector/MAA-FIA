import { connectMongoDB } from '@/lib/mongodb';
import { UsersDetails } from '@/models/Userdetails';
import { jwtVerify } from 'jose';
import mongoose from 'mongoose';

export default async function getTokenDetails(token) {
  try {
    connectMongoDB();

    const tokenDetails = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET)
    );

    const userId = tokenDetails.payload._id;
    console.log(userId)

    const user = await UsersDetails.findById(userId);
    console.log(user)
   

    return userId;

  } catch (err) {
    console.log('Kuch Error hogya bro', err);
  }
}