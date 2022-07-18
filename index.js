
let a;
let date;
let time;
let hour;
let minute;
let second;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    
    a = new Date();
    hour = a.getHours();
    minute = a.getMinutes();
    second = a.getSeconds();
    date = a.toLocaleDateString(undefined, options);
    time = formatTime(hour) + ":" + formatTime(minute) + ":" + formatTime(second);
    document.getElementById('time').innerHTML = time + " <br> On  " + date;
    
    function formatTime(formattime){
        return formattime < 10 ? `0${formattime}` : formattime;
    }
    
}, 1000);

// if(a.getHours() < 10){
//     time = "0" +a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
// }
// else if(a.getMinutes() < 10){
//     time = a.getHours() + ":" + "0"+ a.getMinutes() + ":" + a.getSeconds();
// }
// else if(a.getSeconds() < 10){
//     time = a.getHours() + ":" +  a.getMinutes() + ":" + "0" + a.getSeconds();
// }
// else{
//  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
// }