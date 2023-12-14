import React from 'react';

function FileInput({type="file", handleChange}) {
    return (
        <input type={type} onChange={handleChange}/>
    );
}

export default FileInput;