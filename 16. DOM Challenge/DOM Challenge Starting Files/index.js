document.query

//document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Hi");

var listItem = document.firstElementChild.lastElementChild.querySelector("ul");

var theButton = document.querySelector("button");

theButton.addEventListener("click", handleClick);

function handleClick(){
    document.querySelector("button").style.backgroundColor = "yellow";
}