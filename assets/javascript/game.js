$(document).ready(function() 
{
    
    var score;
    var goal;
    var current;
    var RandomArray = [];
    var wins = 0;
    var losses = 0;

    // var goalElement = document.getElementById("target");
    // var scoreElement = document.getElementById("score");
    // var winsElement = document.getElementById("wins");
    // var lossesElement = document.getElementById("losses");

    function RandomNum(min, max) 
    {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    function startgame() 
    {
        RandomArray = [];
        for (var i = 0; i < 4; i++) 
        {
            RandomArray.push(RandomNum(1, 12));
        }
        score = 0;
        // scoreElement.innerHTML = score;
        $("#score").text(score)
        goal = RandomNum(19, 120);
        // goalElement.innerHTML = goal;    
        $("#goal").text(goal);        
        console.log(RandomArray);
    }

    $(".gem").click(function(event) 
    {
        current = RandomArray[this.id];
        current = parseInt(current);
        score += current;
        // scoreElement.innerHTML = score;

        $("#score").text(score);
        checkWin();
        console.log(current, score, goal);
    });

    function checkWin() 
    {
        if (score == goal) 
        {
            alert("You Win!");
            wins++;
            // winsElement.innerHTML = wins;
            $("#wins").text(wins);
            startgame();
        } else if ( score > goal) 
        {
            alert("You Lose!");
            losses++;
            // lossesElement.innerHTML = losses;
            $("#losses").text(losses);
            startgame();
        }
    }

    startgame();

});

// Notes: jquery add/remove class:  $("a").addClass("test");  .removeClass  Element is a, class is test.
// 