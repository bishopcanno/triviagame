var correctAnswers = 0;
var wrongAnswers = 0;
var number = 120;
var intervalId;

$("#startButton").click(function(){
    uponStart();
    run();
});

$("#checkButton").click(function(){
    answerChecker()
});

function uponStart(){
    $("#displayDiv").html("");
    $("#gameBoard").css("opacity", "1");
};

function finalScore(){
    $("#gameBoard").html("<h1>You got " + correctAnswers + " questions correct!</h1>");
    $("#gameBoard").append("<h1>You missed " + wrongAnswers + "</h1>");
    $("#gameBoard").append("<h1>Your final was " + correctAnswers + "/" + wrongAnswers + "</h1>");
    $("#gameBoard").css("color", "yellow");
};

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function decrement() {

    number--;

    $("#timeSpan").html("<h2>" + number + "</h2>");

    if (number === 0) {

        stop();

        alert("Time Up!");

        answerChecker();
    }
}

function stop() {

    clearInterval(intervalId);
}

function answerChecker(){
    for(var i = 1; i <= 27; i++) {
        var radios = document.getElementsByName('questionAnswer'+i);
        for(var j = 0; j < radios.length; j++) {
          var radio = radios[j];
          if(radio.value === "true" && radio.checked) {
            correctAnswers++;
          } else if(radio.value !=="true" && radio.checked){
              wrongAnswers++;
          }
        }
    }
    finalScore();
}

