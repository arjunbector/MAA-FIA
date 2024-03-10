import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';

export default function TaskItems({ tooltiptxt , task}) {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
    setIsChecked2(false); // Uncheck the other checkbox
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
    setIsChecked1(false); // Uncheck the other checkbox
  };

  

  return (
    <Tooltip title="work">
        <div className={`task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center ${isChecked1 ? 'bg-red-500' : ''} ${isChecked2 ? 'bg-green-500' : ''}`}>
      <input type="checkbox" checked={isChecked1} onChange={handleCheckboxChange1} className="relative left-0" />
      <input type="checkbox" checked={isChecked2} onChange={handleCheckboxChange2} className="relative right-0" />
       
      task 1
    </div>
    </Tooltip>
   
  );
}
