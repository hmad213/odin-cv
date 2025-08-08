import { useState } from "react";
import Resume from "./components/Resume";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function App() {
  let [input, setInput] = useState({
    name: "Muhammad Hammad",
    contact: "123 456 7890",
    email: "muhammadhammadpak50@gmail.com",
    address: "123 avenue, ABC street",
    skills: ["Python", "C++", "JavaScript"],
    works: [
      {
        companyName: "ABC Coorporation",
        positionTitle: "Software Engineer",
        resbonsibilities:
          "designs, develops, tests, and maintains software systems to solve problems and meet user needs efficiently and reliably.",
        startDate: "2025-09-08",
        endDate: "2025-10-09",
      },
      {
        companyName: "Hammad Limited",
        positionTitle: "Owner",
        resbonsibilities:
          "Incharge of the coorporation and manages all internal affairs.",
        startDate: "2025-08-08",
        endDate: "2025-08-09",
      },
    ],
    education: [{
      "schoolName": "ABC School",
      "titleOfStudy": "Student",
      "startDate": "2010-08-01",
      "endDate": "2022-08-01",
    },{
      "schoolName": "XYZ College",
      "titleOfStudy": "High School Student",
      "startDate": "2022-08-01",
      "endDate": "2024-08-01",
    },{
      "schoolName": "HEF University",
      "titleOfStudy": "Bachelor's in Computer Science",
      "startDate": "2024-08-01",
      "endDate": "2028-08-01",
    }],
  });
  let [activeForm, setActiveForm] = useState("");

  return (
    <>
      <Header />
      <div className="body">
        <Sidebar
          activeForm={activeForm}
          setActiveForm={setActiveForm}
        ></Sidebar>
        <Form input={input} setInput={setInput} activeForm={activeForm} />
        <Resume input={input} />
      </div>
    </>
  );
}
