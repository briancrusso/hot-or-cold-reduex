$(document).ready(function() {
    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);
    });

    /*--- Hide information modal box ---*/
//$("a.new").click(NewGame() {
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });
                var ComputerNum = Math.floor(Math.random() * 101); console.log(ComputerNum);
                var count = 0
                    //New Game//
                    //  $('.new').click(function newGame() {
                $('.button').click(function() {
                    var userGuess = $("input[name=userGuess]").val();
                    $('ul#guessList').append(userGuess + " " + ",");
                    console.log(userGuess);
                    $('#guessList ul').append("<li>" + userGuess + "</li>");
                    count++;
                    $('span#count').empty('span#count');
                    $('span#count').append(count);
                    if (+userGuess > ComputerNum) {
                        if ((+userGuess - ComputerNum) > 49) {
                            $('ul#feedback').empty("li.guess");
                            $('ul#feedback').append("<li>" + "ice cold" + "</li>");
                        } else if ((+userGuess - ComputerNum) > 29) {
                            $('ul#feedback').empty("li.guess");
                            $('ul#feedback').append("<li>" + "cold" + "</li>");
                        } else if ((+userGuess - ComputerNum) > 19) {
                            $('ul#feedback').empty("li.guess");
                            $('ul#feedback').append("<li>" + "warm" + "</li>");
                        } else if ((+userGuess - ComputerNum) > 9) {
                            $('ul#feedback').empty("li.guess");
                            $('ul#feedback').append("<li>" + "hot" + "</li>");
                        } else if ((+userGuess - ComputerNum) > 0) {
                            $('ul#feedback').empty("li.guess");
                            $('ul#feedback').append("<li>" + "very hot" + "</li>");
                        }
                    } else if (+userGuess < ComputerNum) {
                        if ((+userGuess - ComputerNum) > 49) {
                            $('ul#feedback').empty("li.guess");
                            $('ul#feedback').append("<li>" + "ice cold" + "</li>");
                        } else if ((ComputerNum - +userGuess) > 29) {
                            $('ul#feedback').empty("li.guess");
                            $('ul#feedback').append("<li>" + "cold" + "</li>");
                        } else if ((ComputerNum - +userGuess) > 19) {
                            $('ul#feedback').empty("li.guess");
                            $('ul#feedback').append("<li>" + "warm" + "</li>");
                        } else if ((ComputerNum - +userGuess) > 9) {
                            $('ul#feedback').empty("li.guess");
                            $('ul#feedback').append("<li>" + "hot" + "</li>");
                        } else if ((ComputerNum - +userGuess) > 0) {
                            $('ul#feedback').empty("li.guess");
                            $('ul#feedback').append("<li>" + "very hot" + "</li>");
                        }
                    } else if (+userGuess === ComputerNum) {
                        $('ul#feedback').empty("li.guess");
                        $('ul#feedback').append("<li>" + "You got it!" + "</li>");
                    }
                });
//    });
});
