document.querySelector("button").addEventListener("click", () => {
    let city = document.querySelector("input").value;
    let data;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1ea347fff2762fd83059ea3e45daab09`)
    .then ((obj) => obj.json())
    .then ((obj)=> {
        document.querySelector(".city").innerText = `Tempo a ${obj.name}`
        document.querySelector(".temp").innerText = `${obj.main.temp}°C`
        document.querySelector(".description").innerText = `${obj.weather[0].description}`
        document.querySelector(".humidity").innerText = `Umidità: ${obj.main.humidity}%`
        document.querySelector(".wind").innerText = `Vento: ${obj.wind.speed} km/h`
    })
});