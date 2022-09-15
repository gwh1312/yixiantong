document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'

window.addEventListener('load', function(){
    FastClick.attach(document.body)
}, false);
document.documentElement.addEventListener('touchmove',function(e){  //注册触动事件
    if(e.touches.length >1){
        e.preventDefault()
    }
})