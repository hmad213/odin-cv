import General from "./general";

export default function Resume({ name, email, contact, address }){
    return(
        <div>
            <General name={name} email={email} contact={contact} address={address}/>
        </div>
    )
}