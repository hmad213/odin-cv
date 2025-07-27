export default function JobForm({ input, setInput }){
    function onChange(event) {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <h2>Job</h2>
        </div>
    )
}