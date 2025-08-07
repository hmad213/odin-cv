export default function GeneralForm({ input, setInput }) {
  function onChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  return (
    <div className="form">
      <div>
        <h2>General</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={onChange}
              value={input["name"]}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={onChange}
              value={input["email"]}
            />
          </div>

          <div>
            <label htmlFor="contact">Contact:</label>
            <input
              type="tel"
              name="contact"
              id="contact"
              onChange={onChange}
              value={input["contact"]}
            />
          </div>

          <div>
            <label htmlFor="address">Address:</label>
            <textarea
              name="address"
              id="address"
              onChange={onChange}
              value={input["address"]}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
