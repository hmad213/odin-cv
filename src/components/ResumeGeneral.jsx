import blankPfp from "../assets/blank.jpg";

export default function General({ name, email, contact, address }) {
  return (
    <>
      <img src={blankPfp}></img>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{contact}</p>
      <p>{address}</p>
    </>
  );
}
