// function confirm() {
//   return true;
// }

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { console.log("You agreed."); },
//   function() { console.log("You canceled the execution."); }
// );

const confirm = () => {
  return false;
}

const ask = (question,yes,no) =>{
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  ()=>{console.log("you agree")},
  ()=>{console.log("you cancelled")}
);

console.log(confirm)
console.log(ask)


  
