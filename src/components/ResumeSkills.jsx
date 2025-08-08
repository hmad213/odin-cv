export default function ResumeSkills({ skills }) {
  if (skills.length === 0) {
    return <></>;
  }
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
