import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleInput(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={handleInput} value={note.title} name="title" placeholder="Title" />
                <textarea onChange={handleInput} name="content" value={note.content} placeholder="Take a note..." rows="3" />
                <buttone onClick={submitNote}>Add</buttone>
            </form>
        </div>
    );
}

export default CreateArea;