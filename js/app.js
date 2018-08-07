 
let Quiz = {
  score: 0,
  questions: [], // set equal to BREEDQUESTIONS in getNewQuiz()
  breedChoiceData: [],  // set equal to BREEDCHOICESDATA in getNewQuiz()
  currentQuestionIndex: 0,  // this get incremented in the handleSeeNext() function

  currentQuestion: function() {
    //  cycle thru the questions in the BREEDQUESTIONS
    //  array (see data.js) 
    let resultOfMod = (this.currentQuestionIndex + 4) % 3;
    return this.questions[resultOfMod];
  },
 
  answerFeedbackHeader: function(isCorrect) {
    return isCorrect ? "<h1 class='user-was-correct'>Correct: </h1>" :
      "<h1 class='user-was-incorrect'>Incorrect - Correct Answer: </>";
  },

  seeNextText: function() {
    return this.currentQuestionIndex <
      this.breedChoiceData.length - 1 ? "Next" : "Final Score";
  },

  questionCountText: function() {
    return "Question " + (this.currentQuestionIndex + 1) + " of "+
      this.breedChoiceData.length + " -->   ";
  },

  questionScoreText: function() {
    if (this.currentQuestionIndex > 0)
    {
      return (this.score + " out of " + this.currentQuestionIndex
        + " correct so far");
    }
  },

  finalFeedbackText: function() {
    return "You got " + this.score + " out of " +
      this.breedChoiceData.length + " questions right.";
  },

  // this method compares the user's answer to
  // the correct answer for the current question
  scoreUserAnswer: function(answer) {
      
    let correctChoice = this.breedChoiceData[this.currentQuestionIndex].choices[this.breedChoiceData[this.currentQuestionIndex].correctChoiceIndex];
    if (answer === correctChoice) {
      this.score ++;
    }
    return answer === correctChoice;
  }
}  //  end Quiz object definition
 
// DogBreed object definition  
let DogBreed = {
  breeds: [],   
  getBreed: function(index) {
    return this.breeds[index];
  }
}  //  end DogBreed definition

// factory method for creating
// a new DogBreed.
function getNewDogBreed() {
  const dogBreed = Object.create(DogBreed);
  dogBreed.breeds = DOGBREEDDATA;
  return dogBreed;
}

// factory method for creating
// a new Quiz.
function getNewQuiz() {
  const quiz = Object.create(Quiz);
  quiz.questions = BREEDQUESTIONS;
  quiz.breedChoiceData = BREEDCHOICESDATA;
  return quiz;
}

function makeQuestionElement(quiz, dogBreed) {

  let question = quiz.currentQuestion();
 
  let currentBreed = dogBreed.getBreed(quiz.currentQuestionIndex);

  let dogImagePath = currentBreed.imagePathQuestion;
  //  for accessibility, add a hint of breed to the alt
  //  image attribute
  let dogBreedHint = currentBreed.hint;
  $(".jsQuestionPic").attr('src', dogImagePath); 
  $(".jsQuestionPic").attr('alt', dogBreedHint); 
  
  let questionElement = $(".jsQuestion" ).children().clone();

  //  the jQuery find() method returns descendant elements of the selected element.
  questionElement.find(".jsQuestionCount").text(quiz.questionCountText());
  questionElement.find(".jsQuestionScore").text(quiz.questionScoreText());
  questionElement.find('.jsQuestionText').text(quiz.currentQuestion());

  // add choices as radio inputs
  // question.choices is an array of text strings   
  for (let i = 0; i < quiz.breedChoiceData[quiz.currentQuestionIndex].choices.length; i++) {
    //  choice is a string of the breed, e.g. "Beagle"
    let choice = quiz.breedChoiceData[quiz.currentQuestionIndex].choices[i];
    //  choiceElement is just a div with a radio button and a label 
    //  to the right in it
    let choiceElement = $("#jsChoice").children().clone();
    //  makes the submit value equal the text in choice
    choiceElement.find("input").attr("value", choice);
    choiceElement.find("label").text(choice);
    questionElement.find(".jsChoices").append(choiceElement);
     
  };  //  end for loop

  return questionElement;
}

