import {sayHello} from "./greet"

enum Suit {
  SPADE,
  CLUB,
  HEART,
  DIAMOND
}

enum Rank {
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
  ACE
}

interface Card {
  suit: Suit,
  rank: Rank
}

class Deck {
  deck: Card[];
  currentIndex = 0;
  constructor() {
    this.deck = [
      {suit: Suit.SPADE, rank: Rank.TWO},
      {suit: Suit.SPADE, rank: Rank.THREE},
      {suit: Suit.SPADE, rank: Rank.FOUR},
      {suit: Suit.SPADE, rank: Rank.FIVE},
      {suit: Suit.SPADE, rank: Rank.SIX},
      {suit: Suit.SPADE, rank: Rank.SEVEN},
      {suit: Suit.SPADE, rank: Rank.EIGHT},
      {suit: Suit.SPADE, rank: Rank.NINE},
      {suit: Suit.SPADE, rank: Rank.TEN},
      {suit: Suit.SPADE, rank: Rank.JACK},
      {suit: Suit.SPADE, rank: Rank.QUEEN},
      {suit: Suit.SPADE, rank: Rank.KING},
      {suit: Suit.SPADE, rank: Rank.ACE},

      {suit: Suit.CLUB, rank: Rank.TWO},
      {suit: Suit.CLUB, rank: Rank.THREE},
      {suit: Suit.CLUB, rank: Rank.FOUR},
      {suit: Suit.CLUB, rank: Rank.FIVE},
      {suit: Suit.CLUB, rank: Rank.SIX},
      {suit: Suit.CLUB, rank: Rank.SEVEN},
      {suit: Suit.CLUB, rank: Rank.EIGHT},
      {suit: Suit.CLUB, rank: Rank.NINE},
      {suit: Suit.CLUB, rank: Rank.TEN},
      {suit: Suit.CLUB, rank: Rank.JACK},
      {suit: Suit.CLUB, rank: Rank.QUEEN},
      {suit: Suit.CLUB, rank: Rank.KING},
      {suit: Suit.CLUB, rank: Rank.ACE},

      {suit: Suit.HEART, rank: Rank.TWO},
      {suit: Suit.HEART, rank: Rank.THREE},
      {suit: Suit.HEART, rank: Rank.FOUR},
      {suit: Suit.HEART, rank: Rank.FIVE},
      {suit: Suit.HEART, rank: Rank.SIX},
      {suit: Suit.HEART, rank: Rank.SEVEN},
      {suit: Suit.HEART, rank: Rank.EIGHT},
      {suit: Suit.HEART, rank: Rank.NINE},
      {suit: Suit.HEART, rank: Rank.TEN},
      {suit: Suit.HEART, rank: Rank.JACK},
      {suit: Suit.HEART, rank: Rank.QUEEN},
      {suit: Suit.HEART, rank: Rank.KING},
      {suit: Suit.HEART, rank: Rank.ACE},

      {suit: Suit.DIAMOND, rank: Rank.TWO},
      {suit: Suit.DIAMOND, rank: Rank.THREE},
      {suit: Suit.DIAMOND, rank: Rank.FOUR},
      {suit: Suit.DIAMOND, rank: Rank.FIVE},
      {suit: Suit.DIAMOND, rank: Rank.SIX},
      {suit: Suit.DIAMOND, rank: Rank.SEVEN},
      {suit: Suit.DIAMOND, rank: Rank.EIGHT},
      {suit: Suit.DIAMOND, rank: Rank.NINE},
      {suit: Suit.DIAMOND, rank: Rank.TEN},
      {suit: Suit.DIAMOND, rank: Rank.JACK},
      {suit: Suit.DIAMOND, rank: Rank.QUEEN},
      {suit: Suit.DIAMOND, rank: Rank.KING},
      {suit: Suit.DIAMOND, rank: Rank.ACE}
    ];
  }
  printAllDeck() : void {
    console.log('Printing the entire deck.');
    this.deck.forEach(element => {
      console.log(`${Rank[element.rank]} ${Suit[element.suit]}`);
    });
  }

  printDeck(greaterThan: Rank) : void {
    this.deck.forEach(element => {
      if(element.rank > greaterThan) {
        console.log(`${Rank[element.rank]} ${Suit[element.suit]}`);
      }
    
    });
  }
  shuffleDeck() : void {
    let shuffledDeck: Card[] = [];
    while (this.deck.length > 0) {
      let max = this.deck.length - 1;
      let min = 0;
      let index = Math.floor(Math.random()*(max-min+1)+min)

      let temp = this.deck[0];
      this.deck[0] = this.deck[index];
      this.deck[index] = temp;

      shuffledDeck.push(this.deck.shift());
    }

    this.deck = shuffledDeck;
    console.log('Deck size!!!');
    console.log(this.deck.length);
  }
  drawCard() : void {
    let card: Card = this.deck[this.currentIndex];
    const elt = document.getElementById("greeting");
    elt.innerText = `${Rank[card.rank]} ${Suit[card.suit]}`;
    console.log(`Current Card: ${this.currentIndex}, Remaining Cards: ${this.deck.length - this.currentIndex}`);
    //console.log(`${Rank[card.rank]} ${Suit[card.suit]}`);
    this.currentIndex++;

    if(this.currentIndex > this.deck.length - 1) {
      this.currentIndex = 0;
      this.shuffleDeck();
    }
  }
}

function showHello(divName: string, name: string) {
  
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");

let deck = new Deck();
console.log(`Current Cards: ${deck.deck.length}`);
deck.shuffleDeck();
//deck.printAllDeck();

const el2 = document.getElementById('drawCard');
el2.onclick = function() {
  deck.drawCard();
  return false;
}