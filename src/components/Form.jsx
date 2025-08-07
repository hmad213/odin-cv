import EducationForm from "./FormEducation";
import GeneralForm from "./FormGeneral";
import WorkForm from "./FormWork";
import SkillsForm from "./FormSkills";
import "../styles/Form.css";

export default function Form({ input, setInput, activeForm }) {
  switch (activeForm) {
    case "general":
      return <GeneralForm input={input} setInput={setInput} />;
    case "skills":
      return <SkillsForm input={input} setInput={setInput} />;
    case "work":
      return <WorkForm input={input} setInput={setInput} />;
    case "education":
      return <EducationForm input={input} setInput={setInput} />;
    default:
      return <></>;
  }
}
