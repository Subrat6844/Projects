const hexColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for( let i = 0;i < 6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
const start = document.getElementById('start');
const stopper = document.getElementById('stop');
let intervalId;
start.addEventListener('click',(e)=>{
    if(!intervalId){
        intervalId = setInterval(function(){
            document.body.style.backgroundColor = hexColor();
    },1000)
    }
})
stopper.addEventListener('click',(e)=>{
    clearInterval(intervalId)
    console.log('stopped')
    intervalId = null;
})