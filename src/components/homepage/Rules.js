import React from 'react';

function Rules(props) {
    return (
        <div id="rules-holder">
            <p>
                Bulls and Cows (also known as Cows and Bulls or Pigs and Bulls) is an old code-breaking mind or paper and
                pencil game for two or more players, predating the commercially marketed board game Mastermind.
            </p>
            <p>
                It is a game that may date back a century or more which uses numbers or words (only numbers in our case).
                It is played by two opponents.
            </p>
            <p>
                The numerical version of the game is usually played with 4 digits, but can also be played with 3 or any other number of digits.
                In our case, the game can only be played with 4 digits.
            </p>
            <p>
                The opponent (in our case this is the computer) renders a 4-digit secret number. The digits must be all different.
                Then, in turn, the player (You) tries to guess their opponent's number who gives the number of matches.
                If the matching digits are in their right positions, they are "bulls", if in different positions, they are "cows".
            </p>
            <p>Example:</p>
            <ul>
                <li>
                    Secret number: 4271
                </li>
                <li>
                    Your try: 1234
                </li>
                <li>
                    Answer: 1 bull and 2 cows. (The bull is "2", the cows are "4" and "1".)
                </li>
            </ul>
            <p>
                The first one to reveal the other's secret number in the least number of guesses wins the game.
            </p>
        </div>
    );
}

export default Rules;