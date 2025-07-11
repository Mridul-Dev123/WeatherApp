import "./style.css"
import {id, query} from "./utils/shortabb.js"
import callWeatherApi  from "./weatherApiCall.js";
import retreive from "./dataRetrieveal.js";
import update from "./Inject.js";
import {fTC, cTF} from "./utils/tempConversions.js";
import {changeTemp,changeUni} from "./tempConv.js";
const form=document.querySelector("form");
let currentData;
let isFeh=true;





form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const city=id("cityInput").value.trim();
    console.log(city)
    id("ErrorBox").innerHTML="Fetcing Data"
    callWeatherApi(city).then((data)=>
    {  return retreive(data)
    })
    .then((da)=>{
        currentData=da;
        update(da);
        id("ErrorBox").innerHTML="Data Fetched Successfully"
    })
    .catch((e)=>{
        console.log("Error Occuered", e)
        id("ErrorBox").innerHTML=`Some error occured for retrieving data for ${city}`
    })
    id("cityInput").value="";
})

function toggle() {
  const current = id("current");
  const next = id("next");
  
  
 if(current.innerHTML==="°C")changeTemp(cTF,'F');
   else changeTemp(fTC,'C')
  if(isFeh){changeUni('C');
  }
  else changeUni('F');

  isFeh=!isFeh;
  current.id = "next";
  next.id = "current";
}

callWeatherApi("London").then((data)=>
    {  return retreive(data)
    })
    .then((da)=>{
        currentData=da;
        update(da);
        id("ErrorBox").innerHTML="Welcome to weather Site"
        toggle();
    })






id("next").addEventListener("click", toggle);
id("current").addEventListener("click", toggle);
