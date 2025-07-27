import "../styles/Sidebar.css"

export default function Sidebar({ activeForm, setActiveForm }) {
  function onClick(event) {
    if (activeForm === event.target.textContent.toLowerCase()) {
      setActiveForm("");
    } else {
      setActiveForm(event.target.textContent.toLowerCase());
    }
  }

  return (
    <div className="sidebar">
      <button onClick={onClick}>General</button>
      <button onClick={onClick}>Skills</button>
      <button onClick={onClick}>Job</button>
      <button onClick={onClick}>Education</button>
    </div>
  );
}
