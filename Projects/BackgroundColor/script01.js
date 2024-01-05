let mainButton = document.querySelector("button");
let body = document.body;
let currentColor = document.querySelector(".color");

function randomColorGenerator(){
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    let randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;

}

mainButton.addEventListener("click", ()=>{
    let randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})