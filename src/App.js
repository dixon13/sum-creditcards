import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var cards = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'];
var sumCards = [];
// var theLog = [];

function cardNumbersGreatestSum(array) {
  var temp_array = [];
  array.forEach(function(element) {
    // element = element.split('');
    var temp = element.replace(/-/g, ''); // "1234567890" Removing hyphens
    var temp1 = temp.split('');
    temp_array.push(temp1);
  });
  
  temp_array.forEach(function(item) {
    item.forEach(function(ele) {
      var hash = [];
      var int = Number(ele);
      var index = item.indexOf(ele);
      item[index] = int;
      if (index === 0) {
        sumCards.push(["hash", hash]);
      }
      console.log("Adding: ", item[index] + item[0]);
      hash.push(item[index] + item[0]);
    });
    // console.log("-----");
    // for (var count = 0; count < (item.length + 1); count++) {
    //   console.log(item[count]);
    // }
  });
  // for (var item in array) {
  //   item.replace('-', '');
  //   item.split("");
  //   theLog.push(item);
  // }
  return sumCards
}
var returned = cardNumbersGreatestSum(cards);
console.log("Returned: ", returned);

// console.log("theLog: ", theLog);

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
