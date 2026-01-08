// 1) Напишите функцию, которая проверяет, содержит ли строка только цифры. Используйте регулярные выражения
const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
}

console.log(containsOnlyDigits("7777")); 
console.log(containsOnlyDigits("77фа77")); 

// 2
setInterval(() => {
    console.log("Прошла секунда");
}, 1000);



// 3
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;

        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}

count();



// 4
let time = 10;
let interval = 0;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", () => {
    if (interval) return;

    interval = setInterval(() => {
        timer.textContent = time;
        time--;

        if (time < 0) {
            clearInterval(interval);
        }
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = 0;
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = 0;
    time = 10;
    timer.textContent = time;
});



// 5
const box = document.getElementById("box");

box.addEventListener("click", () => {
    box.classList.toggle("active");
});


// 6
const xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);

xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data); 
}
};
xhr.send();

//7


