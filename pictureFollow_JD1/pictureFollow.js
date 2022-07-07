window.addEventListener('load', function (e) {
    var smallPic = document.querySelector(".pic_small");
    var bigPic = document.querySelector(".imgSelf");
    var bigPicContainer = document.querySelector(".pic_big");
    var mask = document.querySelector(".mask");

    smallPic.addEventListener('mouseover', function(e){
        mask.style.display = 'block';
        bigPicContainer.style.display = 'block';
        
    });
    smallPic.addEventListener('mouseout', function(e){
        mask.style.display = 'none';
        bigPicContainer.style.display = 'none';
    });
    smallPic.addEventListener('mousemove', function(e){
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        var containerX = smallPic.offsetLeft;
        var containerY = smallPic.offsetTop;
        var maskX = mouseX - containerX - mask.offsetWidth/2;
        var maskY = mouseY - containerY - mask.offsetHeight/2;
        if(maskX < 0 ){
            maskX = 0;
        };
        if(maskX > (smallPic.offsetWidth - mask.offsetWidth)){
            maskX = smallPic.offsetWidth - mask.offsetWidth
        };
        if(maskY < 0 ){
            maskY = 0;
        };
        if(maskY > (smallPic.offsetHeight - mask.offsetHeight)){
            maskY = smallPic.offsetHeight - mask.offsetHeight
        };
        setPosition(mask, maskX, maskY);
        var scale = (bigPic.width -  bigPicContainer.offsetWidth) / (smallPic.offsetWidth - mask.offsetWidth);
        var bigPicX = maskX * scale;
        var bigPicY = maskY * scale;
        setPosition(bigPic, -bigPicX, -bigPicY);        
    });
    function setPosition(target, x, y) {
        target.style.left = x + 'px';
        target.style.top = y + 'px';
    }

})

