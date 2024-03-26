// Code your solutions in this file
function writeCards(namesArray, event){
    let thankyoucards = []
    for( let i = 0; i < namesArray.length; i++){
       thankyoucards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankyoucards
}
const namesArray = ["Guadalupe", "Ollie", "Aki"]
const event = ["surprise"]
const message = writeCards(namesArray, Event)
console.log (message)

function countDown(startingNumber){
   while(startingNumber > 0){
       console.log(startingNumber);
       startingNumber -= 1;
   }
   console.log(startingNumber);
}