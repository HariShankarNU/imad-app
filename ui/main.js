console.log('Loaded!');
var element=document.getElementById('main');
element.innerHTML="new";

var image=document.getElementById('ima');

var left=0;
function moveright(){
    left=left+10;
    image.style.marginLeft=left+'px'
}
image.onclick=function(){
    var interval=setInterval(moveright,100);
};
