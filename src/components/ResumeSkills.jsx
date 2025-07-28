export default function ResumeSkills({ skills }) {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
