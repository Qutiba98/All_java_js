let citySelect = document.querySelector(".location-button")
let pressure = document.querySelector(".PRESSURE")
let humidityView = document.querySelector(".humidity-view")
let windView = document.querySelector(".wind-view")
let weatherTemp = document.querySelector(".weather-temp")
let weatherDesc = document.querySelector(".weather-desc")
let country = document.querySelector(".location")
let showDate = document.querySelector(".date-day")
let dateDayName = document.querySelector(".date-dayname")

var cityValue = "Paris";
const months = ["Jan", "Febr", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date()
let day = date.getDate(), month = months[date.getMonth()], year = date.getFullYear(), dayName = days[date.getDay()]
citySelect.addEventListener("change", () => {
    cityValue = citySelect.value
    fetchCityWeather(cityValue)

})

function fetchCityWeather(cityValue) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=cceec6b17d334a5f70ea1c49b3f30e91&units=metric`)
        .then(response => {
            if (!response.ok)
                throw Error("status error code :" + response.status)
            return response.json()
        }).then(data => {
            pressure.textContent = data.main.pressure + "%"
            humidityView.textContent = data.main.humidity + "%"
            windView.textContent = data.wind.speed + "km/h"
            weatherTemp.textContent = parseInt(data.main.temp) + "°C"
            weatherDesc.textContent = data.weather[0].description
            country.textContent = `${cityValue} ,${data.sys.country}`
            showDate.textContent = `${day} ${month} ${year}`
            dateDayName.textContent = `${dayName}`
        }).catch(err => {
            throw Error(" Error : " + err)
        })
}
window.onload = () => {
    fetchCityWeather(cityValue);
}
