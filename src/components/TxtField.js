import React from "react";

const TxtField = ({value, onChange}) => {
    return (
        <input type="text" value={value} onChange={onChange} placeholder="Enter a message to display" />
    );
}

export default TxtField;