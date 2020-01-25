import React from 'react';

class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A 4-digit number was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div id="new-game-holder">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group custom-input-group">
            <label htmlFor="chosen_number">Write down a 4-digit number:</label>
            <input type="text" className="form-control custom-form-control mb-4" name="chosen_number" autoComplete="off" placeholder="Your number here..." />
          </div>

          <input type="submit" value="Submit number" className="btn secondary-button" />
        </form>
      </div>
    );
  }
}
export default NewGame;