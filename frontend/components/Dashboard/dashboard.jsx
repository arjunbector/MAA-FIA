import React, { useEffect } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import BarChart from "./bargraph";
import CalendarComp from "./calendar";
import { useState } from "react";
import TaskItems from "./task";
import { useSession } from "next-auth/react";
import { set } from "mongoose";

// import { BarGraph } from './bargraph'
const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log("dvbfhjbscjbfj", session);
  // const [isChecked1, setIsChecked1] = useState(false);
  // const [isChecked2, setIsChecked2] = useState(false);
  const [dailyTaskArr, setDailyTaskArr] = useState([]);
  const [weeklyTaskArr, setWeeklyTaskArr] = useState([]);
  const [constDailyArr, setConstDailyArr] = useState(Array(6).fill(0));
  const [constWeeklyArr, setConstWeeklyArr] = useState(Array(6).fill(0));
  const [tasks, setTasks] = useState(
    Array(6)
      .fill("Task")
      .map((task, index) => `${task} ${index + 1}`)
  );
  const getData = () => {
    fetch("/api/gemini/getData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVkMmU4MWJmMjRhMGUxNTNiNTczMGIiLCJpYXQiOjE3MTAwNTE0MzMsImV4cCI6MTcxMDQ4MzQzM30.f0vGYLbVGHpDLJ-Vgye-oc5sr7wL5mmtrnWV9oIgVeA",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDailyTaskArr(data.dailyTasks);
        setWeeklyTaskArr(data.weeklyTasks);
      });
  };

  const sendData = () => {
    fetch("/api/gemini/getData1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVkMmU4MWJmMjRhMGUxNTNiNTczMGIiLCJpYXQiOjE3MTAwNTE0MzMsImV4cCI6MTcxMDQ4MzQzM30.f0vGYLbVGHpDLJ-Vgye-oc5sr7wL5mmtrnWV9oIgVeA",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        dailyComplete: constDailyArr,
        weekcomplete: constWeeklyArr,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Data sent");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  // const handleCheckboxChange1 = () => {
  //   setIsChecked1(true);
  //   setIsChecked2(false); // Uncheck the other checkbox
  // };
  const handleCheckboxChange = (index, value) => {
    const newArr = [...constDailyArr]; // Create a copy of the tasks array
    newArr[index] = value; // Remove the task at the specified index
    setConstDailyArr(newArr); // Update the state with the new tasks array
  };
  const handleCheckboxChangeWeekly = (index, value) => {
    const newArr = [...constWeeklyArr]; // Create a copy of the tasks array
    newArr[index] = value; // Remove the task at the specified index
    setConstWeeklyArr(newArr); // Update the state with the new tasks array
  };
  // const handleCheckboxChange2 = () => {
  //   setIsChecked2(true);
  //   setIsChecked1(false); // Uncheck the other checkbox
  // };
  console.log(constDailyArr);
  console.log(constWeeklyArr);
  const CheckArr = [];

  return (
    <div className="bg-[#F5EEE6] text-center gap-6 relative">
      <div className="py-4 text-black text-center font-bold text-5xl">
        <h1>DASHBOARD</h1>
      </div>
      <div className="relative grid grid-cols-5 grid-flow-cols gap-4 m-10">
        <div className="flex flex-col bg-[#F3D7CA] p-4 border-black border-2 col-span-2 rounded-xl">
          <h2 className="text-lg font-bold mb-2">Daily Tasks</h2>
          <div className="task-list grid grid-cols-1 grid-flow-row flex-col flex-wrap gap-2">
            {dailyTaskArr?.map((value, index) => {
              return (
                <TaskItems
                  key={index}
                  task={`${value}`}
                  onCheckboxChange={(val) => handleCheckboxChange(index, val)}
                />
              );
            })}
            {/* <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div> */}
          </div>
        </div>
        <div className="flex flex-col bg-[#F3D7CA] p-4 border-black border-2 col-span-2 rounded-xl">
          <h2 className="text-lg font-bold mb-2">Weekly Tasks</h2>
          <div className="task-list flex flex-col flex-wrap gap-2">
            {weeklyTaskArr?.map((value, index) => {
              return (
                <TaskItems
                  key={index}
                  task={`${value}`}
                  onCheckboxChange={(val) =>
                    handleCheckboxChangeWeekly(index, val)
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col bg- w-3/4 items-start">
          <div className="task-list flex bg-[#F5EEE6] flex-col flex-wrap gap-2 items-start">
            <div className="task p-4 border-black border-2 text-center bg-[#F3D7CA] rounded-xl gap-2 h-[175px] w-[140px]">
              <h2 className="text-xl font-bold mb-2 top-0 ">Daily Tasks</h2>
              <CircularProgress
                determinate
                value={50}
                size="lg"
                thickness={10}
                color="success"
              />
            </div>
            <div className="task p-4 border-black border-2 text-center bg-[#F3D7CA] rounded-xl gap-2 h-[175px] w-[140px]">
              <h2 className="text-xl font-bold mb-2 top-0 ">Weekly Tasks</h2>
              <CircularProgress
                determinate
                value={50}
                size="lg"
                thickness={10}
                color="success"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          sendData();
        }}
      >
        Submit
      </button>
      <div className="grid grid-cols-5 grid-flow-cols flex-col bg-[#F5EEE6] p-4 w-full">
        <div>
          <h2 className="text-lg font-bold mb-2 bg-[#F3D7CA]">Calendar</h2>
          <CalendarComp />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
