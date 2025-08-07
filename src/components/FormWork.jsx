import { useState } from "react";
import backImg from "../assets/back.svg";
import editImg from "../assets/edit.svg";
import deleteImg from "../assets/delete.svg";

function WorkItem({
  workDetails,
  index,
  input,
  setInput,
  setMode,
  setEditingIndex,
}) {
  function onDelete() {
    let temp = input.works.filter((skill, i) => i !== index);
    setInput({ ...input, works: temp });
  }

  return (
    <div className="item">
      <div>
        <h3>{workDetails.companyName}</h3>
        <p>{workDetails.positionTitle}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setMode("edit");
            setEditingIndex(index);
          }}
        >
          <img src={editImg} alt="" />
        </button>
        <button onClick={onDelete}>
          <img src={deleteImg} alt="" />
        </button>
      </div>
    </div>
  );
}

function RenderForm({ input, setInput, setMode, setEditingIndex }) {
  return (
    <div className="form">
      <div>
        <h2>Work</h2>
        {input.works.length === 0 ? (
          <p>No work experience has been added</p>
        ) : (
          <ul>
            {input.works.map((work, index) => {
              return (
                <WorkItem
                  workDetails={work}
                  index={index}
                  input={input}
                  setInput={setInput}
                  setMode={setMode}
                  setEditingIndex={setEditingIndex}
                />
              );
            })}
          </ul>
        )}
        <button onClick={() => setMode("add")} className="add">
          Add Work
        </button>
      </div>
    </div>
  );
}

function RenderAddWork({ input, setInput, setMode }) {
  function onSubmit(e) {
    let form = e.target;
    let name = form.querySelector("#companyName").value;
    let title = form.querySelector("#positionTitle").value;
    let responsibilities = form.querySelector("#responsibilities").value;
    let startDate = form.querySelector("#startDate").value;
    let endDate = form.querySelector("#endDate").value;
    let temp = [...input.works];
    temp.push({
      companyName: name,
      positionTitle: title,
      responsibilities: responsibilities,
      startDate: startDate,
      endDate: endDate,
    });
    setInput({ ...input, works: temp });
    console.log(input.works);
    setMode("form");
  }

  return (
    <div className="form">
      <div>
        <button onClick={() => setMode("form")} className="back">
          <img src={backImg} />
          <span>Back</span>
        </button>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" name="companyName" id="companyName" required />
          </div>
          <div>
            <label htmlFor="positionTitle">Position Title:</label>
            <input
              type="text"
              name="positionTitle"
              id="positionTitle"
              required
            />
          </div>
          <div>
            <label htmlFor="responsibilities">Responsibilities:</label>
            <textarea
              name="responsibilities"
              id="responsibilities"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" name="startDate" id="startDate" required />
          </div>
          <div>
            <label htmlFor="endDate">End Date:</label>
            <input type="date" name="endDate" id="endDate" required />
          </div>

          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

function RenderEditWork({ input, setInput, setMode, editingIndex }) {
  function onSubmit(e) {
    let form = e.target;
    let name = form.querySelector("#companyName").value;
    let title = form.querySelector("#positionTitle").value;
    let responsibilities = form.querySelector("#responsibilities").value;
    let startDate = form.querySelector("#startDate").value;
    let endDate = form.querySelector("#endDate").value;
    let temp = [...input.works];
    temp[editingIndex] = {
      companyName: name,
      positionTitle: title,
      responsibilities: responsibilities,
      startDate: startDate,
      endDate: endDate,
    };
    setInput({ ...input, works: temp });
    setMode("form");
  }

  let work = input.works[editingIndex];

  return (
    <div className="form">
      <div>
        <button onClick={() => setMode("form")} className="back">
          <img src={backImg} />
          <span>Back</span>
        </button>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              defaultValue={work.companyName}
              required
            />
          </div>
          <div>
            <label htmlFor="positionTitle">Position Title:</label>
            <input
              type="text"
              name="positionTitle"
              id="positionTitle"
              defaultValue={work.positionTitle}
              required
            />
          </div>
          <div>
            <label htmlFor="responsibilities">Responsibilities:</label>
            <textarea
              name="responsibilities"
              id="responsibilities"
              defaultValue={work.responsibilities}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              defaultValue={work.startDate}
              required
            />
          </div>
          <div>
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              defaultValue={work.endDate}
              required
            />
          </div>

          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default function WorkForm({ input, setInput }) {
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
      <RenderAddWork input={input} setInput={setInput} setMode={setMode} />
    );
  } else if (mode == "edit") {
    return (
      <RenderEditWork
        editingIndex={editingIndex}
        input={input}
        setMode={setMode}
        setInput={setInput}
      />
    );
  }
}
