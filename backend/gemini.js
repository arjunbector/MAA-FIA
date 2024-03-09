// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyB-yA1oONsOH8KAm12rv8FbT2ahs70Pk6A";

async function runChat() {
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


  let details = "Name: Jane Age: 27 From: Mumbai, India Industry: Finance Age of baby: 6 months Complications after delivery: Lack of Sleep, Anxiety and Hormonal Imbalance Scares before joining back: Unable to find someone to take care of baby while at home, Might be scared to start work because people might look at them differently as it was before."

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: details + "Based on the information provided regarding a pregnant woman\ncoming back to work, give a daily list of tasks which they are to do for a week.Make\nsure you take into account the maternity leave laws of the place where they are\nfrom before giving the tasks. Adjust tasks according to that. Give a very\nspecific tasks based on the details given above. The schedule should contain\ntasks that will help them develop in the industry they have mentioned while at\nthe same time aid them in clearing the specific apprehensions that they may\nhave before joining work. Keep note of the age of the woman while doing the\nsame give extremely specific tasks based on the data. Do not generalise it. see\nthe place where they live in and give very location specific suggestionsDaily\nSchedule:Morning:Wake up and feed baby.Change baby's diaper and get them\ndressed.Do some light exercise (like yoga or walking).Get dressed and eat\nbreakfast.Midday:Work on your finance job for 2 hours (like looking at\nfinancial data or making a presentation).Take a break to feed baby or pump\nmilk.Nap when baby naps.Afternoon:Continue working on your finance job for 2\nhours (like attending a webinar or talking to a mentor).Take a break to connect\nwith other working moms.Do something for yourself (like meditation or\nreading).Evening:Make dinner.Spend time with baby and family.Relax and wind\ndown (like taking a bath or reading a book).Weekly Schedule:Monday: Learn about\nthe latest in finance (like reading articles or going to a conference). Attend\na support group for working moms.Tuesday: Take care of yourself (like doing\nyoga or meditation).Wednesday: Get ready for the week ahead (like planning your\nwork and childcare).Thursday: Network with other people in finance (like going\nto an industry event or connecting with colleagues on LinkedIn).Friday: Catch\nup on industry news (like reading a webinar or attending a conference)\n\nTips:Be kind to yourself and your body as you adjust to\nbeing a new mom and going back to work.Don't be afraid to ask for help from\nfamily, friends, or a postpartum doula.Make your own health a priority.Connect\nwith other new moms for support.Get professional help if you're struggling\nafter going back to work.strictly follow this format while generating.\n\n\n\ndo not give schedule as a time by time basis. Give it as a\nlist. Also, give more details on the tasks. Do not give a section saying\nmitigation tasks, instead encorporate it into the task structured mentioned.do\nnot give a specific section to apprehension specific tasks. Put those tasks\nelsewhere when generating the prompt.remove that subheading title\n\"Apprehension specific tasks\" everywhere when generating the text.\ngive as specific and as detailed tasks as possible for the data given. ** DO NOT\nGIVE DAILY TASK WITH TIME. give them as things to do in the morning, afternoon,\nevening and night**. use real world references of the things in the industry\nthey are a part of and make it extremely detailed. give a list of very specific\nand extremely detailed tasks which can help them get back to work.add more\ndetails in the weekly section. Do not give monthly in a week-by-week structure.\nGenerate it in a format similar to weekly/ daily tasks but with very detailed\ntasks which will take a month to achieve. Try to not keep subpoints in the\ntasks. Instead rephrase the task so that the things in the subpoints are\nencorporated. no subpoints anywhere please, whether it's daily/weekly section.\nEncorporate it in the main task by rephrasing it. no subpoints in daily tasks\nplease. give real life examples of industry trends. For example for IT mention\nsome courses of a specific topic and some frameworks which are used a lot in\ntoday's world. encorporate this in the prompt above but for the industry\nmentioned. try to keep the industry trends and other skills and basic things in\nthe industry that they have to do in the daily/weekly tasks when generating\noutput so as to make it detailed. keep in mind of their fatigues in order to do\nthese tasks. "}],
      },
      {
        role: "model",
        parts: [{ text: "**Daily Schedule**\n\n**Morning:**\n\n* Breastfeed or bottle-feed baby.\n* Change baby's diaper and dress them in appropriate clothing.\n* Engage in light physical activity, such as prenatal yoga or a brisk walk.\n* Prepare a nutritious breakfast while considering dietary restrictions related to breastfeeding.\n\n**Midday:**\n\n* Devote 2 hours to financial analysis, focusing on industry-relevant data and financial modeling.\n* Take a designated break to breastfeed or pump milk, prioritizing the baby's well-being.\n* Utilize baby's naptime for a power nap or relaxation.\n\n**Afternoon:**\n\n* Continue financial analysis tasks, including preparing a presentation on portfolio performance.\n* Participate in a webinar on emerging trends in corporate finance or connect with a mentor.\n* Take a break to connect with a support group for working mothers, sharing experiences and seeking support.\n* Engage in self-care activities, such as meditation or reading, to manage stress and promote well-being.\n\n**Evening:**\n\n* Prepare a healthy and balanced dinner for family.\n* Spend quality time with baby and family, fostering bonding and connection.\n* Relax and unwind before bed, considering activities like taking a warm bath or reading a book.\n\n**Weekly Schedule**\n\n**Monday:**\n\n* Research best practices in financial modeling and incorporate them into upcoming projects.\n* Attend a conference featuring industry thought leaders to gain insights into market trends.\n* Join a virtual support group for working mothers to connect with peers and address common challenges.\n\n**Tuesday:**\n\n* Focus on self-care by practicing mindful breathing exercises and engaging in gentle yoga.\n* Consult with a financial advisor to discuss investment strategies aligned with personal goals.\n\n**Wednesday:**\n\n* Plan the upcoming work week, scheduling tasks strategically to optimize efficiency.\n* Arrange childcare for the following week, ensuring baby's well-being and providing peace of mind.\n\n**Thursday:**\n\n* Network with other finance professionals at industry events, expanding knowledge and building connections.\n* Connect with colleagues on LinkedIn, exchanging ideas and seeking collaboration opportunities.\n\n**Friday:**\n\n* Catch up on industry news and updates, attending webinars or conferences on relevant topics.\n* Review financial statements and analyze market data to stay abreast of current market dynamics."}],
      },
    ],
  });

  const result = await chat.sendMessage("YOUR_USER_INPUT");
  const response = result.response;
  console.log(response.text());
}

runChat();