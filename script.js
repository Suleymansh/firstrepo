const btn = document.querySelector('.btn-one');
const menuTop = document.querySelector('.canvasMenu');
const btnTwo = document.querySelector('.btn-two');


const topTo =()=>{
    menuTop.style.transform = "translate(0,0)"
    menuTop.style.transition = "1s"
}

btn.onclick = topTo

const bottomTo=()=>{
    menuTop.style.transform = "translate(0,-500px)"
    menuTop.style.transition = "1s"
}

btnTwo.onclick = bottomTo
