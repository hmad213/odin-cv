import GeneralForm from "./FormGeneral";

export default function Form({ input, setInput, activeForm }) {
  switch (activeForm) {
    case "general":
      return <GeneralForm input={input} setInput={setInput} />;
    default:
      return <></>;
  }
}
