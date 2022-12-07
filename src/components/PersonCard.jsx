import React, { useState } from "react";

const PersonCard = (props) => {
    const [ age, setAge ] = useState(props.age);
    const { firstName, lastName, hair } = props;
    return (
        <div>
            <h2>
                {lastName}, {firstName}
            </h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hair}</p>

            <button onClick={ (event) => setAge(age + 1)}>Birthday button for { props.firstName }</button>
        </div>
    );
};

export default PersonCard;