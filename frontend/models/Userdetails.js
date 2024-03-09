import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userDetailSchema = new Schema(
    {
   
        hasFilledDetails: {
            type: Boolean,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        regNo: {
            type: String,
        },
        mobno: {
            type: Number,
        },
        teamRole:{
            type:Number, // 0 for leader, 1 for member
        },
        teamId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TeamModel",
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