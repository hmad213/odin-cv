import blankPfp from "../assets/blank.jpg";

export default function General({ name, email, contact, address }) {
  return (
    <div className="general">
      <div className="profile">
        <img src={blankPfp}></img>
        <h1>{name}</h1>
      </div>
      <div className="details">
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
      <p>{email}</p>
      <p>{contact}</p>
      <p>{address}</p>
    </div>
  );
}
