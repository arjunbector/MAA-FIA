import Image from "next/image";
import leftVector from "../../../public/landingPage/form/leftVector.svg";
import rightVector from "../../../public/landingPage/form/rightVector.svg";
import bottomVector from "../../../public/landingPage/form/bottomVector.svg";
import Form from "./Form";
import healthCompArr from "@/constants/complications";
import challenges from "@/constants/challenges";
import { useState } from "react";
import Capsule from "./Capsule";
import { useSession } from "next-auth/react";
import ReactLoading from "react-loading";

const FormSection = () => {
  const { data: session, status } = useSession();
  console.log("dvbfhjbscjbfj", session);
  const [geminiData, setGeminiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: null,
    bloodGroup: "",
    job: "",
    industry: "",
    city: "",
    country: "",
    dod: "",
    healthComplications: [],
    challenges: [],
  });

  const [dailyTasks, setDailyTasks] = useState([]);
  const [weeklyTasks, setWeeklyTasks] = useState([]);
  const [dailyTasksArr, setDailyTasksArr] = useState([]);
  const [weeklyTasksArr, setWeeklyTasksArr] = useState([]);
  const [healthDataToSend, setHealthDataToSend] = useState([]);
  const healthData = [...healthCompArr];
  const healthCapsules = healthData.map((complication) => (
    <Capsule
      text={complication.name}
      selected={complication.selected}
      healthDataToSend={healthDataToSend}
      setHealthDataToSend={setHealthDataToSend}
      healthData={healthData}
    />
  ));

  const [challengesDataToSend, setChallengesDataToSend] = useState([]);
  const challengesData = [...challenges];
  const challengesCapsules = challengesData.map((complication) => (
    <Capsule
      text={complication.name}
      selected={complication.selected}
      healthDataToSend={challengesDataToSend}
      setHealthDataToSend={setChallengesDataToSend}
      healthData={challengesData}
    />
  ));

  console.log(healthDataToSend);
  console.log(challengesDataToSend);
  console.log(formData);

  const sendData = () => {
    setLoading(true);
    console.log("Sending data");
    setFormData({
      ...formData,
      healthComplications: healthDataToSend,
      challenges: challengesDataToSend,
    });
    console.log("fdsgfcgcvgvbvbcgcfgchg", session);
    fetch("/api/register/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.accessTokenBackend}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log("Response:", res.status);
        if (res.status === 200) {
          console.log("User Details entered");
          console.log("session:", session.accessTokenBackend);
          return fetch("/api/gemini/callgemini", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session.accessTokenBackend}`,
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({}),
          });
        }
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("Done");
          return fetch("/api/gemini/getData", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session.accessTokenBackend}`,
              "Access-Control-Allow-Origin": "*",
            },
          });
        }
      })
      .then((res) => {
        if (!res) {
          throw new Error("Response is undefined");
        }
        if (res.status === 200) {
          console.log("Data fetched");
          return res.json();
        }
      })
      .then((data) => {
        console.log("Data from gemini:", data);
        setGeminiData(data);
        setDailyTasksArr(
          data.dailyTasks.map((task) => (
            <div className="m-2 p-2 bg-[#FFF8E3] rounded-xl shadow-lg">
              <p className="font-semibold text-xl">{task}</p>
            </div>
          ))
        );
        setWeeklyTasksArr(
          data.weeklyTasks.map((task) => (
            <div className="m-2 p-2 bg-[#FFF8E3] rounded-xl shadow-lg">
              <p className="font-semibold text-xl">{task}</p>
            </div>
          ))
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error occured", err);
      });
  };
  return (
    <section className="min-h-screen bg-[#F5EEE6] relative overflow-x-hidden flex justify-center items-center">
      <div className="absolute top-40 left-[-1vw]">
        <Image className="h-56" src={leftVector} />
      </div>
      <div className="absolute right-[-1vw] top-[100vh]">
        <Image className="h-56" src={rightVector} />
      </div>
      <div className="absolute bottom-0 left-[30vw]">
        <Image className="w-96" src={bottomVector} />
      </div>
      <div className="w-[90vw] bg-[#f3d7ca6c] min-h-screen h-fit backdrop-blur-[3px] m-10 shadow-xl rounded-xl">
        <h1 className="text-center text-4xl mt-4 mb-[-40px] font-semibold font-[Grespoika]">
          Share Your Details
        </h1>
        <Form formData={formData} setFormData={setFormData} />
        <div className="my-16 mx-56 px-10 py-5 bg-[#FFF8E3] flex flex-col justify-start rounded-lg border-[#F3D7CA] border-2 text-slate-600">
          <h1 className="m-1 font-semibold mb-3 mt-0">Health Complications</h1>
          <div className="flex flex-wrap gap-4">{healthCapsules}</div>
        </div>
        <div className="my-16 mx-56 px-10 py-5 bg-[#FFF8E3] flex flex-col justify-start rounded-lg border-[#F3D7CA] border-2 text-slate-600">
          <h1 className="m-1 font-semibold mb-3">
            Expected Challenges you foresee when returning to work{" "}
          </h1>
          <div className="flex flex-wrap gap-4">{challengesCapsules}</div>
        </div>
        <div className="w-full text-center">
          <button
            className="bg-[#E6A4B4] px-3 py-2 rounded-xl mb-3 font-semibold min-w-20 text-center"
            onClick={sendData}
          >
            {loading ? (
              <ReactLoading
              className="m-auto"
                type={"spin"}
                color={"black"}
                height={30}
                width={30}
              />
            ) : (
              "Submit"
            )}
          </button>
        </div>
        {geminiData && (
          <div>
            <h1 className="text-4xl font-semibold">Your Daily Tasks</h1>
            <div>{dailyTasksArr}</div>
          </div>
        )}
        {geminiData && (
          <div>
            <h1 className="text-4xl font-semibold">Your Weekly Tasks</h1>
            <div>{weeklyTasksArr}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FormSection;
