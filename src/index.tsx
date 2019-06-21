import React from 'react';
import {ReactStackableModalProps} from "../types";

const ReactStackableModal = (props: ReactStackableModalProps) => {
    return (
        <div>
            This is so React Stackable Modal!
            Name: { props.name } <br/>
            Age: { props.age } <br/>
            Person: { props.person.id }
        </div>
    );
};

export default ReactStackableModal;
