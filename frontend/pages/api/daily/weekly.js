import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { UsersDetails } from "@/models/Userdetails";

import getTokenDetails from '@/utils/auth';



export default async function handler(req, res){
    try{
        await connectMongoDB();
        const array=req.body.array; 
        console.log(array)
        const auth = req.headers.authorization.split(' ')[1];
        let userId = await getTokenDetails(auth);
        console.log(userId);
        let user=await UsersDetails.findById(userId);
    
        await UsersDetails.findByIdAndUpdate(userId,{$set:{weekcomplete:array}})
        console.log(user);
     
        return res.json({ message: "done with the daily ", status: 200 });

        

    }catch(error) {
        console.error("An error occurred:", error);
        return res.json({ message: "Error occurred ", status: 500 });
    }
    
}