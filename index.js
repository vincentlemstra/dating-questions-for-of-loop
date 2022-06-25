'use strict';

// Variable array with questions
const questions = [
  "What is your first name?",
  "What is your last name?",
  "What is your age?",
  "Where do you live?",
  "What is your gender?",
  "Which genders are you interested in dating?",
  "What is your main hobby?",
  "What is your favourite movie?"
];

for (const question of questions) {
  const firstName = prompt(questions[0])
  const lastName = prompt(questions[1])
  const age = prompt(questions[2])
  const liveIn = prompt(questions[3])
  const gender = prompt(questions[4])
  const interestedInGender = prompt(questions[5])
  const hobby = prompt(questions[6])
  const favouriteMovie = prompt(questions[7])
  
 console.log(`The following bio will be generated: My name is: ${firstName} ${lastName}. I am ${age} years old. And I live in ${liveIn}. I identify myself a ${gender} and I am interested in ${interestedInGender}. My main hobby is ${hobby} and my favourite movie is ${favouriteMovie}.`);
    console.log("Thank you for answering the qustions. Your profile bio will be updated soon.")
  break;
}

