import { format, parseISO } from "date-fns";

export default function ResumeWork({ works }) {
  if (works.length === 0) {
    return <></>;
  }
  return (
    <div className="work">
      <h2>Work Experience</h2>
      <ul>
        {works.map((work, index) => {
          const formattedStart = format(parseISO(work.startDate), "MMM yyyy");
          const formattedEnd = format(parseISO(work.endDate), "MMM yyyy");
          return (
            <li key={index}>
              <div>
                <h3>{work.companyName}</h3>
                <h4>{work.positionTitle}</h4>
                <p>
                  {formattedStart} --- {formattedEnd}
                </p>
              </div>
              <p>{work.responsibilities}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
