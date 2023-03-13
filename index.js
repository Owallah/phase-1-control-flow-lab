function scuberGreetingForFeet(ride){
  // Write your code here!
  let answer;
  if (ride <= 400) {
    answer = "This one is on me!";
  }
  
  if(ride > 2000) {
    answer = 'I will gladly take your thirty bucks.';
  }
  
  if(ride > 2500){
    answer = 'No can do.';
  }

  
  return answer;
}


function ternaryCheckCity(city){
  // Write your code here!
  let answer;
  if(city == "NYC"){
    answer = `Ok, sounds good.`
  }
  else{
    answer = 'No go.'
  }

  return answer

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let answer;
  switch (tip) {
    case "generous":
      answer = "Thank you so much."
      break;
    case "not as generous":
      answer = "Thank you."
      break;
    default:
      answer = "Bye."
      break;
  }
  return answer
}