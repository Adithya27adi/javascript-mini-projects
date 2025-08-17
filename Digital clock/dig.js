function updateClock(){
    let now=new Date();
    let hr=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;


    const hours=document.getElementById("hours");
    const minutes=document.getElementById("minutes");
    const seconds=document.getElementById("seconds");
    hours.textContent=hr;
    minutes.textContent=min;
    seconds.textContent=sec;
    

}
setInterval(updateClock,1000)