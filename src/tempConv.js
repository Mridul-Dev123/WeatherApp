

function changeTemp(cc){
    let g=document.querySelectorAll(".temp");
    g.forEach((e)=>{
        let c=e.innerHTML;
        e.innerHTML=cc( parseFloat(c))
   
    })
   
 
}
function changeUni(k)
{
    let g=document.querySelectorAll(".uni");
    g.forEach((e)=>
    {
        e.innerHTML=k;
    })
}


export {changeTemp,changeUni}