


const baseUrl='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
async function printData(loc){
    let url=`${baseUrl}${loc}?key=${apiKey}`
    const response=await fetch(url)
    const data=await response.json()
    console.log(data.currentConditions.temp)
    console.log(data.days[1]);
}
printData('Dubai')
