$(document).ready(function() {
    var ComputerNum = Math.floor(Math.random() * 101);
    console.log(ComputerNum);
    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    //New Game//
  //  $('.new').click(function newGame() {
        $('.button').click(function() {
            var userGuess = $("input[name=userGuess]").val();
            console.log(userGuess);
            $('#guessList ul').append("<li>" + userGuess + "</li>");
            if (+userGuess > ComputerNum) {
                if ((+userGuess - ComputerNum) > 49) {
                    console.log("ice cold");
                } else if ((+userGuess - ComputerNum) > 29) {
                    console.log("cold");
                } else if ((+userGuess - ComputerNum) > 19) {
                    console.log("warm");
                } else if ((+userGuess - ComputerNum) > 9) {
                    console.log("hot");
                } else if ((+userGuess - ComputerNum) > 0) {
                    console.log("very hot");
                } else if ((+userGuess - ComputerNum) > 0) {
                    console.log("very hot");
                }
            } else if (+userGuess < ComputerNum) {
                if ((+userGuess - ComputerNum) > 49) {
                    console.log("ice cold");
                } else if ((ComputerNum - +userGuess) > 29) {
                    console.log("cold");
                } else if ((ComputerNum - +userGuess) > 19) {
                    console.log("warm");
                } else if ((ComputerNum - +userGuess) > 9) {
                    console.log("hot");
                } else if ((ComputerNum - +userGuess) > 0) {
                    console.log("very hot");
                } else if ((ComputerNum - +userGuess) > 0) {
                    console.log("very hot");
                }
            } else if (+userGuess === ComputerNum) {
                console.log("you got it!");
            }
        });
 //   });
});
