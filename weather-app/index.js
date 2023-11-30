const searchbtn = document.querySelector(".search");
const input = document.querySelector(".input-field");
const humidity = document.querySelector(".humidity");
const city = document.querySelector(".city");
const wind = document.querySelector(".wind-speed");
const temp = document.querySelector(".temp");
const key = '17aaf41cc5c1d7f6a4f51336cff89c3c'
const url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';
async function checkWeather(mycity){
    const response = await fetch(url + `&q=${mycity}` + `&appid=${key}`);
    let data = await response.json()
    console.log(data);
    if (data.cod == "404") {
        document.querySelector(".prompt").style.display = "block";
        document.querySelector('.weather').style.display = 'none';
        
    } else {
        document.querySelector(".prompt").style.display = "none"
        humidity.textContent = data.main.humidity +'%';
        wind.textContent= `${data.wind.speed} Km/h`;
        city.textContent= data.name;
        temp.textContent= Math.round(data.main.temp) +'°C';
        document.querySelector('.weather').style.display = 'block';
        input.value = "";
    }
    

}


searchbtn.addEventListener("click",(e)=>{
    console.log(input.value)
    checkWeather(input.value);
    
        
})
