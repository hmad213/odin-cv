import "../styles/Sidebar.css";
import generalImg from "../assets/general.svg";
import workImg from "../assets/work.svg";
import skillsImg from "../assets/skills.svg";
import educationImg from "../assets/education.svg";

export default function Sidebar({ activeForm, setActiveForm }) {
  function onClick(event) {
    if (
      activeForm ===
      event.currentTarget.querySelector("span").textContent.toLowerCase()
    ) {
      setActiveForm("");
    } else {
      setActiveForm(event.currentTarget.textContent.toLowerCase());
    }
  }

  return (
    <div className="sidebar">
      <button
        onClick={onClick}
        className={activeForm === "general" ? "selectedForm" : ""}
      >
        <img src={generalImg} alt="" />
        <span>General</span>
      </button>
      <button
        onClick={onClick}
        className={activeForm === "skills" ? "selectedForm" : ""}
      >
        <img src={skillsImg} alt="" />
        <span>Skills</span>
      </button>
      <button
        onClick={onClick}
        className={activeForm === "work" ? "selectedForm" : ""}
      >
        <img src={workImg} alt="" />
        <span>Work</span>
      </button>
      <button
        onClick={onClick}
        className={activeForm === "education" ? "selectedForm" : ""}
      >
        <img src={educationImg} alt="" />
        <span>Education</span>
      </button>
    </div>
  );
}
