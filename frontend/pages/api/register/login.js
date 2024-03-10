import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { UsersDetails } from "@/models/Userdetails";
import { generateTokens } from "./generateTokenUser.js";
import getTokenDetails from "@/utils/auth";
import {Users} from "@/models/user.js"
import { ChevronsUp } from "lucide-react";

export default async function handler(req, res) {
  try {
    await connectMongoDB();

    const auth = req.headers.authorization.split(' ')[1];
    let userId = await getTokenDetails(auth);
    //console.log("++++++",userId);
    const user=await Users.findById(userId);

   // console.log(user);
    const firstName = req.body.firstName;
    const lastName = req.body.email;
    const phoneNo = req.body.phoneNo;
    const bloodGroup = req.body.bloodGroup;
    const job = req.body.job;
    const industry = req.body.industry;
    const city = req.body.city;
    const dob = req.body.dob;
    const dod = req.body.dod;
    const healthComplications = req.body.healthComplications;
    const challenges = req.body.challenges;
    console.log("-----")
    console.log(phoneNo,bloodGroup,job);
    await Users.findByIdAndUpdate(userId, {$set: {phoneNo: phoneNo, bloodGroup: bloodGroup, job: job, industry: industry, city: city, dob: dob, dod: dod, healthComplications: healthComplications, challenges: challenges}});
    console.log("+++++");
    console.log(user);

    

    console.log("USER DETAILS ENTERED.")
    return res.json({ message: "User Details entered ", status: 200 });
  } catch (error) {
    console.error("An error occurred:", error);
    return res.json({ message: "Error occurred ", status: 500 });
  }
}
