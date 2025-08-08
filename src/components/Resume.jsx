import General from "./ResumeGeneral";
import Skills from "./ResumeSkills";
import "../styles/Resume.css";
import Work from "./ResumeWork";
import Education from "./ResumeEducation";

export default function Resume({ input }) {
  return (
    <div className="resume">
      <General
        name={input.name}
        email={input.email}
        contact={input.contact}
        address={input.address}
      />
      <Skills skills={input.skills} />
      <Work works={input.works} />
      <Education education={input.education} />
    </div>
  );
}
