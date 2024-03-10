import React from "react";
import CircularProgress from '@mui/joy/CircularProgress';
import BarChart from "./bargraph";
import CalendarComp from "./calendar";
import { useState } from "react";
import TaskItems from "./task";
// import { BarGraph } from './bargraph'



const Dashboard = () => {

  // const [isChecked1, setIsChecked1] = useState(false);
  // const [isChecked2, setIsChecked2] = useState(false);
  const [constArr, setConstArr] = useState(Array(6).fill(0));
  const [tasks, setTasks] = useState(Array(6).fill("Task").map((task, index) => `${task} ${index + 1}`));
  // const handleCheckboxChange1 = () => {
  //   setIsChecked1(true);
  //   setIsChecked2(false); // Uncheck the other checkbox
  // };
  const handleCheckboxChange = (index, value) => {
    const newArr = [...constArr]; // Create a copy of the tasks array
    newArr[index]=value; // Remove the task at the specified index
    setConstArr(newArr); // Update the state with the new tasks array
  };
  // const handleCheckboxChange2 = () => {
  //   setIsChecked2(true);
  //   setIsChecked1(false); // Uncheck the other checkbox
  // };
  console.log(constArr)
  const CheckArr=[]


    return (
    <div className="bg-[#F5EEE6] text-center gap-6 relative">
      <div className="py-4 text-black text-center font-bold text-5xl">
        <h1>DASHBOARD</h1>
      </div>
      <div className="relative grid grid-cols-5 grid-flow-cols gap-4 m-10">
        <div className="flex flex-col bg-[#F3D7CA] p-4 border-black border-2 col-span-2 rounded-xl">
          <h2 className="text-lg font-bold mb-2">Daily Tasks</h2>
          <div className="task-list grid grid-cols-2 grid-flow-row flex-col flex-wrap gap-2">
          
    {/* <TaskItems/>
    <TaskItems/>
    <TaskItems/>
    <TaskItems/>
    <TaskItems/>
    <TaskItems/> */}
    {/* {constArr.map((_, index) => (
              <TaskItems key={index} task={`Task ${index + 1}`} onCheckboxChange={handleCheckboxChange} />
            ))} */}
            {tasks.map((value, index) => (
              <TaskItems key={index} task={`Task ${index + 1}`} onCheckboxChange={(val) => handleCheckboxChange(index,val)} />
            ))}
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
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>

          </div> 
        </div>
        <div className="flex flex-col bg- w-3/4 items-start">
          <div className="task-list flex bg-[#F5EEE6] flex-col flex-wrap gap-2 items-start">
            <div className="task p-4 border-black border-2 text-center bg-[#F3D7CA] rounded-xl gap-2 h-[175px] w-[140px]">
                <h2 className="text-xl font-bold mb-2 top-0 ">Daily Tasks</h2>
                <CircularProgress determinate value={50} size="lg" thickness={10} color="success"/>
            </div>
            <div className="task p-4 border-black border-2 text-center bg-[#F3D7CA] rounded-xl gap-2 h-[175px] w-[140px]">
                <h2 className="text-xl font-bold mb-2 top-0 ">Weekly Tasks</h2>
                <CircularProgress determinate value={50} size="lg" thickness={10} color="success"/>
            </div>
          </div> 
        </div>
        
      </div>
      <div className="grid grid-cols-5 grid-flow-cols flex-col bg-[#F5EEE6] p-4 w-full">
        <div>
            <h2 className="text-lg font-bold mb-2 bg-[#F3D7CA] w-full col-span-3">Calendar</h2>
            {/* <BarChart/> */}
        </div>
        <div>
            <h2 className="text-lg font-bold mb-2 bg-[#F3D7CA]">Calendar</h2>
            <CalendarComp/>
        </div>
          
          
        </div>
    </div>
  );
};

export default Dashboard;
