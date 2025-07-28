export default function ResumeJob({ jobs }) {
  return (
    <div>
      <h2>Jobs</h2>
      <ul>
        {jobs.map((job) => {
          return (
            <li>
              <h3>{job.companyName}</h3>
              <h4>{job.positionTitle}</h4>
              <p>{job.responsibilities}</p>
              <p>
                From {job.startDate} to {job.endDate}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
