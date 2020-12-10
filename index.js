; (function (window, document) {
  'use strict';
  /* declaration section */

  class Cat {
    constructor (tiredness, hunger, loneliness, happiness) {
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
  }


  window.onload = function () {

  };
})(window, document);