let cats = [];
let cat_num = 20;

function showLove() {
    const heart = document.querySelector(".hearts");
    for (let i = 0; i < cat_num; i++) {
        cats[i] = document.createElement("img");
        cats[i].src = "images/catball.png";
        cats[i].style.left = Math.random() * 1500 + "px";
        cats[i].style.right = Math.random() * 1500 + "px";
        cats[i].style.top = Math.random() * 1500 + "px";
        cats[i].style.bottom = Math.random() * 1500 + "px";
        cats[i].classList.add("heart")
        cats[i].classList.add("hearts-animation");
        heart.append(cats[i]);
    }
    for (let i = 0; i < cat_num; i++) {
        cats[i].addEventListener("animationend", AnimationHandler, false);
    }
}

function AnimationHandler () {
    for (let i = 0; i < cat_num; i++) {
        cats[i].remove();
    }
}

function runAway() {
    const noButton = document.getElementById("noButton");
    noButton.style.position = "relative";
    noButton.style.left = Math.random() * 200 + "px";
    noButton.style.right = Math.random() * 200 + "px";
    noButton.style.top = Math.random() * 200 + "px";
    noButton.style.bottom = Math.random() * 200 + "px";
}

function swapButtons() {
    const buttonsContainer = document.querySelector('.buttons');
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    // Устанавливаем атрибут tabindex для обоих кнопок, чтобы сохранить фокус
    if (noButton.getAttribute('tabindex') === '1') {
        noButton.setAttribute('tabindex', '2');
        yesButton.setAttribute('tabindex', '1');
        buttonsContainer.insertBefore(yesButton, noButton);
    } else {
        noButton.setAttribute('tabindex', '1');
        yesButton.setAttribute('tabindex', '2');
        buttonsContainer.insertBefore(noButton, yesButton);
    }

    // Передвигаем кнопки в DOM

}
