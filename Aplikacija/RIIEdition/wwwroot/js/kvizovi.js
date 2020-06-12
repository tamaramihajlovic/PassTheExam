
window.addEventListener("DOMContentLoaded",()=>{ 
    Array.from(document.getElementsByClassName("karta")).forEach(el=>{
   
 el.addEventListener("click",(ev)=>{let targetId=ev.target.id ? ev.target.id:ev.target.parentElement.id ;
           Array.from(document.getElementsByClassName('link')).forEach(a=>{
             a.href+="?predmet="+targetId;
           })
})
    });
    
    document.body.addEventListener("click",()=>{
    document.body.querySelector(".leftHalf").style.display="block";
    document.body.querySelector(".rightHalf").style.display="block";
    document.body.querySelector(".skriveno").style.display="none";
    document.body.style.overflow="hidden";
  
    
    }); });
