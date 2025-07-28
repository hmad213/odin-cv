import General from "./ResumeGeneral";
import Skills from "./ResumeSkills";
import "../styles/Resume.css";
import Job from "./ResumeJob";

export default function Resume({ input }) {
  return (
    <div>
      <General
        name={input.name}
        email={input.email}
        contact={input.contact}
        address={input.address}
      />
      <Skills skills={input.skills} />
      <Job jobs={input.jobs} />
    </div>
  );
}
