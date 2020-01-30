import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2-react';

import Form from './Form';
import ResultsBox from './ResultsBox';


class NewGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      playerResults: [],
      randomGeneratedNumber: 0,
      submitBtnIsDisabled: true,
      jokerBtnIsDisabled: false,
      currentInputIsNumber: false,
      jokerBtnClickedCount: 0,
      initialPlayerPoints: 0,
      playerJokerPoints: 0,
      isBlocking: false,
      showSuccessAlert: false,
      showGiveUpAlert: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onJokerClick = this.onJokerClick.bind(this);
    this.onGiveUpClick = this.onGiveUpClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });

    const regex = /^[0-9\b]+$/;
    if (regex.test(event.target.value)) {
      this.setState({
        currentInputIsNumber: true
      });
    } else {
      this.setState({
        currentInputIsNumber: false
      });
    }
  }

  onJokerClick(event) {
    event.preventDefault();

    let number = this.state.randomGeneratedNumber;
    let jokerClicksCount = this.state.jokerBtnClickedCount;

    let points = (jokerClicksCount + 1) * 100;

    const jokerPoints = points;
    const playerJokerPoints = jokerPoints;

    if (jokerClicksCount < 3) {
      jokerClicksCount++;
      if (jokerClicksCount === 3) {
        toast.error("Haha, you have no jokers left!");
        this.setState({
          jokerBtnIsDisabled: true
        });
      }
      this.setState({
        jokerBtnClickedCount: jokerClicksCount,
        inputValue: number.substring(0, jokerClicksCount),
        playerJokerPoints: playerJokerPoints
      });
    } else {
      return false;
    }
  }

  onGiveUpClick(event) {
    event.preventDefault();
    this.setState({
      isBlocking: false,
      showGiveUpAlert: true
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.numberToArray(this.state.inputValue)[0] === "0") {
      toast.error("Your number cannot start with 0");
      return false;
    }

    // Check for repeating digits and if there are any, use toast
    if ([this.state.inputValue].map(this.hasRepeatingDigits)[0] === true) {
      toast.error("You cannot repeat digits");
      return false;
    }

    let index = this.state.playerResults.length;
    index++;

    const turn = {
      points: index * 5,
      turnNumber: index,
      number: this.state.inputValue,
      cows: this.countCows(),
      bulls: this.countBulls()
    }

    // Adding the "turn" object to the initial array of objects (playerResults)
    const playerResults = [...this.state.playerResults, turn];

    this.setState({
      playerResults: playerResults,
      submitBtnIsDisabled: false,
      isBlocking: true
    }, () => {
      if (this.state.inputValue === this.state.randomGeneratedNumber) {
        let points = this.state.playerResults[playerResults.length - 1].points;
        let playerTurnNumber = this.state.playerResults[playerResults.length - 1].turnNumber;
        let jokerClicksCount = this.state.jokerBtnClickedCount;
        let jokerPoints = this.state.playerJokerPoints;
        let resultPoints = Number(points) + Number(jokerPoints);

        const scores = JSON.parse(localStorage.getItem("scores"));
        scores.push(
          {
            'username': localStorage.username,
            'turns': playerTurnNumber,
            'jokers': jokerClicksCount,
            'points': resultPoints,
            'createdAt': Date.now()
          }
        );

        localStorage.setItem('scores', JSON.stringify(scores));
        this.setState({
          showSuccessAlert: true,
          isBlocking: false
        });
      }

      if (this.state.playerResults.length > 0) {
        window.onbeforeunload = () => true;
      }
    });
  }

  hasRepeatingDigits(num) {
    return (/([0-9]).*?\1/).test(num);
  }

  numberToArray(number) {
    return number.toString().split("");
  }

  generateRandomNumber() {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let ranNums = [];
    let i = nums.length;
    let j = 0;
    let count = 4;

    while (count--) {
      j = Math.floor(Math.random() * (i));
      i--;
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }

    if (ranNums[0] === 0) {
      [ranNums[0], ranNums[1]] = [ranNums[1], ranNums[0]]
    }

    this.setState({
      randomGeneratedNumber: ranNums.join("")
    });
  }

  countCows() {
    let inputValue = this.state.inputValue;
    let randomNumberArray = this.numberToArray(this.state.randomGeneratedNumber);
    let cowsCount = 0;

    for (let i = 0; i < randomNumberArray.length; i++) {
      if (inputValue.indexOf(randomNumberArray[i]) > -1 && inputValue.indexOf(randomNumberArray[i]) !== i) {
        cowsCount++;
      }
    }

    return cowsCount;
  }

  countBulls() {
    let inputValue = this.state.inputValue;
    let randomNumberArray = this.numberToArray(this.state.randomGeneratedNumber);
    let bullsCount = 0;

    for (let i = 0; i < randomNumberArray.length; i++) {
      if (inputValue.indexOf(randomNumberArray[i]) === i) {
        bullsCount++;
      }
    }

    return bullsCount;
  }

  componentDidMount() {
    this.generateRandomNumber();
    if (this.state.isBlocking) {
      window.onbeforeunload = undefined;
    } else {
      window.onbeforeunload = () => true;
    }
  }

  render() {
    return (
      <div id="game-holder">
        <Form
          inputValue={this.state.inputValue}
          inputValueArray={this.numberToArray(this.state.inputValue)}
          currentInputIsNumber={this.state.currentInputIsNumber}
          handleChange={this.handleChange}
          onJokerClick={this.onJokerClick}
          onGiveUpClick={this.onGiveUpClick}
          jokerBtnIsDisabled={this.state.jokerBtnIsDisabled}
          handleSubmit={this.handleSubmit}
        />
        <SweetAlert
          show={this.state.showSuccessAlert}
          title="Congratulations!"
          text="You guessed the number! Go check if you're in between the top 25 players!"
          onConfirm={() => { this.props.history.push('/highscore') }}
        />
        <SweetAlert
          show={this.state.showGiveUpAlert}
          title="You gave up"
          text={`The number you were trying to guess is ${this.state.randomGeneratedNumber}. Don't give up next time!`}
          onConfirm={() => {
            this.setState({
              showGiveUpAlert: false
            }, () => {
              window.onbeforeunload = undefined;
              window.location.reload();
            });
          }}
        />
        {this.state.playerResults.length > 0 && <ResultsBox playerResults={this.state.playerResults} />}
      </div>
    );
  }
}

export default withRouter(NewGame);