import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    email: {
      type: String,
    },
   
    name: {
      type: String,
    },
    password:{
        type:String
    },
    
   
   
  
  },
  { collection: 'Users' }
);

export const Users =
  mongoose.models.Users || mongoose.model('Users', userSchema);