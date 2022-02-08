import React, {FunctionComponent} from 'react';
import {Note} from "../models/note.model";
import Notes from "./Notes";

interface OwnProps {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

type Props = OwnProps;

const NotesList: FunctionComponent<Props> = ({notes,setNotes}) => {

    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    const renderNotes = () => notes.map((note,idx) => {
            return <Notes key={note.id} note={note} handleDelete={handleDelete}></Notes>
        })


    return (
        <>
            <h2 className={"mt-3"}>Notes</h2>
            <div>
                {
                    renderNotes()
                }
            </div>
        </>
    );
};

export default NotesList;