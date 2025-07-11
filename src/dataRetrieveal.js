function gethours(hor)
{
    let hours=[]
    for(let i=18; i<=23; i++)
    {
        hours.push(
            {
                time:hor[i].datetime,
                temp:hor[i].temp,
                rainChance:hor[i].precipprob,
                conditions:hor[i].conditions,
                icon:hor[i].icon

            }
        )
    }
    return hours;
}



function getDetails(day)
{
     const { temp, tempmax, tempmin, feelslike, precipprob:rainChance, windspeed, sunset, sunrise, conditions, description, icon,humidity }=day;
     const date=new Date(day.datetime);
     const da={date, temp, tempmax, tempmin, feelslike,rainChance, windspeed, sunset, sunrise, conditions, description, icon,humidity };
     da.hours=gethours(day.hours);
     return da
}

const retreive=function(data)
{
    let obj={};
   const {latitude, longitude, resolvedAddress:address ,timezone  }=data;
   obj={latitude, longitude,address,timezone   }
   obj.today=getDetails(data.days[0]);
   obj.tommorow=getDetails(data.days[1]);


return obj

}
export default retreive;