import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [extended, setExtended] = useState(false);

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
        setNote({
            title: "",
            content: " "
        })
        event.preventDefault();
    }

    function handleClick() {
        setExtended(true);
    }

    return (
        <div>
            <form className="create-note">
                {extended && <input onChange={handleInput} value={note.title} name="title" placeholder="Title" />}
                <textarea onClick={handleClick} onChange={handleInput}
                    name="content"
                    value={note.content}
                    placeholder="Take a note..."
                    rows={extended ? "3": "1"} />
                <Zoom in={extended}>
                    <Fab onClick={submitNote}><AddCircleIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;