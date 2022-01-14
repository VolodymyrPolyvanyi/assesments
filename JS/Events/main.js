function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const div1 = document.getElementById('1');
div1.onclick = function(event) {
    const color1 = getRandomInt(255);
    const color2 = getRandomInt(255);
    const color3 = getRandomInt(255);
    event.currentTarget.style.background = `rgb(${color1}, ${color2}, ${color3})`;
}

const div2 = document.getElementById('2');
div2.onclick = function(event) {
    event.stopPropagation();

    const color1 = getRandomInt(255);
    const color2 = getRandomInt(255);
    const color3 = getRandomInt(255);
    event.currentTarget.style.background = `rgb(${color1}, ${color2}, ${color3})`;
}

const div3 = document.getElementById('3');
div3.onclick = function(event) {
    const color1 = getRandomInt(255);
    const color2 = getRandomInt(255);
    const color3 = getRandomInt(255);
    event.currentTarget.style.background = `rgb(${color1}, ${color2}, ${color3})`;
}
