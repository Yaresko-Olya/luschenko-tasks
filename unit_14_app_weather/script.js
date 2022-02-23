// task 1 --------------------
const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "f788db73c4c7493b8d3f3d138a3b1509"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
        
}

function showWeather(data) {
	console.log(data);
    document.querySelector('.out-deg').innerHTML = Math.round(data.main.temp) + '&deg';
    document.querySelector('.cloud').innerHTML = data.weather[0]['description'];
    document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
}

getWeather(); 
document.querySelector('#city').onchange = getWeather;