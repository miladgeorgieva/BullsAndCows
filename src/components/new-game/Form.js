import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="input-group custom-input-group">
                <label htmlFor="chosen_number">Write down a 4-digit number:</label>
                <input type="text" className="form-control custom-form-control mb-4" value={props.inputValue} onChange={inputValue => props.handleChange(inputValue)} name="chosen_number" autoComplete="off" placeholder="Your number here..." />
            </div>

            <div className="buttons">
                <button className={"btn secondary-button" +
                    (props.inputValueArray.length !== 4 || !props.currentInputIsNumber ? " disabled" : '')}
                    disabled={props.inputValueArray.length !== 4 || !props.currentInputIsNumber}>
                    Submit number
                    </button>
                <button className={"btn secondary-button joker" +
                    (props.jokerBtnIsDisabled ? " disabled" : '')}
                    disabled={props.jokerBtnIsDisabled} onClick={props.onJokerClick}>Give me a joker</button>
                <button className="btn secondary-button give-up">I give up</button>
            </div>
        </form>
    );
}

export default Form;