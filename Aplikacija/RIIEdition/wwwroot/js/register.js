document.addEventListener("DOMContentLoaded",()=>
{
let el=document.body.getElementsByClassName("custom-file-input")[0];
let label=document.body.getElementsByClassName("custom-file-label")[0];
el.addEventListener("change",()=>{
    let a="";
   
label.innerHTML=el.value;
})

});