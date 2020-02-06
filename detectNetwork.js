// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  let prefix1Digit = cardNumber[0];
  let prefix2Digit = cardNumber[0] + cardNumber[1];
  let prefix3Digit = cardNumber[0] + cardNumber[1] + cardNumber[2];
  let prefix4Digit = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
  let prefix6Digit = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] + cardNumber[4] + cardNumber[5];

switch (true){
  case (prefix1Digit === '4' && prefix4Digit !== "4903" &&
  	prefix4Digit !== "4905" && prefix4Digit !== "4911" &&
  	prefix4Digit !== "4936") :

  if(cardNumber.length === 13 ||
   cardNumber.length === 16 || 
   cardNumber.length === 19){
    return "Visa";
  }

}

switch (true){
  case prefix2Digit === '38':

  if(cardNumber.length === 14){
    return "Diner's Club";
  }

  case prefix2Digit === '39':

  if(cardNumber.length === 14){
    return "Diner's Club";
  }

  case prefix2Digit === '34':

  if(cardNumber.length === 15){
    return "American Express";
  }

  case prefix2Digit === '37':

  if(cardNumber.length === 15){
    return "American Express";
  }

  case prefix2Digit === '51':

  if(cardNumber.length === 16){
    return "MasterCard";
  }

  case prefix2Digit === '52':

  if(cardNumber.length === 16){
    return "MasterCard";
  }

  case prefix2Digit === '53':

  if(cardNumber.length === 16){
    return "MasterCard";
  }

  case prefix2Digit === '54':

  if(cardNumber.length === 16){
    return "MasterCard";
  }

  case prefix2Digit === '55':

  if(cardNumber.length === 16){
    return "MasterCard";
  }

  case prefix2Digit === '65':

  if(cardNumber.length === 16 ||
    cardNumber.length === 19){
    return "Discover";
  }

}


switch (true){
  case prefix3Digit === '644':

  if(cardNumber.length === 16 || 
   cardNumber.length === 19){
    return "Discover";
  }

  case prefix3Digit === '645':

  if(cardNumber.length === 16 || 
   cardNumber.length === 19){
    return "Discover";
  }

  case prefix3Digit === '646':

  if(cardNumber.length === 16 || 
   cardNumber.length === 19){
    return "Discover";
  }

  case prefix3Digit === '647':

  if(cardNumber.length === 16 || 
   cardNumber.length === 19){
    return "Discover";
  }

  case prefix3Digit === '648':

  if(cardNumber.length === 16 || 
   cardNumber.length === 19){
    return "Discover";
  }

  case prefix3Digit === '649':

  if(cardNumber.length === 16 || 
   cardNumber.length === 19){
    return "Discover";
  }

  case (parseInt(prefix3Digit) >= 624 &&
  	parseInt(prefix3Digit) <= 626):

  if(cardNumber.length >= 16 && 
   cardNumber.length <= 19){
    return "China UnionPay";
  }
}

switch (true){
  case prefix4Digit === '6011':

  if(cardNumber.length === 16 || 
   cardNumber.length === 19){
    return "Discover";
  }

  case prefix4Digit === '5018':

  if(cardNumber.length >= 12 &&
    cardNumber.length <= 19){
    return "Maestro";
  }

  case prefix4Digit === '5020':

  if(cardNumber.length >= 12 &&
    cardNumber.length <= 19){
    return "Maestro";
  }

  case prefix4Digit === '5038':

  if(cardNumber.length >= 12 &&
    cardNumber.length <= 19){
    return "Maestro";
  }

  case prefix4Digit === '6304':

  if(cardNumber.length >= 12 &&
    cardNumber.length <= 19){
    return "Maestro";
  }

  case (parseInt(prefix4Digit) >= 6282 &&
  	parseInt(prefix4Digit) <= 6288):

  if(cardNumber.length >= 16 && 
   cardNumber.length <= 19){
    return "China UnionPay";
  }

  case (prefix4Digit === "4903"):

  if(cardNumber.length === 16 ||
   cardNumber.length === 18 ||
   cardNumber.length === 19){
    return "Switch";
  }

  case (prefix4Digit === "4905"):

  if(cardNumber.length === 16 ||
   cardNumber.length === 18 ||
   cardNumber.length === 19){
    return "Switch";
  }

  case (prefix4Digit === "4911"):

  if(cardNumber.length === 16 ||
   cardNumber.length === 18 ||
   cardNumber.length === 19){
    return "Switch";
  }

  case (prefix4Digit === "4936"):

  if(cardNumber.length === 16 ||
   cardNumber.length === 18 ||
   cardNumber.length === 19){
    return "Switch";
  }

  case (prefix4Digit === "6333"):

  if(cardNumber.length === 16 ||
   cardNumber.length === 18 ||
   cardNumber.length === 19){
    return "Switch";
  }

  case (prefix4Digit === "6759"):

  if(cardNumber.length === 16 ||
   cardNumber.length === 18 ||
   cardNumber.length === 19){
    return "Switch";
  }

 }

 switch (true){
  case (parseInt(prefix6Digit) >= 622126 &&
  	parseInt(prefix6Digit) <= 622925):

  if(cardNumber.length >= 16 && 
   cardNumber.length <= 19){
    return "China UnionPay";
  }

  case prefix6Digit === "564182":

  if(cardNumber.length === 16 ||
   cardNumber.length === 18 ||
   cardNumber.length === 19){
    return "Switch";
  }

  case prefix6Digit === "633110":

  if(cardNumber.length === 16 ||
   cardNumber.length === 18 ||
   cardNumber.length === 19){
    return "Switch";
  }

 }

};







