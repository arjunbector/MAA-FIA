import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard bg-[#F5EEE6] text-center">
      <div className="py-4 px-8 text-black text-center font-bold">
        <h1>DASHBOARD</h1>
      </div>
      <div className="grid grid-cols-5 grid-flow-cols gap-4 mx-10">
        <div className="flex flex-col bg-[#F3D7CA] p-4 border-black border-2 col-span-2 rounded-xl">
          <h2 className="text-lg font-bold mb-2">Daily Tasks</h2>
          <div className="task-list grid grid-cols-2 grid-flow-row flex-col flex-wrap gap-2">
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
            <div className="task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center">task 1</div>
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
        <div className="flex flex-col bg-[#F5EEE6] p-4 w-full">
          <div className="task-list flex flex-col flex-wrap gap-2">
            <div className="task p-2 border-black border-2 text-center bg-[#F3D7CA] rounded-xl">Daily Progress</div>
            <div className="task p-2 border-black border-2 text-center bg-[#F3D7CA] rounded-xl">Weekly Progress</div>
          </div> 
        </div>
        
      </div>
      <div className="flex flex-col bg-[#F5EEE6] p-4">
          <h2 className="text-lg font-bold mb-2">Calendar</h2>
          
        </div>
    </div>
  );
};

export default Dashboard;
