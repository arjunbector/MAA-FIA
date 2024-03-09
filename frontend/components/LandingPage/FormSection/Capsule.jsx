const Capsule = ({
  text,
  healthDataToSend,
  setHealthDataToSend,
  healthData,
}) => {
  const handleClick = () => {
    if (healthDataToSend.includes(text)) {
      setHealthDataToSend(
        healthDataToSend.filter((complication) => complication !== text)
      );
    } else {
      setHealthDataToSend([...healthDataToSend, text]);
    }
  };
  const selected = healthDataToSend.includes(text);
  return (
    <div
      className={`text-sm py-1 px-3 ${
        selected ? "bg-[#FFD3BF]" : "bg-[#F8EAE4]"
      } rounded-md w-fit hover:cursor-pointer`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default Capsule;
