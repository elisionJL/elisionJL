var timeline = document.querySelectorAll("#timeline");
var line = document.querySelectorAll("#line");
function resizeLine(){
    var windowOH = window.innerHeight;
    var windowOW = window.innerWidth;
    var Lwidth = 0.005 * windowOW;
    var Lheight = 0.8 * windowOH;
    line[0].style.width = Lwidth+'px'; 
    line[0].style.height = Lheight+'px';
    var marginTopHeight =0.1 * windowOH;
    line[0].style.marginTop = marginTopHeight+'px';
    line[0].style.marginBottom = marginTopHeight+'px';
    moveCircle(Lwidth);
}
function moveCircle(lineWidth){
    var LineHeight = line[0].clientHeight;
    var lineStyle = window.getComputedStyle(line[0]);
    var lineMarginTop = lineStyle.getPropertyValue('margin-top');
    var circleList = document.querySelectorAll(".circle");
    var outerCircleList = document.querySelectorAll(".outerCircle");
    for(var i = 0; i < circleList.length; i++){
        var topHeight = parseFloat(LineHeight/(circleList.length + 1)) * parseFloat(i + 1) + parseFloat(lineMarginTop);
        circleList[i].style.top = topHeight + 'px';
        outerCircleList[i].style.top = (topHeight-5) + 'px';
    }
}
let mainText = document.querySelectorAll(".mainText");
let circles = document.querySelectorAll(".circle");
function changeDisplay(choice){
    for(var i = 0; i < 2; ++i){
        mainText[i].style.display = 'none'
    }
    mainText[choice].style.display = 'block'
}
circles[0].addEventListener('click', function(){ return changeDisplay(0)});
circles[1].addEventListener('click', function(){ return changeDisplay(1)});
window.onload = resizeLine;
window.onresize = resizeLine;
