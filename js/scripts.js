/***************************
* Author : Haris zaharakis *
* Created : 19.3.2017      *
* Updated : 25.3.2017      *
***************************/

/* Divide and conquer is the fastest method/algorithm to solve this problem.
*  Each time you guess you split the number range by half.
*  Example: Computer's choice:78
*  You start with 50.Not the answer but you have eliminated 50 choices.
*  Then choose (50/2=25 so 50+25=75) 75.
*  Again not the answer but you have eliminated 75 choices with only 2 guesses.
*  Continue like this till you get the answer. 
*  Divide & conquer method demonstrated with autoguess button */

var number = 50;
var count = 1;
var nval = 0;  //nval = numeric value
var disp= "";

var rand = Math.floor(Math.random()*100+1);
var count = 1;
var btnPressed = false;
var found = false;

//variables for autoguess button/function 
var higher = false;
var lower = false;
var range = 50;

function btn0()
{
    nval = 0;
    btnPressed = true;
    disp = document.getElementById("display");
    if(!found)
    {
        disp.innerHTML += nval;
    }
    else
    {
        disp.innerHTML = nval;
        found = false;
    }
}

function btn1()
{
    nval = 1;
    btnPressed = true;
    disp = document.getElementById("display");
    if(!found)
    {
        disp.innerHTML += nval;
    }
    else
    {
        disp.innerHTML = nval;
        found = false;
    }
}

function btn2()
{
    nval = 2;
    btnPressed = true;
    disp = document.getElementById("display");
    if(!found)
    {
        disp.innerHTML += nval;
    }
    else
    {
        disp.innerHTML = nval;
        found = false;
    }
}

function btn3()
{
    nval = 3;
    btnPressed = true;
    disp = document.getElementById("display");
    if(!found)
    {
        disp.innerHTML += nval;
    }
    else
    {
        disp.innerHTML = nval;
        found = false;
    }
}

function btn4()
{
    nval = 4;
    btnPressed = true;
    disp = document.getElementById("display");
    if(!found)
    {
        disp.innerHTML += nval;
    }
    else
    {
        disp.innerHTML = nval;
        found = false;
    }
}

function btn5()
{
    nval = 5;
    btnPressed = true;
    disp = document.getElementById("display");
    if(!found)
    {
        disp.innerHTML += nval;
    }
    else
    {
        disp.innerHTML = nval;
        found = false;
    }
}

function btn6()
{
    nval = 6;
    btnPressed = true;
    disp = document.getElementById("display");
    if(!found)
    {
        disp.innerHTML += nval;
    }
    else
    {
        disp.innerHTML = nval;
        found = false;
    }
}

function btn7()
{
    nval = 7;
    btnPressed = true;
    disp = document.getElementById("display");
    if(!found)
    {
        disp.innerHTML += nval;
    }
    else
    {
        disp.innerHTML = nval;
        found = false;
    }
}

function btn8()
{
    nval = 8;
    btnPressed = true;
    disp = document.getElementById("display");
    if(!found)
    {
        disp.innerHTML += nval;
    }
    else
    {
        disp.innerHTML = nval;
        found = false;
    }
}

function btn9()
{
    nval = 9;
    btnPressed  = true;
    disp = document.getElementById("display");
    if(!found)
    {
        disp.innerHTML += nval;
    }
    else
    {
        disp.innerHTML = nval;
        found = false;
    }
}

function btnClear()
{
    //reset input
    disp = document.getElementById("display");
    disp.innerHTML = "";
    
    //reset lower,higher,found and btnPressed to false
    lower = false;
    higher = false;
    found = false;
    btnPressed = false;    
    
    //reset range and number to 50
    range = 50;
    number = 50;
}

function btnGuess()
{
    if(btnPressed)
    {
        number = Number(disp.innerHTML);
        comparison(number,rand);
    }
    else
    {
        alert("Please make a guess.");
    } 
}

function comparison(number,rand)
{
    if(number<rand)
    {
         alert("Higher than "+number);
         higher = true;
         lower = false;
         count++
         
         //reset btnPressed to false
         btnPressed = false;
    
         //reset input
         disp = document.getElementById("display");
         disp.innerHTML = "";
    }
    else if(number>rand)
    {
         alert("Lower than "+number);
         lower = true;
         higher = false;
         count++
         
         //reset btnPressed to false
         btnPressed = false;
    
         //reset input
         disp = document.getElementById("display");
         disp.innerHTML = "";
    }
    else
    {
         alert("Correct :)");
         
         //set rand to a new random number 
         rand = Math.floor(Math.random()*100+1);
         //reset btn Pressed to false
         btnPressed = false;
         found = true;
         
         disp = document.getElementById("display");
         if(count==1)
         {
             disp.innerHTML = "Wow just one guess!Try the lottery! :)";
         }
         else
         {
             disp.innerHTML = "Correct guess after "+count+" times.";
         }
         
         //reset count to 1;
         count = 1;
         //reset range to 50
         range = 50;
         newrand();
    }
}

function newrand()
{
    rand = Math.floor(Math.random()*100+1);
}

function btnAutoguessDC()
{
   do
   {
       btnPressed = true;
       
       if(higher)
       {
           if(range != 1)
           {
               range = Math.floor(range/2);
               number += range;
               alert("Autoguess: "+number);
           }
           else
           {
               number++
               alert("Autoguess: "+number);
           }
       }
       else if(lower)
       {
           if(range !=1)
           {
               range = Math.floor(range/2);
               number -= range;
               alert("Autoguess: "+number);
           }
           else
           {
              number--
              alert("Autoguess: "+number);
           } 
       }
       comparison(number,rand);
   }while(!found)  
}
