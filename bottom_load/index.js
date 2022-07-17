window.onload = function() {
    var container = document.querySelector('.container');

    function randomColor() {
        const r = Math.round(Math.random()*255);
        const g = Math.round(Math.random()*255);
        const b = Math.round(Math.random()*255);
        return `rgba(${r}, ${g}, ${b})`
    }

    function createDiv() {
        const div = document.createElement('div');
        div.style.backgroundColor = randomColor()
        container.appendChild(div);
    }
    for (var i=0;i<9;i++){
        createDiv()
    }

    window.onscroll = function() {
        const totalHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const body = window.innerHeight;
        if(scrollTop == (totalHeight  - body)){
            for (var i=0;i<3;i++){
                createDiv()
            }
        }
    }

};
