const btn= document.querySelector(".btn");
const jokeContainer= document.querySelector(".juke");
const url= "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


const getJoke=() =>{
    fetch(url)
    .then(data=> data.json())
    .then(item =>{
        jokeContainer.textContent= `${item.joke}`;
    });
}
getJoke();
btn.addEventListener("click", getJoke);