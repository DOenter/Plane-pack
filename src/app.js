const LodzChoise = document.getElementById("Departing");
LodzChoise.addEventListener("change", (event) => {
    if (value = "Lodz") {

        fetch("http://api.openweathermap.org/data/2.5/weather?q=Lodz&appid=3d14f364f53109c68f475c97c869942d")
            .then((resp) => resp.json())
            .then(function (data) {
                document.querySelector('.weather__city').textContent = data.name;
                document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
                document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
                console.log(data);
            })
    }
});


const KatowiceChoise = document.getElementById("Departing");
KatowiceChoise.addEventListener("change", (event) => {
    if (value = "Katowice") {

        fetch("http://api.openweathermap.org/data/2.5/weather?q=Katowice&appid=3d14f364f53109c68f475c97c869942d")
            .then((resp) => resp.json())
            .then(function (data) {
                document.querySelector('.weather__city2').textContent = data.name;
                document.querySelector('.weather__forecast2').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.weather__desc2').textContent = data.weather[0]['description'];
                document.querySelector('.weather__icon2').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
                console.log(data);
            })
    }
});

const ParisChoise = document.getElementById("Arriving");
ParisChoise.addEventListener("change", () => {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=3d14f364f53109c68f475c97c869942d")
        .then((resp) => resp.json())
        .then(function (data) {
            document.querySelector('.weather__city3').textContent = data.name;
            document.querySelector('.weather__forecast3').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.weather__desc3').textContent = data.weather[0]['description'];
            document.querySelector('.weather__icon3').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            console.log(data);

        })

});

document.getElementById("Confirm").addEventListener("click", function openForm() {
    document.getElementById("myForm").style.display = "block";

});

document.getElementById("cancel").addEventListener("click", function closeForm() {
    document.getElementById("myForm").style.display = "none";
});
