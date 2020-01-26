import React from 'react';
import Form from './Form';
import ResultsBox from './ResultsBox';

class NewGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      playerResults: [],
      // isFormSubmitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
      // isFormSubmitted: false
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state.playerResults)

    // TODO
    const turn = {
      number: this.state.inputValue,
      cows: 0,
      bulls: 0
    }

    const playerResults = [...this.state.playerResults, turn];

    this.setState({
      // isFormSubmitted: true,
      playerResults: playerResults
    })

    // console.log(this.state.playerResults)
  }

  render() {
    return (
      <div id="new-game-holder">
        <Form inputValue={this.state.inputValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {this.state.playerResults.length > 0 && <ResultsBox playerResults={this.state.playerResults} />}
      </div>
    );
  }
}

export default NewGame;