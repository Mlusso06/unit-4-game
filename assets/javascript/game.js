

    // This is to make sure the DOM is fully loaded before running




    // List of Global Variables 

    // randomNum math - a number between 120 and 19 = target for the user
    var randomNum = Math.floor(Math.random() * (120 - 19) + 19);
    // taget number for the user = the total by collecting gemstones should update as gems are clicked
    var targetNum;
    //wins and losses should update as the user wins or losses
    var wins = 0;
    var loss = 0;

    // random numbers for each of my gemstones (1 through 12)
    var blueD = Math.floor(Math.random() * (12 - 1) + 1);
    var redG = Math.floor(Math.random() * (12 - 1) + 1);
    var greenG = Math.floor(Math.random() * (12 - 1) + 1);
    var crazyOp = Math.floor(Math.random() * (12 - 1) + 1);

    // * The random number shown at the start of the game should be between 19 - 120.
    console.log(randomNum)
    // * Each crystal should have a random hidden value between 1 - 12.
    console.log(blueD);
    console.log(redG);
    console.log(greenG);
    console.log(crazyOp);

    // targetNum starts at 0
    $("#userTotal").html(targetNum);
    //    * The player will be shown a random number at the start of the game.
    $("#secretScore").html(randomNum);


    $(document).ready(function () {
    ///
    //Main game's functions
    function resetGm() {
        randomNum = Math.floor(Math.random() * (120 - 19) + 19);
        blueD = Math.floor(Math.random() * (12 - 1) + 1);
        redG = Math.floor(Math.random() * (12 - 1) + 1);
        greenG = Math.floor(Math.random() * (12 - 1) + 1);
        crazyOp = Math.floor(Math.random() * (12 - 1) + 1)
        targetNum = 0;

        // page at reset
        $("#secretScore").html(randomNum);
        $("#userTotal").html(targetNum);
        startGm()
    }

    function startGm() {
        randomNum = Math.floor(Math.random() * (120 - 19) + 19);
        blueD = Math.floor(Math.random() * (12 - 1) + 1);
        redG = Math.floor(Math.random() * (12 - 1) + 1);
        greenG = Math.floor(Math.random() * (12 - 1) + 1);
        crazyOp = Math.floor(Math.random() * (12 - 1) + 1)
        targetNum = 0;

        // page at start of the game
        $("#secretScore").html(randomNum);
        $("#userTotal").html(targetNum);


        //    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
        //      * Your game will hide this amount until the player clicks a crystal.
        $("#blueD").attr("value", blueD);
        var gemValue = $("#blueD").attr("value");
        console.log("blueDiaVal  " + gemValue);

        $("#redG").attr("value", redG);
        var gemValue = $("#redG").attr("value");
        console.log("redGemVal  " + gemValue);

        $("#greenG").attr("value", greenG);
        var gemValue = $("#greenG").attr("value");
        console.log("greenGemVal  " + gemValue);

        $("#crazyOp").attr("value", crazyOp);
        var gemValue = $("#crazyOp").attr("value");
        console.log("crazyOpVal  " + gemValue);


        // clicking any gemStone will give it a value, and update the user total score
        $(".gemStone").off().on('click', function () {

            // adding the value of the "this gemstone" to the targetNum
            var curVal = $(this).attr("value");
            targetNum = parseInt(targetNum) + parseInt(curVal);
            console.log("Gemvalue: " + curVal);
            console.log("FinalUservalue  " + targetNum);
            $("#userTotal").html(targetNum);

            if (randomNum === targetNum) {
                //    * The player wins if their total score matches the random number from the beginning of the game.
                alert("Winner");
                wins++;
                $("#wins").html(wins);
                $("#userTotal").html(0);
                //    * The game restarts whenever the player wins or loses.
                resetGm();

            }
            //    * The player loses if their score goes above the random number.
            else if (targetNum > randomNum) {
                alert("Loser");
                loss++;
                $("#loss").html(loss);
                $("#userTotal").html(0);
                //    * The game restarts whenever the player wins or loses.
                resetGm();


            }
        });

        //      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

        //    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.




    }
    startGm();

});
