let numberHtml = document.getElementById('number-html');
let numberJs = document.getElementById('number-js');
let numberCss = document.getElementById('number-css');
let numberReact = document.getElementById('number-react');
let htmlBar = document.querySelector('.html-bar');
let jsBar = document.querySelector('.js-bar');
let cssBar = document.querySelector('.css-bar');
let reactBar = document.querySelector('.react-bar');

let counterHtml = 0;
let counterJs = 0;
let counterCss = 0;
let counterReact = 0;
setInterval(() => {
    if(counterHtml == 96){
        clearInterval();
    } else {
        counterHtml += 1;
        numberHtml.innerHTML = counterHtml + '%'
        htmlBar.style.width = `${counterHtml}%`;
    }
}, 10);

setInterval(() => {
    if(counterCss == 86){
        clearInterval();
    } else {
        counterCss += 1;
        numberCss.innerHTML = counterCss + '%'
        cssBar.style.width = `${counterCss}%`;
    }
}, 12);

setInterval(() => {
    if(counterJs == 76){
        clearInterval();
    } else {
        counterJs += 1;
        numberJs.innerHTML = counterJs + '%'
        jsBar.style.width = `${counterJs}%`;
    }
}, 13);

setInterval(() => {
    if(counterReact == 85){
        clearInterval();
    } else {
        counterReact += 1;
        numberReact.innerHTML = counterReact + '%'
        reactBar.style.width = `${counterReact}%`;
    }
}, 13);
