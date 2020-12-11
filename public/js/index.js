; 
/* make the script more efficient */
(function (window, document) {
  'use strict';
  /* import the Cat object */
  /* import { Cat } from './theCat'; */ /* It is not working right now */

class Cat {
  constructor (tiredness = 0, hunger = 0, loneliness = 0, happiness = 0) {
    this._name = 'Paws'
    this._tiredness = tiredness;
    this._hunger = hunger;
    this._loneliness = loneliness;
    this._happiness = happiness;
  }

  sleep () {
    this._tiredness++;
  }

  feed () {
    this._hunger--;
  }

  pet () {
    this._loneliness--;
  }

  play () {
    this._happiness++;
  }

  setStateOfTiredness () {
    let stateOfTiredness;

    if (this._tiredness < 0) {
      return stateOfTiredness = 'tired';
    } else if (this._tiredness === 0) {
      return stateOfTiredness = 'awake';
    } else if (this._tiredness > 0) {
      return stateOfTiredness = 'excited';
    }
  }

  setStateOfHunger () {
    let stateOfHunger;

    if (this._hunger < 0) {
      return stateOfHunger = 'stuffed';
    } else if (this._hunger === 0) {
      return stateOfHunger = 'full';
    } else if (this._hunger > 0) {
      return stateOfHunger = 'hungry';
    }
  }

  setStateOfLoneliness () {
    let stateOfLoneliness;

    if (this._loneliness < 0) {
      return stateOfLoneliness = 'accompanied';
    } else if (this._loneliness === 0) {
      return stateOfLoneliness = 'alone';
    } else if (this._loneliness > 0) {
      return stateOfLoneliness = 'lonely';
    }
  }

  setStateOfHappiness () {
    let stateOfHappiness;
      if (this._happiness < 0) {
        console.log(this._happiness + ' depressed');
      return stateOfHappiness = 'depressed';
    } else if (this._happiness === 0) {
      console.log(this._happiness + ' ok');
      return stateOfHappiness = 'ok';
    } else if (this._happiness > 0) {
      console.log(this._happiness + ' happy');
      return stateOfHappiness = 'happy';
    }
  }

  getCatsStatus () {

    let stateOfTiredness = this.setStateOfTiredness();
    let stateOfHunger = this.setStateOfHunger();
    let stateOfLoneliness = this.setStateOfLoneliness();
    let stateOfHappiness = this.setStateOfHappiness();

    if (this._tiredness < 0 && this._hunger < 0 && this._loneliness > 0 && this._happiness < 0) {
      return `${this._name} is really ${stateOfHunger} and so ${stateOfTiredness} at the moment. He is also feeling ${stateOfHappiness} because he is ${stateOfLoneliness}. Oh boy, he is very suicidal, right now! Please care about ${this._name}.`;
    } else if (this._tiredness > 0 && this._hunger === 0 && this._loneliness < 0 && this._happiness > 0) {
      return `Dont pet ${this._name}!`;
    } else {
      return `${this._name} is really ${stateOfHunger} and ${stateOfTiredness} right now. He is feeling ${stateOfHappiness} because he is ${stateOfLoneliness}.`;
    }
  }
}

/* 
- Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
*/

  
  //ES6
  const getOutput = () => {
    const outputContainer = document.getElementById('output');
    /* instanciate Cat */
    const cat = new Cat();
    /* get Cats Status */
    const outputText = cat.getCatsStatus();
    /* Print the Cats Status into the Output Container of the index.html */
    outputContainer.innerHTML = outputText;
  }

  const bindClickHandler = () => {
    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', getOutput);
  }

  /* Code is executed not until the page is loaded */
  window.addEventListener('load', bindClickHandler);

  // ES5
/*   window.onload = function () {

  }; */
})(window, document);