//returns a random number and uses it to pull a first image with a corresponding number
var randomNumber1 = Math.floor(Math.random()* (6 - 1) + 1);

var randImg = "dice" + randomNumber1 + ".png";
var randImgSrc1 = "images/" + randImg;
document.querySelector("#img1").setAttribute("src", randImgSrc1);


//returns a random number and uses it to pull a second image with a corresponding number
var randomNumber2 = Math.floor(Math.random()*6+1);
randImgSrc2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelector("#img2").setAttribute("src", randImgSrc2);

//changes the innerHTML of h1
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Won!";
} 

//reloads page onclick
const refreshButton = document.querySelector("button");
const refreshPage = () => {
  location.reload();
}
refreshButton.addEventListener('click', refreshPage)
