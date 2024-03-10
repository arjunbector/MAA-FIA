import { User } from "@nextui-org/react";
import runChat from "../../../utils/gemini";
import { UsersDetails } from "@/models/Userdetails";

import getTokenDetails from "@/utils/auth";
import { connectMongoDB } from "@/lib/mongodb";
import {Users} from "../../../models/user"


export default async function handler(req, res) {
   await  connectMongoDB();
    const auth = req.headers.authorization.split(" ")[1];
    let userId = await getTokenDetails(auth);
    console.log("fffgf",userId);
    const user=await Users.findById(userId);
    console.log("USER===",user);

   
    const dailyTasks=user.daily;
    const weeklyTasks=user.weekly;
    res.status(200).json({dailyTasks:dailyTasks,weeklyTasks:weeklyTasks});

}