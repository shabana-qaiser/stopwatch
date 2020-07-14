var base
var playPause = 0;
function play(){
    
    playPause = playPause + 1;
    
     if(playPause === 1){
        play();
         document.getElementById("play").add("pause");
         (animationCircle).addClass("addAnimation");
         ("animationCircle.addAnimation").css("animation-play-state","runing");
     }else if(playPause === 2){
        document.getElementById("play").remove("pause"); 
        ("animationCircle").css("animation-play-state","paused");
        playPause = 0;
        stop(); 
     }
}
 

var hour = 00;
var min = 00;
var sec = 00;
var msec = 00;

var hourHeading =document.getElementById("hour")
var minHeading =document.getElementById("min");
var secHeading =document.getElementById("sec");
var msecHeading =document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }else if (sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }if (min >= 60){
        min++
        hourHeading.innerHTML = hour;
        min = 0;
    }
}
function play(){
    interval = setInterval(timer,10)
    
}   

function stop(){
    clearInterval(interval );

}

function reset(){
    hour = 00;
    min = 00;
    sec = 00;
    msec = 00;
    
    hourHeading.innerHTML = hour;
    minHeading.innerHTML= min;
    secHeading.innerHTML= sec;
    msecHeading.innerHTML= msec;
    
    stop();
}

