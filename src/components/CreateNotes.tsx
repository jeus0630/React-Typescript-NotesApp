import React, {FunctionComponent, useState} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import {Note} from "../models/note.model";
import {useRef} from "react";

interface OwnProps {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

type Props = OwnProps;

const CreateNotes: FunctionComponent<Props> = ({notes, setNotes}) => {
    const [error, setError] = useState<string>("");

    const titleRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All fields are mandatory");
        }

        setError("");
        setNotes([
            ...notes,
            {
                id: (new Date()).toString(),
                title: titleRef.current!.value,
                text: textRef.current!.value,
                color: colorRef.current!.value,
                date: (new Date()).toString()
            }
        ]);

        titleRef.current!.value = '';
        textRef.current!.value = '';
        colorRef.current!.value = '#dfdfdf';

    }
    return (
        <>
            <h2>Create Notes</h2>
            {error && <Alert variant={"danger"}>{error}</Alert>}
            <Form className={"mt-3 mb-3"} onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className={"mb-3"} controlId={"formBasicTitle"}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type={"text"} placeholder={"Enter Title for the Note"} ref={titleRef}></Form.Control>
                </Form.Group>
                <Form.Group className={"mb-3"} controlId={"formBasicText"}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type={"text"} placeholder={"Enter your notes"} as={"textarea"} rows={3}
                                  ref={textRef}></Form.Control>
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label htmlFor={"colorInput"}>Notes Color</Form.Label>
                    <Form.Control type={"color"} id={"colorInput"} defaultValue={"#dfdfdf"} title={"choose your color"}
                                  ref={colorRef}></Form.Control>
                </Form.Group>
                <Button type={"submit"} variant={"primary"}>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default CreateNotes;