export default function ResumeWork({ works }) {
  if (works.length === 0) {
    return <></>;
  }
  return (
    <div>
      <h2>Works</h2>
      <ul>
        {works.map((work) => {
          return (
            <li>
              <h3>{work.companyName}</h3>
              <h4>{work.positionTitle}</h4>
              <p>{work.responsibilities}</p>
              <p>
                From {work.startDate} to {work.endDate}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
