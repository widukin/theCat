; 
/* make the script more efficient */
(function (window, document) {
  'use strict';

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /* import the Cat object */
  /* import { Cat } from './theCat'; */ /* It is not working right now */

  class Cat {
    constructor () {
      this._name = 'Paws'
      this._tiredness = getRandomInt(-1, 1);
      this._hunger = getRandomInt(-1, 1);
      this._loneliness = getRandomInt(-1, 1);
      this._happiness = getRandomInt(-1, 1);
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
      return stateOfHappiness = 'depressed';
    } else if (this._happiness === 0) {
      return stateOfHappiness = 'ok';
    } else if (this._happiness > 0) {
      return stateOfHappiness = 'happy';
    }
  }

  getCatsStatus () {

    let stateOfTiredness = this.setStateOfTiredness();
    let stateOfHunger = this.setStateOfHunger();
    let stateOfLoneliness = this.setStateOfLoneliness();
    let stateOfHappiness = this.setStateOfHappiness();

    if (this._tiredness < 0 && this._hunger < 0 && this._loneliness > 0 && this._happiness < 0) {
      return `<b>${this._name}</b> is really <b>${stateOfHunger}</b> and so <b>${stateOfTiredness}</b> at the moment. He is also feeling <b>${stateOfHappiness}</b> because he is <b>${stateOfLoneliness}</b>. Oh boy, he is very suicidal, right now! Please care about <b>${this._name}</b>.`;
    } else if (this._tiredness > 0 && this._hunger === 0 && this._loneliness < 0 && this._happiness > 0) {
      return `Dont pet <b>${this._name}</b>!`;
    } else {
      return `<b>${this._name}</b> is really <b>${stateOfHunger}</b> and <b>${stateOfTiredness}</b> right now. He is feeling <b>${stateOfHappiness}</b> because he is <b>${stateOfLoneliness}</b>.`;
    }
  }
}
  
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