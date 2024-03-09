
import { useRef } from "react";

const Form = ({formData, setFormData}) => {
  const dobRef = useRef(null);
  const dodRef = useRef(null);
  return (
    <form action="" className="m-16">
      <div className="flex flex-col items-center">
        <div className="flex gap-14 m-4">
          <input
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e)=>{setFormData({...formData, firstName: e.target.value})}}
            className="text-lg p-2 w-80 rounded-lg focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
          <input
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e)=>{setFormData({...formData, lastName: e.target.value})}}
            className="text-lg p-2 w-80 rounded-lg focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
        </div>
        <div className="flex gap-14 m-4">
          <div>
            <input
              placeholder="Phone Number"
              value={formData.phoneNo}
              onChange={(e)=>{setFormData({...formData, phoneNo: e.target.value})}}
              className="text-lg p-2 w-80 rounded-lg focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
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
              className="text-md p-2 w-36 rounded-lg focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
              type="text"
            />
            <input
              placeholder="Blood Group"
              value={formData.bloodGroup}
              onChange={(e)=>{setFormData({...formData, bloodGroup: e.target.value})}}
              className="text-lg p-2 w-36 rounded-lg focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-14 m-4">
          <input
            placeholder="Job Title"
            value={formData.job}
            onChange={(e)=>{setFormData({...formData, job: e.target.value})}}
            className="text-lg p-2 w-80 rounded-lg focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
          <input
            placeholder="Industry"
            value={formData.industry}
            onChange={(e)=>{setFormData({...formData, industry: e.target.value})}}
            className="text-lg p-2 w-80 rounded-lg focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
        </div>
        <div className="flex gap-14 m-4">
          <input
            placeholder="City"
            value={formData.city}
            onChange={(e)=>{setFormData({...formData, city: e.target.value})}}
            className="text-lg p-2 w-80 rounded-lg focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
          <input
            placeholder="Country"
            value={formData.country}
            onChange={(e)=>{setFormData({...formData, country: e.target.value})}}
            className="text-lg p-2 w-80 rounded-lg focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
        </div>
        <div className="flex gap-14 m-4">
          <input
            placeholder="Date of Child Delivery"
            value={formData.dod}
            onChange={(e)=>{setFormData({...formData, dod: e.target.value})}}
            ref={dodRef}
            onFocus={() => (dodRef.current.type = "date")}
            className="text-lg p-2 w-80 rounded-lg focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
          <input
            placeholder="Country"
            className="text-lg p-2 w-80 -lg focus:drop-shadow-xl focus:outline-none bg-[#FFF8E3] border-[#F3D7CA] border-2"
            type="text"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
