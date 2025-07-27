import blankPfp from "../assets/blank.jpg";

export default function General({ name, email, contact, address }) {
  return (
    <>
      <img src={blankPfp}></img>
      <h1>{name ? name : "Full Name"}</h1>
      <p>{email ? email : "example@email.com"}</p>
      <p>{contact ? contact : "0123456789"}</p>
      <p>{address ? address : "123 Street, ABC City"}</p>
    </>
  );
}
