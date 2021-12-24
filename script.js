async function weatherdata(city) {
           var city=document.getElementById("s").value;
          let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a574c3ad659fa473e5ba7f14d9b44764`
          );
          let wdata = await response.json();
          console.log(wdata)
          var div=document.getElementById('data');
          div.innerHTML=`<h1>Current Weather in  ${wdata.name}</h1>
                          <h2>Climate</h2>
                          <p><img src='https://openweathermap.org/img/wn/${wdata.weather[0].icon}.png' alt=""/>${wdata.weather[0].description}</p>
                          <h2>Temperature</h2>
                          <p>${(wdata.main.temp - 273).toFixed(2)} &#8451;</p>
                          <h2>Wind</h2>
                          <p>${wdata.wind.speed}</p>
                          `;
          document.getElementById("s").value = ""; 
}
   
      
      

