//Coding Steps:
//  For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
//  You do not need to do anything special when there is a tie in a round.
//  Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include. 
//  You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser’s console.
//The completed project should, when executed, do the following:
//  -/ Deal 26 Cards to each Player from a Deck of 52 cards.
//  -/ Iterate through the turns where each Player plays a Card.
//  -/ The Player who played the higher card is awarded a point
//  -/ Ties result in zero points for both Players
//  -/ After all cards have been played, display the score and declare the winner.
//  Write a Unit Test using Mocha and Chai for at least one of the functions you write.

function pointlessFunction(){return 1;} //function for the sole purpose of testing with mocha and chai

let DECK = [1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13];   //make the deck
let HAND1 =[], HAND2 = [];
let SCORE1 = 0, SCORE2 = 0;
for(let i = 1;i<=26;i++){                                                                                                               //deal the deck to both hands
    HAND1.push(DECK.splice(Math.floor(Math.random() * DECK.length),1)[0]);
    HAND2.push(DECK.splice(Math.floor(Math.random() * DECK.length),1)[0]);
}
//console.log(DECK);console.log(HAND1);console.log(HAND2);
for(let i = 1;i<=26;i++){                                                                                                               //play war
    let CARD1 = HAND1.pop(), CARD2 = HAND2.pop();
    if      (CARD1>CARD2)   {SCORE1+=1;}
    else if (CARD1<CARD2)   {SCORE2+=1;}
    //console.log(CARD1+" vs "+CARD2);console.log(SCORE1+"   "+SCORE2);
}
console.log("Player 1: "+SCORE1+"\n"+"Player 2: "+SCORE2+"\n"+"-------------");                                                         //determine the outcome
if      (SCORE1>SCORE2) {console.log("Player 1 wins");}
else if (SCORE1<SCORE2) {console.log("Player 2 wins");}
else                    {console.log("tie game");}