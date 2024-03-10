import { User } from "@nextui-org/react";
import runChat from "../../../utils/gemini";
import { UsersDetails } from "@/models/Userdetails";

import getTokenDetails from "@/utils/auth";
import { connectMongoDB } from "@/lib/mongodb";
import {Users} from "../../../models/user"

export default async function handler(req, res) {
  connectMongoDB();

  console.log("asjkgbajsnfjasbgjasbgj");
  //console.log(req.headers);
  const auth = req.headers.authorization.split(" ")[1];
  let userId = await getTokenDetails(auth);
  console.log("fffgf",userId);
  let user = await Users.findById(userId);

  console.log("USER===",user);
 

  const dob = user.dob;
  const dod = user.dod;
  const dataNow = new Date();
  const age = dataNow.getFullYear() - new Date(dob).getFullYear();
  const babyAge = dataNow.getMonth() - new Date(dod).getMonth();
  console.log("aage====", age);
  console.log("aage====", babyAge);
  //console.log(user);
  const details = {
    name: user.name,
    //lastName: user.lastName,
    age: age,
    city: user.city,
    country: user.country,
    industry: user.industry,
    job: user.job,
    babyAge: babyAge,
    bloodGroup: user.bloodGroup,
    healthComplications: user.healthComplications,
    challenges: user.challenges,
  };
  const sentencesArray = await runChat(details);
  console.log(sentencesArray);
  console.log(sentencesArray[0]);
  console.log("fbhdshvbhebvshdbrsfhbghjscjr");
  console.log(sentencesArray[1]);
  await Users.findByIdAndUpdate(userId, {
    $set: { daily: sentencesArray[0], weekly: sentencesArray[1] },
  });
  console.log("ho gya jii congrats");
  res.status(200).json("Done");
}
