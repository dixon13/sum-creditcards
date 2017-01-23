import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var cards = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'];

function cardNumbersGreatestSum(array) {
  var sumCards = [];
  console.log("Input: ", array);
  var temp_array = [];

  for (var i = 0; i < array.length; i++) {
    console.log("Removing hyphens and zeros...");
    array[i] = array[i].replace(/[^1-9]/g, ''); // "123456789" Removing hyphens and zeros
    array[i] = array[i].split('');
    temp_array.push(array[i]);
    console.log(array[i]);
    console.log("temp_array: ", temp_array);
  }

  for (var x = 0; x < temp_array.length; x++) {
    console.log("Looping through temp_array - new array with no hyphens");
    console.log(temp_array[x]);
    for (var y = 0; y < temp_array[x].length; y++) {
      if (y === 0) {
        // console.log("LOG: ", temp_array[x][y]);
        console.log("Adding to sumCards: ", temp_array[x][y]);
        sumCards.push(Number(temp_array[x][y]));
      } else {
        var sum = sumCards[sumCards.length - 1] + Number(temp_array[x][y]);
        sumCards[sumCards.length - 1] = sum;
      }
    }
  }
  return sumCards
}
var returned = cardNumbersGreatestSum(cards);
console.log("Returned: ", returned);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{returned}</p>
      </div>
    );
  }
}

export default App;
