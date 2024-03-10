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
    phoneNo: {
      type: Number,
  },
  bloodGroup: {
      type: String,
  },
  job: {
      type: String,
  },
  industry: {
      type: String,
  },
  city: {
      type: String,
  },
  country: {
      type: String,
  },
  dob: {
      type: String,
  },
  dod: {
      type: String,
  },
  healthComplications: {
      type: Array,
  },
  challenges: {
      type: Array,
  },
  daily:{
      type:Array,
  },
  weekly:{
      type:Array,
  },

  
  country:{
    type:String
  },
  date: {
      type: Date,
      default: Date.now(),
  },

  dailycomplete:{
      type:Array,
  },

  weekcomplete:{
      type:Array
  }
    
   
   
  
  },
  { collection: 'Users' }
);

export const Users =
  mongoose.models.Users || mongoose.model('Users', userSchema);