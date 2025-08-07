import { useState } from "react";
import Resume from "./components/Resume";
import Form from "./components/form";
import Sidebar from "./components/Sidebar";

export default function App() {
  let [input, setInput] = useState({
    name: "Muhammad Hammad",
    contact: "123 456 7890",
    email: "muhammadhammadpak50@gmail.com",
    address: "123 avenue, ABC street",
    skills: [],
    works: [],
    education: [],
  });
  let [activeForm, setActiveForm] = useState("");

  return (
    <div className="body">
      <Sidebar activeForm={activeForm} setActiveForm={setActiveForm}></Sidebar>
      <Form input={input} setInput={setInput} activeForm={activeForm} />
      <Resume input={input} />
    </div>
  );
}
