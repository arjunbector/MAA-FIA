
import { useRef } from "react";

const Form = ({formData, setFormData}) => {
  const dobRef = useRef(null);
  const dodRef = useRef(null);
  const inputStyle =
    "text-lg p-2 rounded focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2";
  return (
    <form action="" className="m-16">
      <div className="flex flex-col items-center">
        <div className="flex gap-14 m-4">
          <input
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e)=>{setFormData({...formData, firstName: e.target.value})}}
            className="text-lg p-2 w-80 rounded focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
          <input
            placeholder="Last Name"
            className="text-lg p-2 w-80 rounded focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
        </div>
        <div className="flex gap-14 m-4">
          <div>
            <input
              placeholder="Phone Number"
              className="text-lg p-2 w-80 rounded focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
              type="text"
            />
          </div>
          <div className="flex justify-between gap-10">
            <input
              ref={dobRef}
              onFocus={() => (dobRef.current.type = "date")}
              placeholder="DOB"
              value={formData.dob}
              onChange={(e)=>{setFormData({...formData, dob: e.target.value})}}
              className="text-md p-2 w-36 rounded focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
              type="text"
            />
            <input
              placeholder="Blood Group"
              className="text-lg p-2 w-36 rounded focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-14 m-4">
          <input
            placeholder="Job Title"
            className="text-lg p-2 w-80 rounded focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
          <input
            placeholder="Industry"
            className="text-lg p-2 w-80 rounded focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
        </div>
        <div className="flex gap-14 m-4">
          <input
            placeholder="City"
            className="text-lg p-2 w-80 rounded focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
          <input
            placeholder="Country"
            className="text-lg p-2 w-80 rounded focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
        </div>
        <div className="flex gap-14 m-4">
          <input
            placeholder="Date of Delivery"
            ref={dodRef}
            onFocus={() => (dodRef.current.type = "date")}
            className="text-lg p-2 w-80 rounded focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
          <input
            placeholder="Country"
            className="text-lg p-2 w-80 rounded focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
