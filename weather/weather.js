const url= "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={90de4f45296a9f4f1867431a628bfbe9}";
const api= "90de4f45296a9f4f1867431a628bfbe9";
const form= document.querySelector(".form");
const button= document.querySelector(".button");
const search= document.querySelector(".search");
const lat= document.querySelector(".lat");
const lon= document.querySelector(".lon");
const fl= document.querySelector(".fl");
const hum= document.querySelector(".hum");
const ws= document.querySelector(".ws");
const wd= document.querySelector(".wd");
const kelvin= document.querySelector(".kelvin");
const img= document.querySelector(".feels1");
const box= document.querySelector(".box");
const st= document.querySelector(".st");
    // let ms= 100000000;
    // let date= new Date(ms);
    // let hours= date.getHours();
    // let mins= date.getMinutes();
    // let format= `${hours}:${mins}`;
    const getWeather = async(city) =>{
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=90de4f45296a9f4f1867431a628bfbe9&units=metric`)
    .then(data => data.json())
    .then(items =>{
        // console.log(items);
        return display(items);
    })
}
function display(items){
    if(items.cod == "404"){
        box.innerHTML= `
        <div class= "nfDiv">
        <h1 class="notFound">City Not Found</h1>
        <p>Please Refresh</p>
        </div>
        `;

        return;
    }
        lat.innerHTML= `Latitude: ${items.coord.lat}`;
        lon.innerHTML= `Longitude: ${items.coord.lon}`;
        fl.innerHTML= `${items.weather[0].description}`;
        hum.innerHTML= `HUMIDITY: ${items.main.humidity}`;
        ws.innerHTML= `${items.wind.speed} Knots`;
        wd.innerHTML= `${items.wind.deg}&deg`;
        kelvin.innerHTML= `${items.main.temp} &degC`;

        img.innerHTML= `
        <div class="feels1">
            <img src="https://openweathermap.org/img/wn/${items.weather[0].icon}@2x.png" alt="" class="img-items">
        </div>`;

        function times(){
            // let ms= `${items.sys.sunrise}`;
            let ms= parseInt(`${items.sys.sunrise}`)
            let date= new Date(ms);
            let hour= date.getHours();
            let mins= date.getMinutes();
            st.innerHTML= `${hour}:${mins} UTC`
            // return (hour, mins);
        }
        times();
        // st.innerHTML= ``
        // console.log(hour, mins);
}

form.addEventListener("submit",
    function(event){
        getWeather(search.value);
        event.preventDefault();
    })

