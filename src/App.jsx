import { useState } from "react";
import Resume from "./components/Resume";
import Form from "./components/form";
import Sidebar from "./components/Sidebar";

export default function App() {
  let [input, setInput] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    skills: ["Sewing", "Javascript", "Python"]
  });
  let [activeForm, setActiveForm] = useState("");

  return (
    <div className="body">
      <Sidebar activeForm={activeForm} setActiveForm={setActiveForm}></Sidebar>
      <Form input={input} setInput={setInput} activeForm={activeForm} />
      <Resume
        input={input}
      />
    </div>
  );
}
