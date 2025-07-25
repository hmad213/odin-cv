import { useState } from 'react'
import Resume from './components/Resume'
import Form from './components/form'

export default function App(){
    let [input, setInput] = useState({"name": "", "contact": "", "email": "", "address": ""})

    return(
        <div className="body">
            <Form input={input} setInput={setInput}/>
            <Resume name={input.name} contact={input.contact} email={input.email} address={input.address}/>
        </div>
    )
}