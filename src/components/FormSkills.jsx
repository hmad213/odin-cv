import { useState } from "react";
import backImg from "../assets/back.svg";
import editImg from "../assets/edit.svg";
import deleteImg from "../assets/delete.svg";

function SkillItem({ name, index, input, setInput, setMode, setEditingIndex }) {
  function onDelete(e) {
    console.log(e.currentTarget.parentNode.parentNode);
    let temp = input.skills.filter(
      (skill) =>
        skill !== e.currentTarget.parentNode.parentNode.firstChild.textContent,
    );
    setInput({ ...input, skills: temp });
  }

  return (
    <div className="item">
      <div>
        <h3>{name}</h3>
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
        <h2>Skills</h2>
        {input.skills.length === 0 ? (
          <p>No skills have been added</p>
        ) : (
          <ul>
            {input.skills.map((skill, index) => {
              return (
                <SkillItem
                  name={skill}
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
          Add Skill
        </button>
      </div>
    </div>
  );
}

function RenderAddSkill({ input, setInput, setMode }) {
  function onSubmit(e) {
    e.preventDefault();
    let temp = input.skills;
    temp.push(e.target.querySelector("input").value);
    setInput({ ...input, skills: temp });
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
            <label htmlFor="skill">Name</label>
            <input type="text" name="skill" id="skill" required />
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

function RenderEditSkill({ input, setInput, setMode, editingIndex }) {
  function onSubmit(e) {
    e.preventDefault();
    let temp = [...input.skills];
    temp[editingIndex] = e.target.querySelector("input").value;
    setInput({ ...input, skills: temp });
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
            <label htmlFor="skill">Name</label>
            <input
              type="text"
              name="skill"
              id="skill"
              required
              defaultValue={input.skills[editingIndex]}
            />
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default function SkillsForm({ input, setInput }) {
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
      <RenderAddSkill input={input} setInput={setInput} setMode={setMode} />
    );
  } else if (mode == "edit") {
    return (
      <RenderEditSkill
        editingIndex={editingIndex}
        input={input}
        setMode={setMode}
        setInput={setInput}
      />
    );
  }
}
