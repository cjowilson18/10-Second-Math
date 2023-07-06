$(document).ready(function () {
 var timeRemaining = 10;
 var currentScore=0;
$('#starter').click(function(){
    letsPlay();
    timerGo();
    console.log("start");
    timeRemaining=10;
    currentScore=0;
    updateCurrentScore(0);
    updateTimeRemaining(0);

})

   
    var numberGenEquation = function () {
        var numA = Math.floor(Math.random() * 10);
        var numB = Math.floor(Math.random() * 10);
        var equation = String(numA) + "+" + String(numB);
        var answer = numA + numB;
        var problem = [equation, answer];
        return problem;
    }
    var updateCurrentScore= function (point){
        currentScore+=point;
        $('.scoreCounter').text("Current Score: " + currentScore)
    }
    var updateTimeRemaining = function (amount) {
        timeRemaining += amount;
        $('#timer').text("Time Remaining: " + timeRemaining + 's');
    }

    var letsPlay = function () {
        var qs = numberGenEquation();
        console.log(qs);
        $('#questions').text(qs[0]);

        $('.answers').off('keydown');

        $('.answers').keydown(function (event) {
            if (event.key === "Enter") {
                var userInput = $(this).val();
                console.log(userInput)
                checkCorrect(userInput, qs);
                $(this).val('');
            }
        });
    }
    var timerGo= function() {
        var interval= setInterval(function (){
            updateTimeRemaining(-1);
            $('#timer').text('Time Remaining: ' + (timeRemaining) + 's')
            if (timeRemaining === 0) {
                clearInterval(interval);
                alert('Time is up!');
            }
        },1000);
    }

    var checkCorrect = function (userInput, qs) {
        if (Number(userInput) === Number(qs[1])) {
            updateTimeRemaining(+1);
            updateCurrentScore(1);
            letsPlay();
        }
        console.log(userInput);
        $('#quanitity').val('');
    }
});