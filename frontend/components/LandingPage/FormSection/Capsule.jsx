const Capsule = ({ text, selected, healthDataToSend, setHealthDataToSend }) => {
    const handleClick = ()=>{
        if(healthDataToSend.includes(text)){
            setHealthDataToSend(healthDataToSend.filter((complication)=>complication!==text))
        }
        else{
            setHealthDataToSend([...healthDataToSend, text])
        
        }
    }
  return (
    <div
      className={`text-sm py-1 px-3 ${
        selected ? "bg-[#FFD3BF]" : "bg-[#F8EAE4]"
      } rounded-md w-fit cursor-pointer`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default Capsule;
