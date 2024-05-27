// var colors=
// [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]

var numSquares = 6
var colors = generateRandomColors(numSquares);

var sqaures =  document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton =  document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares );
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0 ; i< sqaures.length; i++)
    {
        if(colors[i])
        {
            sqaures[i].style.background = colors[i];
        }
        else
        {
            sqaures[i].style.display= "none";
        }
    }
    
    
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0 ; i< sqaures.length; i++)
    {

            sqaures[i].style.background = colors[i];
            sqaures[i].style.display= "block";
    }
});


resetButton.addEventListener("click", function()
{
    // generate all new colors
    colors = generateRandomColors(numSquares);

    //piks a new color from array
    pickedColor = pickColor();

    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "NEW COLOR"

    // change color of squares
    for(var i =0 ; i< sqaures.length; i++)
    {
        sqaures[i].style.background = colors[i];
    }

    h1.style.background = "steelblue";

    messageDisplay.textContent =  "";
})


colorDisplay.textContent = pickedColor;

for(var i=0; i<sqaures.length;i++)
{
    // add initial color to squares
    sqaures[i].style.background = colors[i];

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
    })
}

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