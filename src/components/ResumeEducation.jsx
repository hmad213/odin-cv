import { format, parseISO } from "date-fns";

export default function ResumeEducation({ education }) {
  if (education.length === 0) {
    return <></>;
  }
  return (
    <div className="education">
      <h2>Education</h2>
      <ul>
        {education.map((school, index) => {
          const formattedStart = format(parseISO(school.startDate), "MMM yyyy");
          const formattedEnd = format(parseISO(school.endDate), "MMM yyyy");
          return (
            <li key={index}>
              <h3>{school.schoolName}</h3>
              <h4>{school.titleOfStudy}</h4>
              <p>
                {formattedStart} --- {formattedEnd}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
