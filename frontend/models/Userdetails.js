import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userDetailSchema = new Schema(
    {
   
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
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
    {timestamps:true},
    { collection: "UsersDetails" }
);


export const UsersDetails =
  mongoose.models.UsersDetails || mongoose.model('UsersDetails', userDetailSchema);