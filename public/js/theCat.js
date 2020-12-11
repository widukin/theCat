'use strict';

export class Cat {
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

  getCatStatus () {

    return 'i am fine';
  }
}