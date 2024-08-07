let score = 0;
let cross = true;

document.onkeydown = function (e) {
    if (e.key == "ArrowUp") {
        let dino = document.querySelector('.dino');
        dino.classList.add('animationDino');
        setTimeout(() => {
            dino.classList.remove('animationDino');
        }, 700);
    }
    if (e.key == "ArrowRight") {
        let dino = document.querySelector('.dino');
        let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px';
    }
    if (e.key == "ArrowLeft") {
        let dino = document.querySelector('.dino');
        let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + 'px';
    }
    console.log(e.key);
}

setInterval(() => {
    let dino = document.querySelector('.dino');
    let gameOver = document.querySelector('.gameOver')
    let obstacle = document.querySelector('.obstacle')

    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    let offSetX = Math.abs(dx - ox);
    let offSetY = Math.abs(dy - oy);
    console.log(offSetX, offSetY);

    if (offSetX < 113 && offSetY < 52) {
        gameOver.innerHTML= 'Game Over - Reload to start again';
        obstacle.classList.remove('obstacleAni');
        let gameover = new Audio('sound/gameover.wav');
        gameover.play()
    }
    else if (offSetX < 145 && cross) {
        score += 1;
        updateScore(score)
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            let anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-durationlet'));
            let newdur = anidur - 0.1;
            obstacle.style.animationDuration = newdur + 's';
        }, 500)

    }
}, 10)

function updateScore(score) {
    scoreCont.innerHTML = `your score is : ${score}`
}


