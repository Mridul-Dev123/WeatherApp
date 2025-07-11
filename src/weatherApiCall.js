import apiKey from "../apis.js"

const baseUrl='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
async function callWeatherApi(loc){
    let url=`${baseUrl}${loc}?key=${apiKey}`
    try
    {const response=await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data=await response.json()
    return data;}
    catch(e){
        throw e;
    }
}
export default  callWeatherApi
