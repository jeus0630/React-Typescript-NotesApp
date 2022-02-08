import React, {useState} from 'react';
import './App.css';
import {Note} from "./models/note.model";
import Header from "./components/Header";
import {Col, Container, Row} from "react-bootstrap";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";

function App() {
    const [notes, setNotes] = useState<Note[]>([{
        id: (new Date()).toString(),
        title: "Meetings",
        text: "Schedule meeting with UI/UX team",
        color: "#dfdfdf",
        date: (new Date()).toString()
    }]);

    return (
        <>
            <Header></Header>
            <Container className={"mt-5"}>
                <Row>
                    <Col>
                        <NotesList notes={notes} setNotes={setNotes}></NotesList>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CreateNotes notes={notes} setNotes={setNotes}></CreateNotes>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
