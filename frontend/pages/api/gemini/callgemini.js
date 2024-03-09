import { User } from "@nextui-org/react";
import runChat from "../../../utils/gemini"
import { UsersDetails } from "@/models/Userdetails";

import getTokenDetails from '@/utils/auth';
import { connectMongoDB } from "@/lib/mongodb";


export default async function handler(req, res) {
    connectMongoDB()
   
    const auth = req.headers.authorization.split(' ')[1];
    let userId = await getTokenDetails(auth);
    let user=await UsersDetails.findById(userId);
   
    //console.log(user);
    
    const sentencesArray=await runChat();
   console.log(sentencesArray);
    console.log(sentencesArray[0]);
    console.log("fbhdshvbhebvshdbrsfhbghjscjr");
    console.log(sentencesArray[1]);
    await UsersDetails.findByIdAndUpdate(userId,{$set:{daily:sentencesArray[0],weekly:sentencesArray[1]}});
    console.log("ho gya jii congrats");
    res.status(200).json("Done");
   
  }