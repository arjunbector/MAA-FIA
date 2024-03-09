import { useState } from "react";

export default function TaskItems({ tooltiptxt }) {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
    setIsChecked2(false); // Uncheck the other checkbox
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
    setIsChecked1(false); // Uncheck the other checkbox
  };

  const handleDivClick = () => {
    if (!isChecked1 && !isChecked2) {
      setShowTooltip(true);
    }
  };

  return (
    <div className={`task p-2 bg-[#F5EEE6] border rounded-md border-gray-200 text-center relative`} onClick={handleDivClick}>
      <input type="checkbox" checked={isChecked1} onChange={handleCheckboxChange1} className="absolute left-0" />
      <input type="checkbox" checked={isChecked2} onChange={handleCheckboxChange2} className="absolute right-0" />
      {showTooltip && <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 shadow-md p-2">show helping tasks</div>}
      task 1
    </div>
  );
}
