import blankPfp from "../assets/blank.jpg";
import contactImg from "../assets/contact.svg";
import emailImg from "../assets/email.svg";
import addressImg from "../assets/address.svg";

export default function General({ name, email, contact, address }) {
  return (
    <div className="general">
      <div className="profile">
        <div>
          <img src={blankPfp} />
        </div>
        <h1>{name}</h1>
      </div>
      <div className="details">
        <div>
          <img src={contactImg} alt="" />
          <p>{contact}</p>
        </div>
        <div>
          <img src={emailImg} alt="" />
          <p>{email}</p>
        </div>
        <div>
          <img src={addressImg} alt="" />
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
}
