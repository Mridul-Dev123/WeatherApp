const id=(r)=>document.getElementById(r)
import svgs from "./parts/svgs.js"
function updateTime(hours)

{
        const as=id("time")
        as.innerHTML="";
        hours.forEach(ele => {
            const card=document.createElement("div")
            card.classList.add("timeCard");
            card.innerHTML=`
                          <div class="time t">${ele.time}</div>
                 <div class="mid">
                  <div class="timeIcon">     
                    ${svgs[ele.icon]}  
                             </div>
           
           <div>
                <div><span class="temp">${ele.temp}</span>&deg <span class="uni">F</span></div>
                <div>Rain Chance: ${ele.rainChance}%</div>
           </div>

                 </div>
                 <div> ${ele.conditions}</div>
                           `

                           as.appendChild(card)
            
        });
}
function updateDay(dayData)
{
    id("date").innerHTML=`${dayData.date.getDate()}-${dayData.date.getMonth()}-${dayData.date.getFullYear()}`
    id("conditions").innerHTML=dayData.conditions;
    id("description").innerHTML=dayData.description;
    id("cardTemp").innerHTML=dayData.temp;
    id("feelLike").innerHTML=dayData.feelslike
    id("rainChance").innerHTML=dayData.rainChance
    id("icon").innerHTML=svgs[dayData.icon];
    id("sunset").innerHTML=dayData.sunset;
    id("sunrise").innerHTML=dayData.sunrise;
    id("maxTemp").innerHTML=dayData.tempmax
    id("minTemp").innerHTML=dayData.tempmin
    id("windSpeed").innerHTML=dayData.windspeed
    id("humidity").innerHTML=dayData.humidity
    updateTime(dayData.hours)
   
}

const update=function(data)
{  
    id("longitude").innerHTML=data.longitude;
    id("latitude").innerHTML=data.latitude;
    id("address").innerHTML=data.address;
    id("timezone").innerHTML=data.timezone;
     updateDay(data.today)
       let g=document.querySelectorAll(".uni");

}
export default update;