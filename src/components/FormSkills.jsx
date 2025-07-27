export default function SkillsForm({ input, setInput }){
    function onChange(event) {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <h2>Skills</h2>
        </div>
    )
}