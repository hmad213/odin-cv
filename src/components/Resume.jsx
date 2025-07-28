import General from "./ResumeGeneral";
import Skills from "./ResumeSkills";
import "../styles/Resume.css";

export default function Resume({ input }) {
  return (
    <div>
      <General name={input.name} email={input.email} contact={input.contact} address={input.address} />
      <Skills skills={input.skills}/>
    </div>
  );
}
