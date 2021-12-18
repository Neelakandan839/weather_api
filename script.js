function weatherdata(){
        var city=document.getElementById("s").value;

        let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a574c3ad659fa473e5ba7f14d9b44764`;
        fetch(url)
        .then(response => response.json())
        .then((wdata)=>{
            
        var h3=document.createElement('h3');
        h3.innerHTML=`Current Weather in : ${city}`;

        var weather=document.createElement('h2');
        weather.innerHTML="Climate";

        var w1=document.createElement('p');
        w1.innerHTML=wdata.weather[0].description;

        var temp=document.createElement('h2');
        temp.innerHTML="Temperature";

        var w2=document.createElement('p');
        w2.innerHTML=`${(wdata.main.temp - 273).toFixed(2)} &#8451;`;

        var wind=document.createElement('h2');
        wind.innerHTML="Wind";

        var w3=document.createElement('p');
        w3.innerHTML=wdata.wind.speed;

        document.body.append(h3,weather,w1,temp,w2,wind,w3);
})
}



