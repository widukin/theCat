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

  catsStatus () {
    if

  }
  Last, write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
  