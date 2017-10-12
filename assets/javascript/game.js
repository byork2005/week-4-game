$(document).ready(function() 
{
    
    var score;
    var goal;
    var current;
    var RandomArray = [];
    var wins = 0;
    var losses = 0;

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
        $("#score").text("Score: " + score);
        goal = RandomNum(19, 120);   
        $("#goal").text("Goal: " + goal);        
        console.log(RandomArray);
    }

    $(".gem").click(function(event) 
    {
        current = RandomArray[this.id];
        current = parseInt(current);
        score += current;

        $("#score").text("Score: " + score);
        checkWin();
        console.log(current, score, goal);
    });

    function checkWin() 
    {
        if (score == goal) 
        {
            alert("You Win!");
            wins++;
            $("#wins").text("Wins: " + wins);
            startgame();
        } else if ( score > goal) 
        {
            alert("You Lose!");
            losses++;
            $("#losses").text("Losses: " + losses);
            startgame();
        }
    }

    startgame();

});