button = document.querySelector('button')

function changeColor(){
    let randRed = Math.random() * 256;
    let randGreen = Math.random() * 256;
    let randBlue = Math.random() * 256;

    document.body.style.backgroundColor = `rgb(${randRed}, ${randBlue}, ${randGreen})`;
    console.log(randRed, randGreen, randBlue);
}

button.addEventListener('click', changeColor);