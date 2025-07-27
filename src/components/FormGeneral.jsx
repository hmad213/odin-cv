export default function RenderGeneralForm({ input, setInput }) {
  function onChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <h2>General Information</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={onChange} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={onChange} />
        </div>

        <div>
          <label htmlFor="contact">Contact</label>
          <input type="tel" name="contact" id="contact" onChange={onChange} />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="textarea"
            name="address"
            id="address"
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
}
