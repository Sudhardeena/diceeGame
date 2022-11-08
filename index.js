var randomNumber1= Math.floor(Math.random()*6);
var image =["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
randomImage1=image[randomNumber1];
randomSource1="images/"+randomImage1;

document.querySelector(".img1").setAttribute("src", randomSource1);

var randomNumber2= Math.floor(Math.random()*6);
randomImage2=image[randomNumber2];
randomSource2="images/"+randomImage2;

document.querySelector(".img2").setAttribute("src", randomSource2);

if (randomNumber1>randomNumber2) {
  document.querySelector('h1').innerHTML="⛳Player 1 Wins!";
}

else if (randomNumber1===randomNumber2)  {
  document.querySelector('h1').innerHTML="Draw";
}
else{
  document.querySelector('h1').innerHTML="Player 2 Wins!⛳";
}
