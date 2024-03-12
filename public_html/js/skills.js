let numberHtml = document.getElementById('number-html');
let numberJs = document.getElementById('number-js');
let numberCss = document.getElementById('number-css');
let numberReact = document.getElementById('number-react');
let numberNodejs = document.getElementById('number-nodejs');
let numberSql = document.getElementById('number-sql');
let htmlBar = document.querySelector('.html-bar');
let jsBar = document.querySelector('.js-bar');
let cssBar = document.querySelector('.css-bar');
let reactBar = document.querySelector('.react-bar');
let nodejsBar = document.querySelector('.nodejs-bar');
let sqlBar = document.querySelector('.sql-bar');

    window.onload = () => {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    function callBack(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                let counterHtml = 0;
                let counterJs = 0;
                let counterCss = 0;
                let counterReact = 0;
                let counterNodejs = 0;
                let counterSql = 0;
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
                    if(counterCss == 87){
                        clearInterval();
                    } else {
                        counterCss += 1;
                        numberCss.innerHTML = counterCss + '%'
                        cssBar.style.width = `${counterCss}%`;
                    }
                }, 12);
                
                setInterval(() => {
                    if(counterJs == 90){
                        clearInterval();
                    } else {
                        counterJs += 1;
                        numberJs.innerHTML = counterJs + '%'
                        reactBar.style.width = `${counterJs}%`;
                    }
                }, 13);

                setInterval(() => {
                    if(counterReact == 85){
                        clearInterval();
                    } else {
                        counterReact += 1;
                        numberReact.innerHTML = counterReact + '%'
                        jsBar.style.width = `${counterReact}%`;
                    }
                }, 13);

                setInterval(() => {
                    if(counterNodejs == 70){
                        clearInterval();
                    } else {
                        counterNodejs += 1;
                        numberNodejs.innerHTML = counterNodejs + '%'
                        nodejsBar.style.width = `${counterNodejs}%`;
                    }
                }, 13);

                setInterval(() => {
                    if(counterSql == 55){
                        clearInterval();
                    } else {
                        counterSql += 1;
                        numberSql.innerHTML = counterSql + '%'
                        sqlBar.style.width = `${counterSql}%`;
                    }
                }, 13);
            } 
        });
    }
    let observer = new IntersectionObserver(callBack, options);
    let target = document.querySelector('.skills-container');
    observer.observe(target);
    }
