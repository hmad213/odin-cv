export default function ResumeEducation({ education }) {
  if (education.length === 0) {
    return <></>;
  }
  return (
    <div className="education">
      <h2>Education</h2>
      <ul>
        {education.map((school) => {
          return (
            <li>
              <h3>{school.schoolName}</h3>
              <h4>{school.titleOfStudy}</h4>
              <p>
                From {school.startDate} to {school.endDate}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
