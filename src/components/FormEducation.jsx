import { useState } from "react";

function EducationItem({
  education,
  index,
  input,
  setInput,
  setMode,
  setEditingIndex,
}) {
  function onDelete() {
    let temp = input.education.filter((education, i) => i !== index);
    setInput({ ...input, education: temp });
  }

  return (
    <div>
      <h3>{education.schoolName}</h3>
      <p>{education.title}</p>
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
      <h2>Education</h2>
      <ul>
        {input.education.map((entity, index) => {
          return (
            <EducationItem
              education={entity}
              index={index}
              input={input}
              setInput={setInput}
              setMode={setMode}
              setEditingIndex={setEditingIndex}
            />
          );
        })}
      </ul>
      <button onClick={() => setMode("add")}>Add Education</button>
    </div>
  );
}

function RenderAddEducation({ input, setInput, setMode }) {
  function onSubmit(e) {
    let form = e.target;
    let name = form.querySelector("#schoolName").value;
    let title = form.querySelector("#titleOfStudy").value;
    let startDate = form.querySelector("#startDate").value;
    let endDate = form.querySelector("#endDate").value;
    let temp = [...input.education];
    temp.push({
      schoolName: name,
      titleOfStudy: title,
      startDate: startDate,
      endDate: endDate,
    });
    setInput({ ...input, education: temp });
    setMode("form");
  }

  return (
    <div>
      <button onClick={() => setMode("form")}>Back</button>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="schoolName">School Name</label>
          <input type="text" name="schoolName" id="schoolName" required />
        </div>
        <div>
          <label htmlFor="titleOfStudy">Title</label>
          <input type="text" name="titleOfStudy" id="titleOfStudy" required />
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

function RenderEditEducation({ input, setInput, setMode, editingIndex }) {
  function onSubmit(e) {
    let form = e.target;
    let name = form.querySelector("#schoolName").value;
    let title = form.querySelector("#titleOfStudy").value;
    let startDate = form.querySelector("#startDate").value;
    let endDate = form.querySelector("#endDate").value;
    let temp = [...input.education];
    temp[editingIndex] = {
      schoolName: name,
      titleOfStudy: title,
      startDate: startDate,
      endDate: endDate,
    };
    setInput({ ...input, education: temp });
    setMode("form");
  }

  let education = input.education[editingIndex];

  return (
    <div>
      <button onClick={() => setMode("form")}>Back</button>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="schoolName">School Name</label>
          <input
            type="text"
            name="schoolName"
            id="schoolName"
            defaultValue={education.schoolName}
            required
          />
        </div>
        <div>
          <label htmlFor="titleOfStudy">Position Title</label>
          <input
            type="text"
            name="titleOfStudy"
            id="titleOfStudy"
            defaultValue={education.titleOfStudy}
            required
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            defaultValue={education.startDate}
            required
          />
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            defaultValue={education.endDate}
            required
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default function EducationForm({ input, setInput }) {
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
    return (
      <RenderAddEducation input={input} setInput={setInput} setMode={setMode} />
    );
  } else if (mode == "edit") {
    return (
      <RenderEditEducation
        editingIndex={editingIndex}
        input={input}
        setMode={setMode}
        setInput={setInput}
      />
    );
  }
}
