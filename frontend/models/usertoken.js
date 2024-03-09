import mongoose from 'mongoose';
import { Schema } from 'mongoose';



const userTokenSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 30 * 86400, // 30 days
    },
  },
  { collection: "UserToken" }
);

export const UserToken =
  mongoose.models.UserToken || mongoose.model('UserToken', userTokenSchema);