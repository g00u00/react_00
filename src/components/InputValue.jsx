import React, {useState} from 'react';

const InputValue = () => {
    const [value, setValue] = useState('Текст')
    return (
        <>
            <h1>InputValue: {value}</h1>
            <input type="text" value={value}
                   onChange={event => setValue(event.target.value)}
            />
        </>
    )
};

export default InputValue;