import Image from "next/image";
import leftVector from "../../../public/landingPage/form/leftVector.svg";
import rightVector from "../../../public/landingPage/form/rightVector.svg";
import bottomVector from "../../../public/landingPage/form/bottomVector.svg";
import Form from "./Form";
import { useState } from "react";

const FormSection = () => {
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

  const healthCompArr = [
    {
      id: 1,
      name: "Postpartum Depression",
      selected: false,
    },
    {
      id: 2,
      name: "Anemia",
      selected: false,
    },
    {
      id: 3,
      name: "Chronic Pain",
      selected: false,
    },
    {
      id: 4,
      name: "Fatigue",
      selected: false,
    },
    {
      id: 5,
      name: "Breastfeeding Issues",
      selected: false,
    },
    {
      id: 6,
      name: "Postpartum Hormonal Changes",
      selected: false,
    },
    {
      id: 7,
      name: "Urinary Incontinence",
      selected: false,
    },
    {
      id: 8,
      name: "Emotional Adjustment",
      selected: false,
    },
    {
      id: 9,
      name: "Sleep Disorder",
      selected: false,
    },
    {
      id: 10,
      name: "Postpartum Weight Retention",
      selected: false,
    },
  ];
  

  console.log(formData);
  return (
    <section className="min-h-screen bg-[#F5EEE6] relative overflow-x-hidden flex justify-center items-center">
      <div className="absolute top-40 left-[-1vw]">
        <Image className="h-56" src={leftVector} />
      </div>
      <div className="absolute right-[-1vw] top-2">
        <Image className="h-56" src={rightVector} />
      </div>
      <div className="absolute bottom-0 left-[30vw]">
        <Image className="w-96" src={bottomVector} />
      </div>
      <div className="w-[90vw] bg-[#f3d7ca6c] h-screen backdrop-blur-[3px] m-10">
        <Form formData={formData} setFormData={setFormData} />
      </div>
    </section>
  );
};

export default FormSection;
