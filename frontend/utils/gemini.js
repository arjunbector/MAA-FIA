// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyB-yA1oONsOH8KAm12rv8FbT2ahs70Pk6A";

export default async function runChat(details) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];
  

  let details1 =
    `Name: ${details.name}  Age: ${details.age} From: ${details.city}, ${details.country} Industry: ${details.industry} Age of baby: ${details.babyAge} months Complications after delivery: ${details.healthComplications.join(", ")} Scares before joining back: ${details.challenges.join(", ")}`;

  console.log(details1);


  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {
            text:
              details1 +
              "Based on the information provided regarding a pregnant woman coming back to work, give a daily list of tasks which they are to do for a month. Also, give a weekly list for the month and also give a list of tasks that are to be achieved through the month. Make sure you take into account the maternity leave laws of the place where they are from before giving the tasks. Adjust tasks according to that.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "*Daily Tasks:\n\n Care for baby (feeding, diaper changes, playtime)\n* Breastfeed or pump every 2-3 hours\n* Nap when baby naps\n* Exercise or engage in light physical activity\n* Shower and dress\n* Prepare healthy meals and snacks\n* Do light household chores (e.g., laundry, dishes)\n* Communicate with family and friends\n\n*Weekly Tasks:\n\n Attend postpartum checkup appointments\n* Join a support group for new moms\n* Go for walks or engage in other outdoor activities with baby\n* Take breaks from baby care to rest and recharge\n* Plan for childcare arrangements for return to work\n\n*Monthly Tasks:\n\n Achieve a postpartum weight loss plan (as recommended by doctor)\n* Establish a regular sleep schedule for baby\n* Address any signs of postpartum depression or anxiety\n* Begin gradually increasing activity level\n* Research childcare options\n\n*Considerations According to Maternity Leave Laws in India:\n\n India grants 26 weeks of paid maternity leave under the Maternity Benefit Act (MBA).\n* This period may be extended by up to 12 weeks in the case of illness or other complications.\n* Jane is 6 months postpartum, so her maternity leave is likely over.\n\n*Additional Tips:\n\n Be patient with yourself and your body as you adjust to being a new mom.\n* Don't hesitate to ask for help from family, friends, or a postpartum doula.\n* Prioritize your own physical and mental health.\n* Find ways to connect with other new moms for support.\n* Seek professional help if you experience any significant difficulties after returning to work.",
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage("YOUR_USER_INPUT");
  const response1 = result.response;
  let e = response1.text();
  console.log(e);
  console.log("HEHEHEHEH");

  const regex = /\*\*Daily Tasks:\*\*([\s\S]*?)\*\*Weekly Tasks:\*\*/;
  const regex1 = /\*\*Weekly Tasks:\*\*([\s\S]*?)\*\*Monthly Tasks:\*\*/;

  const match = e.match(regex);
  console.log(match);
  const match1 = e.match(regex1);
  console.log(match1);
  let myArray = [];

  if (match && match1) {
    const dailyTasks = match[1].trim();

    const sentencesArray = dailyTasks
      .trim()
      .split("\n")
      .filter((sentence) => sentence.trim() !== "");
    console.log(sentencesArray);
    const weeklyTasks = match1[1].trim();
    console.log(weeklyTasks);
    console.log(sentencesArray);
    myArray.push(sentencesArray);
    myArray.push(weeklyTasks.split("\n").map((task) => task.trim()));

    console.log("fdsghgfnabschjdfghxsbzcdfg");
    console.log(myArray);
    return myArray;
  } else {
    console.log("Daily tasks not found.");
  }
}
