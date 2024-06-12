$(document).ready(function () {
    let gameStarted = false;
    let gameLost = false;

    $(".boundary").mouseover(function () {
        if (gameStarted && !gameLost) {
            $("#status").text("You lose!");
            $(".boundary").addClass("youlose");
            gameLost = true;
            gameStarted = false;
        }
    });

    $("#end").mouseover(function () {
        if (gameStarted && !gameLost) {
            $("#status").text("You win!");
            gameStarted = false;
        }
    });

    $("#start").click(function () {
        $(".boundary").removeClass("youlose");
        $("#status").text("Game started! Reach the 'E' without touching the boundaries.");
        gameLost = false;
        gameStarted = true;
    });

    $("#maze").mouseleave(function () {
        if (gameStarted && !gameLost) {
            $(".boundary").addClass("youlose");
            $("#status").text("You lose!");
            gameLost = true;
            gameStarted = false;
        }
    });
});
