let value;
function promeni()
{let el=document.querySelector(".dark");
let pozadina=document.querySelector(".blanket");
if(el.checked){
    pozadina.classList.remove("white-mode");
    pozadina.classList.add("dark-mode");
}
else{
    
    pozadina.classList.remove("dark-mode");
pozadina.classList.add("white-mode");
}
}

//Generisanje pitanja
function generisiPitanja()
{
    
    let brPitanja=document.getElementById("izaberiBrojPitanja");
   
    value=document.querySelector(".brojPitanja").value;
    
    if(value<1 || value=="")
    {
        document.getElementById("greskaBrojPitanja").innerHTML="Molimo unesite broj pitanja";
        return;
    }
    brPitanja.style.display="none";
    document.querySelector(".mojButton").style.display="none";
    document.querySelector(".dugmici").style.display="block";
    document.querySelector(".sumbitFormu").style.display="flex";
    let divZaPitanja=document.querySelector(".ZaPitanja");
   
    for(let i=0;i<value;i++){
        let rowDiv=document.createElement("div");
        rowDiv.classList.add("row");
        
        divZaPitanja.appendChild(rowDiv);
        
        let col1=document.createElement("div");
        col1.classList.add("col-lg-6");
        col1.classList.add("col-sm-12");
        col1.classList.add("form-group");
        let lbl1=document.createElement("label");
        lbl1.innerHTML=`Pitanje ${i+1}.`;
        let inp1=document.createElement("input");
        inp1.classList.add("form-control");
        inp1.classList.add("inputPitanja");
        col1.appendChild(lbl1);
        col1.appendChild(inp1);

        let col2=document.createElement("div");
        col2.classList.add("col-lg-6");
        col2.classList.add("col-sm-12");
        col2.classList.add("form-group");
        let lbl2=document.createElement("label");
        lbl2.innerHTML=`Odgovor ${i+1}.`;
        let inp2=document.createElement("input");
        inp2.classList.add("form-control");
        inp2.classList.add("inputOdgovori");
        col2.appendChild(lbl2);
        col2.appendChild(inp2);

        rowDiv.appendChild(col1);
        rowDiv.appendChild(col2);
        

    }
}

function obrisiPitanje(){
    let divZaPitanja=document.querySelector(".ZaPitanja");
    if(divZaPitanja.childElementCount==1)
    return;
    divZaPitanja.removeChild(divZaPitanja.lastChild);
    value--;
}
function dodajPitanje(){
    let divZaPitanja=document.querySelector(".ZaPitanja");
    let rowDiv=document.createElement("div");
    rowDiv.classList.add("row");
    
    divZaPitanja.appendChild(rowDiv);
    
    let col1=document.createElement("div");
    col1.classList.add("col-lg-6");
    col1.classList.add("col-sm-12");
    col1.classList.add("form-group");
    let lbl1=document.createElement("label");
    lbl1.innerHTML=`Pitanje ${++value}.`;
    let inp1=document.createElement("input");
    inp1.classList.add("form-control");
    col1.appendChild(lbl1);
    col1.appendChild(inp1);

    let col2=document.createElement("div");
    col2.classList.add("col-lg-6");
    col2.classList.add("col-sm-12");
    col2.classList.add("form-group");
    let lbl2=document.createElement("label");
    lbl2.innerHTML=`Odgovor ${value}.`;
    let inp2=document.createElement("input");
    inp2.classList.add("form-control");
    col2.appendChild(lbl2);
    col2.appendChild(inp2);

    rowDiv.appendChild(col1);
    rowDiv.appendChild(col2);
}

function submitujFormu(){
    document.forms[0].submit();
}
function finalnaProvera(){
let naziv=  document.getElementById("nazivMaterijala");
let predmet=  document.getElementById("predmetMaterijala");
if(document.getElementById("nmaterijala").value=="")
{
    console.log("materijali");
    naziv.innerHTML="Ovo je polje obavezno";
    return false;
}
if(document.getElementById("pmaterijala").value=="")
{
    console.log("predmet");
    predmet.innerHTML="Ovo je polje obavezno";
    return false;
}

return true;
}

function ubaciSve(){
    let pitanja=document.getElementById("skuppitanja");
    let inputPitanja=document.getElementsByClassName("inputPitanja");
    let odgovori=document.getElementById("skupodgovora");
    let inputOdgovori=document.getElementsByClassName("inputOdgovori");
    for(let i=0;i<inputPitanja.length;i++){
        pitanja.value=pitanja.value+inputPitanja[i].value+"###";
        odgovori.value=odgovori.value+inputOdgovori[i].value+"###";
    }
    



}



function prikaziKocku(){
    
    if(!finalnaProvera())
    return;
    ubaciSve();
    document.querySelector(".blanket").style.display="none";
    document.querySelector(".mojaKocka").style.display="flex";
    document.getElementById("obavestenje").style.display="block";

}

