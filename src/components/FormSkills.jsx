import { useState } from "react";

function SkillItem({ name, index, input, setInput, setMode, setEditingIndex }) {
  function onDelete(e) {
    console.log(e.target.previousSibling.previousSibling);
    let temp = input.skills.filter(
      (skill) => skill !== e.target.previousSibling.previousSibling.textContent,
    );
    setInput({ ...input, skills: temp });
  }

  return (
    <div>
      <h3>{name}</h3>
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
      <h2>Skills</h2>
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
      <button onClick={() => setMode("add")}>Add Skill</button>
    </div>
  );
}

function RenderAddSkill({ input, setInput, setMode }) {
  function onClick(e) {
    let temp = input.skills;
    temp.push(e.target.previousSibling.value);
    setInput({ ...input, skills: temp });
    setMode("form");
  }

  return (
    <div>
      <button onClick={() => setMode("form")}>Back</button>
      <form>
        <label htmlFor="skill">Name</label>
        <input type="text" name="skill" id="skill" />
        <button onClick={onClick}>Submit</button>
      </form>
    </div>
  );
}

function RenderEditSkill({ input, setInput, setMode, editingIndex }) {
  function onClick(e) {
    let temp = [...input.skills];
    temp[editingIndex] = e.target.previousSibling.value;
    setInput({ ...input, skills: temp });
    setMode("form");
  }

  return (
    <div>
      <button onClick={() => setMode("form")}>Back</button>
      <form>
        <label htmlFor="skill">Name</label>
        <input type="text" name="skill" id="skill" />
        <button onClick={onClick}>Submit</button>
      </form>
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
