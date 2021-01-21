const body=document.querySelector('body')

const IMG_NUMBER = 4;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `${imgNumber+1}.jpg`
    body.appendChild(image);
    image.classList.add('bgImg');

}

function genRandom(){
    const number = Math.round(Math.random()*(IMG_NUMBER));
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();