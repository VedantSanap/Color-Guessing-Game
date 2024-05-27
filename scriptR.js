// var colors=
// [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]
// Refracted code

var numSquares = 6
var colors = [];
var pickedColor;
var sqaures =  document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton =  document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init()
{
    setupModeButtons();
    setupSquares();
    reset();
}


function setupModeButtons()
{
    for(var i=0 ; i<modeButtons.length ; i++)
    {
        modeButtons[i].addEventListener("click",function()
        {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            // if (this.textContent==="easy") {
            //     numSquares=3; }
            // else{ numSquares=6; }
            reset();
        })
    }
}


function setupSquares()
{
    for(var i=0; i<sqaures.length;i++)
    {
        // add click listerners to squares
        sqaures[i].addEventListener("click", function()
        {
            //grab color of clicked square
            var clickedColor=this.style.background

            //compare color to pickedcolor
            if (clickedColor===pickedColor) {
                changeColor(clickedColor);
                messageDisplay.textContent = "Correct!!";
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again?"
            }
            else
            {
                this.style.background= "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset()
{
    colors = generateRandomColors(numSquares);
    //picks a new color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "NEW COLOR";
    messageDisplay.textContent =  "";
    // change color of squares
    for(var i =0 ; i< sqaures.length; i++)
    {
        if(colors[i])
        {
            sqaures[i].style.display  = "block";
            sqaures[i].style.background = colors[i];
        }
        else
        {
            sqaures[i].style.display = "none";
        }
    }

    h1.style.background = "steelblue";

}



resetButton.addEventListener("click", function()
{
    reset();
})




function changeColor(color)
{
    //loop through all square
    for(var i=0;i<sqaures.length;i++)
    {
        //chnage each color to match given color
        sqaures[i].style.background = color;
    }

}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num)
{
    // make an array
    var arr = [];

    // arepeat num times
    for(var i=0; i<num ; i++)
    {
        //get random color and push into arr
        arr.push(randomColor());

    }

    // return that array
    return arr;
}


function randomColor()
{
    //pick a RED color from 0 - 255
    var r = Math.floor(Math.random()*256);
    
    //pick a GREEN color from 0 - 255
    var g = Math.floor(Math.random()*256);
    
    //pick a BLUE color from 0 - 255
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r  +  ", " + g + ", "+ b + ")";

}