window.addEventListener('DOMContentLoaded', (event) => {
    //obilazimo sve userrejtinge
    let divUserRaitings=document.getElementsByClassName("user-raiting");
    for(let i=0;i<divUserRaitings.length;i++)
    {
        let p=divUserRaitings[i];
        let divBars=p.querySelectorAll(".bar-container div");
        let brojOcena=p.querySelectorAll(".right div");

        //Ovo je ukupan broj poena
       let divPoeni=querySelectorSaberi(".right div",p);


       for(let j=0;j<brojOcena.length;j++){
           if(divPoeni==0){
            divBars[j].style.width=`0%`;
           }
           else
           divBars[j].style.width=`${Number.parseFloat(brojOcena[j].innerHTML)/divPoeni*100}%`;
       }
       console.log(divPoeni==0)
      p.getElementsByClassName("opis")[0].innerHTML=divPoeni==0  ? "Blanket jos nije ocenjen" :
       `${izracunajProsecnuOcenu(p)} zasnovano na ${divPoeni} ocene.`;
      


    }
});

function querySelectorSaberi(string,p){
   return Array.from(p.querySelectorAll(string)).map(x=>Number.parseInt(x.innerHTML)).reduce((acc,val)=>acc+val,0);
}

function izracunajProsecnuOcenu(p){
    (querySelectorSaberi("broj5",p)*5+querySelectorSaberi("broj4",p)*4+querySelectorSaberi("broj3",p)*3+
    querySelectorSaberi("broj2",p)*2+querySelectorSaberi("broj1",p)*1)/querySelectorSaberi(".right div",p);
    
}