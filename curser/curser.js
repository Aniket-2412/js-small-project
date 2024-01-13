var a=document.querySelector(".main");
var b=document.querySelector(".curser");

a.addEventListener("mousemove",function(dets){
    b.style.left=dets.x+"px";
    b.style.top=dets.y+"px";
})