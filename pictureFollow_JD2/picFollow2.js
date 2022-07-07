window.addEventListener('load',function(e){
    var small_pic = document.querySelector('.small_pic');
    var big_pic_container = document.querySelector('.big_pic_container');
    var mask = document.querySelector('.mask');
    var img = document.querySelector('.big_pic');
    small_pic.addEventListener('mouseover', function(e) {
        mask.style.display = 'block';
        big_pic_container.style.display = 'block';
        small_pic.addEventListener('mousemove', function(e) {
            var small_picX = small_pic.getBoundingClientRect().x;
            var small_picY = small_pic.getBoundingClientRect().y;
            var maskX = e.pageX - small_picX - mask.clientWidth/2;
            var maskY = e.pageY - small_picY - mask.clientHeight/2;
            if(maskX < 0) {
                maskX = 0;
            }
            if(maskY < 0) {
                maskY = 0;
            }
            if(maskX > (small_pic.clientWidth - mask.clientWidth)){
                maskX = small_pic.clientWidth - mask.clientWidth
            }
            if(maskY > (small_pic.clientHeight - mask.clientHeight)){
                maskY = small_pic.clientHeight - mask.clientHeight
            }
            setPosition(mask, maskX, maskY);
            var scale = (img.width - big_pic_container.clientWidth) / (small_pic.clientWidth - mask.clientWidth)
            setPosition(img, -maskX*scale, -maskY*scale)
        })
    })
    small_pic.addEventListener('mouseout', function(e) {
        mask.style.display = 'none';
        big_pic_container.style.display = 'none';
    })
    function setPosition(element, x, y) {
        element.style.top = y + 'px';
        element.style.left = x + 'px';
    }
})