import React, { FunctionComponent } from 'react';

interface OwnProps {

}

type Props = OwnProps;

const NotesList: FunctionComponent<Props> = (props) => {

  return (
        <>
            <h2 className={"mt-3"}>Notes</h2>
        </>
  );
};

export default NotesList;