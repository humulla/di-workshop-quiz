var score = 0;
var username;
var QuestionOne = "Berlin is the capital of which country? a)Germany, b)Belgium c) Netherlands"
var AnswerOne = "a"
var userAnswerOne; 



function startGame() {
    // get the user's name
    username = prompt("Welcome to the General quiz, What is your name?")
    AskQuestion(QuestionOne, AnswerOne)
    AskQuestion("Does the moon have gravity? a)Yes its 1.622 m/s b)No there is no gravity where you float", "a") 
    AskQuestion("You want to make green paint. Which colours do you miss together? a) red and yellow b) orange and purple c) blue and yellow", "b")
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
    if(userAnswer.toLowerCase() == correctAnswer.toLowerCase()) {
       score++
    } else {
        alert("The answer was " +AnswerOne)
    }

} // this is the end of the AskQuestion function
console.log(score)
