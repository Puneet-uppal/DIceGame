//setting for left dice
var randomnumber1=Math.random();
randomnumber1=randomnumber1*6+1;
randomnumber1=Math.floor(randomnumber1);

var randomdice=("images/dice"+randomnumber1+".png");    //using concatination
document.querySelectorAll("img")[0].setAttribute("src",randomdice);

//setting for right dice
var randomnumber2=Math.random();
randomnumber2=randomnumber2*6+1;
randomnumber2=Math.floor(randomnumber2);

var randomdice2=("images/dice"+randomnumber2+".png");    //using concatination
document.querySelectorAll("img")[1].setAttribute("src",randomdice2);

//setting condition
if(randomnumber1>randomnumber2)
document.querySelector("h1").textContent="Player-1 Wins!";
else if(randomnumber2>randomnumber1)
document.querySelector("h1").textContent="Player-2 Wins!";
else
document.querySelector("h1").textContent="Draw!!";

