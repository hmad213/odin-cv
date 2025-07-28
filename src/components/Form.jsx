import EducationForm from "./FormEducation";
import GeneralForm from "./FormGeneral";
import JobForm from "./FormJob";
import SkillsForm from "./FormSkills";

export default function Form({ input, setInput, activeForm }) {
  switch (activeForm) {
    case "general":
      return <GeneralForm input={input} setInput={setInput} />;
    case "skills":
      return <SkillsForm input={input} setInput={setInput} />;
    case "job":
      return <JobForm input={input} setInput={setInput} />;
    case "education":
      return <EducationForm input={input} setInput={setInput} />;
    default:
      return <></>;
  }
}
