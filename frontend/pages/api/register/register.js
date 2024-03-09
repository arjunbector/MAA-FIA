import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import {Users} from "@/models/user";
import { generateTokens } from "./generateTokenUser";
//import {generateTokens} from "../login/generateTokensUser/route"


export default async function handler(req, res) {
    try{
        await connectMongoDB();
        const name=req.body.name;
        const email=req.body.email;
        const password=req.body.password;
        const userExists=await Users.findOne({email:email})
        if(!userExists){
        const newUser = new Users({ name, email, password });
        
        await newUser.save();
       
       console.log(name)
       const { accessToken, refreshToken } = await generateTokens(newUser);
       console.log(accessToken);
       console.log(refreshToken);

        return res.json({ message: "User registered", status: 200 });
        }else{
            return res.json({ message: "User has already registered", status: 200 });
        }
        

    }catch(error) {
        console.error("An error occurred:", error);
        return res.json({ message: "Error occurred while registering user", status: 500 });
    }
    
}