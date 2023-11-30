const text = document.querySelector(".right");
    function changeText(){
        setTimeout(()=>{
            text.textContent="Coder"
        },0)
        setTimeout(()=>{
            text.textContent="Freelancer"
        },4000)
        setTimeout(()=>{
            text.textContent="Ninja"
        },8000)
        
    }
    changeText()
    setInterval(changeText,12000);