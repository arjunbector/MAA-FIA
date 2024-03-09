import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { UsersDetails } from "@/models/Userdetails";
import {generateTokens} from "./generateTokensUser.js"



export default async function handler(req, res){
    try{
        await connectMongoDB();
        const firstName=req.body.firstName;
        const lastName=req.body.email;
        const regNo=req.body.regNo;
        const mobno=req.body.password;
        const newUserDetail = new UsersDetails({ firstName,lastName,mobno});
  
        await newUserDetail.save();
       const { accessToken, refreshToken } = await generateTokens(newUserDetail);
       console.log(accessToken);
        console.log(refreshToken);

        //console.log(accessToken);
     
        return res.json({ message: "User Details entered ", status: 200 });

        

    }catch(error) {
        console.error("An error occurred:", error);
        return res.json({ message: "Error occurred ", status: 500 });
    }
    
}