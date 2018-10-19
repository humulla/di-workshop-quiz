var score = 0;
var username;
var QuestionOne = "Berlin is the capital of which country? a)Germany, b)Belgium c) Netherlands"
var AnswerOne = "a"
var userAnswerOne; 



function startGame() {
    // get the user's name
    username = prompt("Welcome to the General quiz, What is your name?")
    AskQuestion(QuestionOne, AnswerOne)
//     alert(username) 
//     userAnswerOne = prompt("Welcome, " +username+". Your first question is:" + QuestionOne);
//     if (userAnswerOne == AnswerOne ){
//      score++
//     } else{
//         alert("The answer was " +AnswerOne)

//     }
// console.log (userAnswerOne, AnswerOne)

}

function AskQuestion(question, correctAnswer) {
    var userAnswer = prompt(question);
    if(userAnswer.toLowerCase == correctAnswer.toLowerCase()) {
       score++
    } else {
        alert("The answer was" +correctAnswer.toLowerCase)
    }

} // this is the end of the AskQuestion function
console.log(score)
