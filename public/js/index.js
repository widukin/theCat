; 
/* make the script more efficient */
(function (window, document) {
  'use strict';
  /* import the Cat object */
  /* import { Cat } from './theCat'; */ /* It is not working right now */

class Cat {
  constructor (tiredness = 0, hunger = 0, loneliness = 0, happiness = 0) {
    this._tiredness = tiredness;
    this._hunger = hunger;
    this._loneliness = loneliness;
    this._happiness = happiness;
  }

  sleep () {
    tiredness++;
  }

  feed () {
    hunger--;
  }

  pet () {
    loneliness--;
  }

  play () {
    happiness++;
  }

  setCatsStatus () {

  }

  getCatsStatus () {

    return 'i am fine';
  }
}

  
  //ES6
  const getOutput = () => {
    const outputContainer = document.getElementById('output');
    const catPaws = new Cat();
    const outputText = catPaws.getCatsStatus();
    outputContainer.innerHTML = outputText + 'Hallo';
  }

  const bindClickHandler = () => {
    console.log('bindClickHandler');
    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', getOutput);
  }

  /* Code is executed not until the page is loaded */
  window.addEventListener('load', bindClickHandler);

  // ES5
/*   window.onload = function () {

  }; */
})(window, document);