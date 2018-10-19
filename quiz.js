var score = 0;
var username;
var QuestionOne = "Berlin is the capital of which country? a)Germany, b)Belgium c) Netherlands"
var AnswerOne = "a"
var userAnswerOne; 

var questions = ["Berlin is the capital of which country? a)Germany, b)Belgium c) Netherlands", "Does the moon have gravity? a)Yes its 1.622 m/s b)No there is no gravity where you float", "You want to make green paint. Which colours do you miss together? a) red and yellow b) orange and purple c) blue and yellow"]
var answers = ["a", "a", "b"]
function startGame() {
    // get the user's name
    username = prompt("Welcome to the General quiz, What is your name?")
    AskQuestion(questions[0], answers[0])
    AskQuestion(questions[1], answers[1]) 
    AskQuestion(questions[2], answers[2])
    
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
