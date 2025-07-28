export default function EducationForm({ input, setInput }) {
  function onChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <h2>Education</h2>
    </div>
  );
}
