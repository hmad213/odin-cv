import { useState } from "react";

function JobItem({
  jobDetails,
  index,
  input,
  setInput,
  setMode,
  setEditingIndex,
}) {
  function onDelete() {
    let temp = input.jobs.filter((skill, i) => i !== index);
    setInput({ ...input, jobs: temp });
  }

  return (
    <div>
      <h3>{jobDetails.companyName}</h3>
      <p>{jobDetails.positionTitle}</p>
      <button
        onClick={() => {
          setMode("edit");
          setEditingIndex(index);
        }}
      >
        Edit
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

function RenderForm({ input, setInput, setMode, setEditingIndex }) {
  return (
    <div>
      <h2>Job</h2>
      <ul>
        {input.jobs.map((job, index) => {
          return (
            <JobItem
              jobDetails={job}
              index={index}
              input={input}
              setInput={setInput}
              setMode={setMode}
              setEditingIndex={setEditingIndex}
            />
          );
        })}
      </ul>
      <button onClick={() => setMode("add")}>Add Job</button>
    </div>
  );
}

function RenderAddJob({ input, setInput, setMode }) {
  function onSubmit(e) {
    let form = e.target;
    let name = form.querySelector("#companyName").value;
    let title = form.querySelector("#positionTitle").value;
    let responsibilities = form.querySelector("#responsibilities").value;
    let startDate = form.querySelector("#startDate").value;
    let endDate = form.querySelector("#endDate").value;
    let temp = [...input.jobs];
    temp.push({
      companyName: name,
      positionTitle: title,
      responsibilities: responsibilities,
      startDate: startDate,
      endDate: endDate,
    });
    setInput({ ...input, jobs: temp });
    console.log(input.jobs);
    setMode("form");
  }

  return (
    <div>
      <button onClick={() => setMode("form")}>Back</button>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="companyName">Company Name</label>
          <input type="text" name="companyName" id="companyName" required />
        </div>
        <div>
          <label htmlFor="positionTitle">Position Title</label>
          <input type="text" name="positionTitle" id="positionTitle" required />
        </div>
        <div>
          <label htmlFor="responsibilities">Responsibilities</label>
          <textarea
            name="responsibilities"
            id="responsibilities"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" id="startDate" required />
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" id="endDate" required />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

function RenderEditJob({ input, setInput, setMode, editingIndex }) {
  function onSubmit(e) {
    let form = e.target;
    let name = form.querySelector("#companyName").value;
    let title = form.querySelector("#positionTitle").value;
    let responsibilities = form.querySelector("#responsibilities").value;
    let startDate = form.querySelector("#startDate").value;
    let endDate = form.querySelector("#endDate").value;
    let temp = [...input.jobs];
    temp[editingIndex] = {
      companyName: name,
      positionTitle: title,
      responsibilities: responsibilities,
      startDate: startDate,
      endDate: endDate,
    };
    setInput({ ...input, jobs: temp });
    setMode("form");
  }

  let job = input.jobs[editingIndex];

  return (
    <div>
      <button onClick={() => setMode("form")}>Back</button>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            defaultValue={job.companyName}
            required
          />
        </div>
        <div>
          <label htmlFor="positionTitle">Position Title</label>
          <input
            type="text"
            name="positionTitle"
            id="positionTitle"
            defaultValue={job.positionTitle}
            required
          />
        </div>
        <div>
          <label htmlFor="responsibilities">Responsibilities</label>
          <textarea
            name="responsibilities"
            id="responsibilities"
            defaultValue={job.responsibilities}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            defaultValue={job.startDate}
            required
          />
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            defaultValue={job.endDate}
            required
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default function JobForm({ input, setInput }) {
  let [mode, setMode] = useState("form");
  let [editingIndex, setEditingIndex] = useState(null);

  if (mode == "form") {
    return (
      <RenderForm
        input={input}
        setInput={setInput}
        setMode={setMode}
        setEditingIndex={setEditingIndex}
      />
    );
  } else if (mode == "add") {
    return <RenderAddJob input={input} setInput={setInput} setMode={setMode} />;
  } else if (mode == "edit") {
    return (
      <RenderEditJob
        editingIndex={editingIndex}
        input={input}
        setMode={setMode}
        setInput={setInput}
      />
    );
  }
}