function makeAnswerElement(isCorrect, correctAnswer, quiz, dogBreed) {

  //  do this section of code (image src) before the clone() call
  //  or you will get duplicate img elements.
  let theQuestion = quiz.currentQuestion(); 
  let currentBreed = dogBreed.getBreed(quiz.currentQuestionIndex);  
  let dogImagePath2 = currentBreed.imagePathAnswer;
  $(".jsAnswerPic").attr('src', dogImagePath2);
 
  let breedName = currentBreed.name;
  $(".jsAnswerPic").attr('alt', currentBreed.name);
   
  $(".jsCorrectBreedText").text(breedName);

  let jsBreedDisposition = currentBreed.disposition;
  $(".jsBreedDispositionText").text(jsBreedDisposition);

  let jsBreedSize = currentBreed.size;
  $(".jsBreedSizeText").text(jsBreedSize);

  let jsBreedHealth = currentBreed.health;
  $(".jsBreedHealthText").text(jsBreedHealth);

  let feedbackElement = $("#jsAnswerFeedback").children().clone();
  feedbackElement.find(".jsFeedbackHeader").html(
  quiz.answerFeedbackHeader(isCorrect)); 
  feedbackElement.find(".jsNextButton").text(quiz.seeNextText());
  return feedbackElement;  
}

function makeFinalFeedbackElement(quiz) {
  let finalFeedbackElement = $(".jsFinalFeedback").clone();
  finalFeedbackElement.find(".jsResultsText").text(quiz.finalFeedbackText());
  return finalFeedbackElement;
}

// listen for when user submits answer to a question
function handleAnswers(quiz, dogBreed) {
 
  $("#frontElement").on("submit", "form[name='answerList']", function(event) {
    event.preventDefault();
     
    $('.container.flipEffect').toggleClass('flipped');
    //  note that answer is a string here e.g. 'Welsh Terrier'
    let answer = $("input[name='user-answer']:checked").val();
    quiz.scoreUserAnswer(answer);
    let question = quiz.currentQuestion();
    let correctAnswer = quiz.breedChoiceData[quiz.currentQuestionIndex].choices[quiz.breedChoiceData[quiz.currentQuestionIndex].correctChoiceIndex];
    let isCorrect = (answer === correctAnswer); 
    handleSeeNext(quiz, dogBreed);  // adds listener for "Next" button
    $("#backElement").html(makeAnswerElement(isCorrect, correctAnswer, quiz, dogBreed));
    
  });
}

// this function just listens for when the user clicks the next button
// element - if there are more questions, it displays the next one,
// otherwise it displays the final feedback
function handleSeeNext(quiz, dogBreed, currentQuestionElem) {

  $("#backElement").on("click", ".jsNextButton", function(event) {
    if (quiz.currentQuestionIndex < quiz.breedChoiceData.length - 1) {
      // manually remove event listener on the `.jsNextButton` because they
      // otherwise continue occuring for previous, inactive questions
      $("#backElement").off("click", ".jsNextButton");
      quiz.currentQuestionIndex ++;
      $("#frontElement").html(makeQuestionElement(quiz, dogBreed));
      $('.container.flipEffect').toggleClass('flipped');
    }
    else {
      $("#frontElement").html(makeFinalFeedbackElement(quiz))
      $('.container.flipEffect').toggleClass('flipped');
    }
  });
}
 
function startNewQuiz() {
  $("#frontElement").on("click", ".jsRestartGameButton, .jsPlayAgainButton", function(event){
    event.preventDefault();
    // this removes all event listeners from the containers because we 
    // want them set afresh by `beginQuizHandler`
    $("#frontElement").off();
    $("#backElement").off();
    beginQuizHandler();
  });
}

// display the quiz start content, and listen for
// when the user clicks "start"
function beginQuizHandler() {
	//  note that this inserts the html from the "jsStart"
	//  div inside frontElement - confirmed in web inspector
  $("#frontElement").html($("#jsStart").clone());
  $("#frontElement").on("click", ".jsStartQuizButton", function(event) {
    const quiz = getNewQuiz();
    const dogBreed = getNewDogBreed();
    event.preventDefault();
   // When .html() is used to set an element's (frontElement here) content , any content that 
   // was in that element is completely replaced by the new content. Additionally,
   // jQuery removes other constructs such as data and event handlers from 
   // child elements before replacing those elements with the new content. This 
   // explains why the "#jsStart" content cloned and added to the frontElement
   // above disappears as soon as we click the start button.
    $("#frontElement").html(makeQuestionElement(quiz, dogBreed));
    handleAnswers(quiz, dogBreed); //  adds listener for "Submit" button
    startNewQuiz();      //  adds listener for "Start Over" button
  });
}

$(document).ready(function(){

	beginQuizHandler();

   
});

