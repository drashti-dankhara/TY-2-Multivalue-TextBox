import React, { useState } from 'react';
import '../src/Style.css'

const Home = () => {

    const [values, setValues] = useState([]);
    const [currentValue, setCurrentValue] = useState('');

    const [savedValues, setSavedValues] = useState([]);
    const [currentValue2, setCurrentValue2] = useState('');


    const handleInputChange = (event) => {
        setCurrentValue(event.target.value);
    };
    const handleInputChange2 = (event) => {
        setCurrentValue2(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && currentValue.trim() !== '') {
            // console.log(currentValue)
            setValues([...values, currentValue.trim()]);
            setCurrentValue('');
        } else if (event.key === 'Backspace' && currentValue === '' && values.length > 0) {
            setValues(values.slice(0, values.length - 1));
        }
    };


    const handleKeyDown2 = (event) => {
        if (event.key === 'Enter' && currentValue2.trim() !== '') {
            setSavedValues([...savedValues, currentValue2.trim()]);
            setCurrentValue2('');
        } else if (event.key === 'Backspace' && currentValue2 === '' && savedValues.length > 0) {
            setSavedValues(savedValues.slice(0, savedValues.length - 1));
        }
    };

    const handleRemoveValue = (index) => {
        const updatedValues = [...values];
        updatedValues.splice(index, 1);
        setValues(updatedValues);
    };

    const handleRemoveValue2 = (index) => {
        const updatedValues = [...savedValues];
        updatedValues.splice(index, 1);
        setSavedValues(updatedValues);
    };

    const handleSave = () => {
        setSavedValues([...savedValues, ...values]);
        console.log(values)
    };

    const handleEdit = () => {
        // console.log(savedValues)
        console.log(savedValues)
    };

    return (
        <>

            <div className="app-container">
                <h1>ADD</h1>
                <div>
                    <div className="multi-value-textbox">
                        {values.map((value, index) => (
                            <span key={index} className="value">
                                {value}
                                <span className="remove-icon" onClick={() => handleRemoveValue(index)}>
                                    &#x2715;
                                </span>
                            </span>
                        ))}
                        <input
                            type="text"
                            value={currentValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Enter a value and press Enter"
                        />

                    </div>
                    <button onClick={handleSave}>Save</button>
                </div>

                <div className="app-container">
                    <h1>EDIT</h1>

                    <div className="multi-value-textbox">
                        {savedValues.map((value, index) => (
                            <span key={index} className="value">
                                {value}
                                <span className="remove-icon" onClick={() => handleRemoveValue2(index)}>
                                    &#x2715;
                                </span>
                            </span>
                        ))}
                        <input
                            type="text"
                            value={currentValue2}
                            onChange={handleInputChange2}
                            onKeyDown={handleKeyDown2}
                            placeholder="Enter a value and press Enter"
                        />

                    </div>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            </div>
        </>
    )
}

export default Home
