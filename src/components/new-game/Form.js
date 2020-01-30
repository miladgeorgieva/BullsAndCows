import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="input-group custom-input-group">
                <label htmlFor="chosen_number">Write down a 4-digit number:</label>
                <input type="text" className="form-control custom-form-control"
                    value={props.inputValue}
                    onChange={inputValue => props.handleChange(inputValue)}
                    name="chosen_number"
                    autoComplete="off"
                    placeholder="Your number here..." />
            </div>

            <div className="row">
                <div className="col-12 col-md-4">
                    <button className={"btn secondary-button add-number" +
                        (props.inputValueArray.length !== 4 || !props.currentInputIsNumber ? " disabled" : '')}
                        disabled={props.inputValueArray.length !== 4 || !props.currentInputIsNumber}>
                        Submit number
                    </button>
                </div>
                <div className="col-12 col-md-4">
                    <button className={"btn secondary-button joker" +
                        (props.jokerBtnIsDisabled ? " disabled" : '')}
                        disabled={props.jokerBtnIsDisabled} onClick={props.onJokerClick}>Give me a joker
                    </button>
                </div>
                <div className="col-12 col-md-4">
                    <button className="btn secondary-button give-up" onClick={props.onGiveUpClick}>I give up</button>
                </div>
            </div>
        </form>
    );
}

export default Form;