import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { UsersDetails } from "@/models/Userdetails";
import { generateTokens } from "./generateTokenUser.js";

export default async function handler(req, res) {
  try {
    await connectMongoDB();
    const firstName = req.body.firstName;
    const lastName = req.body.email;
    const phoneNo = req.body.phoneNo;
    const bloodGroup = req.body.bloodGroup;
    const job = req.body.job;
    const industry = req.body.industry;
    const city = req.body.city;
    const dod = req.body.dod;
    const healthComplications = req.body.healthComplications;
    const challenges = req.body.challenges;
    const newUserDetail = new UsersDetails({
      firstName,
      lastName,
      phoneNo,
      bloodGroup,
      job,
      industry,
      city,
      dod,
      healthComplications,
      challenges,
    });

    await newUserDetail.save();

    //console.log(accessToken);

    console.log("USER DETAILS ENTERED.")
    return res.json({ message: "User Details entered ", status: 200 });
  } catch (error) {
    console.error("An error occurred:", error);
    return res.json({ message: "Error occurred ", status: 500 });
  }
}
