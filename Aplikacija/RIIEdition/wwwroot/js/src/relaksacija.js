


//////////////////////////////////////////////////////




let brojOsvojenihPoena=0;
let brKlikaPrvaIgra=0;
let drugaIgraPoeni=0;

let izabraniNivoIgrice=0;
let zadnjeZapamcenBroj;




   

 function dodajEventNaPrvuIgru(){
   let el= document.getElementById("zapocniIgruDugme");
   
   el.addEventListener("click",()=>
    {
        
        document.getElementById('profil').style.display='none';
        document.body.classList.remove('profilPozadina');
        document.body.style.display="block";
        document.body.classList.add('igraPrva');
        document.getElementById('igra1').style.display='block';
        generisiTablu(false);
    });
   document.getElementById("btn1Igra1")?.addEventListener("click",prvaIgraZapoceta);
   document.getElementById("btnIgra1")?.addEventListener("click",predjiNaSledecuIgru);
}



function prvaIgraZapoceta(){
    
RxZasvetliPojaNatabli(izabraniNivoIgrice);



}

function predjiNaSledecuIgru() {
    let divEl=document.getElementById("osvojeniPoeniPrvaIgra");
let elm=divEl?.innerHTML.split(":")[1];
let parsovanInt=Number.parseInt(elm);
if(parsovanInt==NaN)
parsovanInt=0;
brojOsvojenihPoena+=Number.parseInt(elm);
document.getElementById('igra1').style.display='none';
document.getElementById('igra2').style.display='block';
postaviObavestenjeZaDruguIgru();
//let btnZapocni =document.getElementById("zapocniIgra2");
//btnZapocni.addEventListener("click",pogodiBrojNaKocki);
let btnKraj=document.getElementById("kraj");
btnKraj.addEventListener("click",prikaziKraj);


}

//Kada korisnik klikne na kraj prikazuje se ovo
function prikaziKraj(){
   
    let drugaIgraPoeniid=document.getElementById("drugaIgraPoeni");
    brojOsvojenihPoena+=Number.parseInt(drugaIgraPoeniid.innerHTML.split(":")[1]);
    document.getElementById('igra2').style.display='none';
    document.getElementById('poslednjaStrana').style.display='block';
    document.getElementById("nazadPocetak").addEventListener("click",nazadNaPocetak);
        
        let poeni=brojOsvojenihPoena+drugaIgraPoeni;
       
        document.getElementById('osvPoeni').innerHTML="Na kraju ste osvojili:"+poeni+" poena";
        document.body.classList.remove(...(document.body.classList ));
        document.body.classList.add("finalnaPozadina");
      
    
}


function nazadNaPocetak(){
    location.reload();
    return false;
    
}


function generisiTablu(prolaz){
    if(prolaz)
    return;
    let beloSledecePolje=true;
    let tablaDiv=document.getElementsByClassName("board")[0];
    for(let i=0;i<8;i++){
        let divKolona=document.createElement("div");
        divKolona.classList.add("kolona");
        tablaDiv.appendChild(divKolona);
        for(let j=0;j<8;j++){
                let divPolje=document.createElement("div");
                divPolje.classList.add("polje");
                if(beloSledecePolje)
                divPolje.classList.add("belaBoja");
                else
                divPolje.classList.add("crnaBoja");
                beloSledecePolje=beloSledecePolje==true ? false : true ;
                divKolona.appendChild(divPolje);

        }
        beloSledecePolje=beloSledecePolje==true ? false : true ;
    }
}





function nacrtajProfilnuStranu(ev) {
    
    izabraniNivoIgrice=ev.target.parentNode.id;
  
    (document.body.querySelector(".bg") ).style.display="none";
    (document.body.querySelector(".bg2") ).style.display="none";
    (document.body.querySelector(".kontejner") ).style.display="none";
    let profil=document.getElementById('profil')
    profil.style.display='block';
    document.body.style.display="flex";
    document.body.classList.remove("leafsPozadina");
    document.body.classList.add("profilPozadina");
    
    let spanEl=document.body.getElementsByClassName("marquee");
    for(let i=0;i<spanEl.length;i++){
        spanEl[i].innerHTML="Zdravo studentu";
    }
    
}
/////////////////////////////

function izaberiNasumicnoPolje() {
    let random=()=>Math.floor(Math.random()*8);
    let brojKolone=random();
    let slucajnaKolona=document.querySelectorAll(".kolona")[brojKolone];
    
    let brojReda=random();
    
    let slucajnoPolje=slucajnaKolona.querySelectorAll(".polje")[brojReda];
    slucajnoPolje.classList.add('crvenoPolje');
    setTimeout(()=>slucajnoPolje.classList.remove('crvenoPolje'),izaberiTrajenjeIgre(izabraniNivoIgrice))
    slucajnoPolje.addEventListener("mousedown",()=>
    {
        if(slucajnoPolje.classList.contains('crvenoPolje')){
            slucajnoPolje.classList.add("kliknutoPolje");
            brojOsvojenihPoena++;
        }
        

    })
    slucajnoPolje.addEventListener("mouseup",()=>
    {
        if(slucajnoPolje.classList.contains('kliknutoPolje'))
        slucajnoPolje.classList.remove("kliknutoPolje");

    })
    
    return slucajnoPolje;
    
    }


    function izaberiTrajenjeIgre(izabraniNivoIgriceMoj){
        
        if(izabraniNivoIgriceMoj==0)
        return 1200;
        else if(izabraniNivoIgriceMoj==1)
        return 1000;
        else if(izabraniNivoIgriceMoj==2)
        return 850;

    }

    function RxZasvetliPojaNatabli(izabraniNivo){
         //polja se emituju dok tajmer ne istekne tj. dok tajmer ne emituje vrednost
       let id= setInterval(()=>{
            let polje=izaberiNasumicnoPolje();
            poeniPrvaIgra();
            console.log(brojOsvojenihPoena)
        },izaberiTrajenjeIgre(izabraniNivoIgrice))
        setTimeout(()=>{clearInterval(id);},15000)
      //  prosecnoVremeZaKlik();
      //  vremeJednogKlikaremeKlika();
      //  poeniPrvaIgra();
    }

 

    function poeniPrvaIgra(){
        let divEl=document.getElementById("osvojeniPoeniPrvaIgra");
       divEl.innerHTML="Ostvereni broj poena:"+brojOsvojenihPoena;
    }


  
//Druga igra
  function postaviObavestenjeZaDruguIgru(){

    const userMessage = document.getElementById('message');
//empty pravi Observer koji se odmah zavrsi

const delayedMessage = (message, delayedTime = 1000) => {
  return setTimeout(()=>{userMessage.innerHTML=message},delayedTime)
};
document.body.classList.add("crnaPozadina");
document.body.classList.remove("igraPrva");
//Ovo da bi brze proveravao kod
document.body.addEventListener("dblclick",prikaziRotirajucuKocku);

  delayedMessage('Spremite se brzo za drugu igru',2000)
  delayedMessage('Pojavice vam se rotirajuca kocka i kad zavrsi rotiranje upisite sto brze mozete broj sa kocke u input polje',4000)
  delayedMessage('PaziteBilo koj broj moze da vam se padne :)',7000)
  delayedMessage(3,9000)
  delayedMessage(2,10000)
  delayedMessage(1,11000)
  delayedMessage('Napred',12000)
  delayedMessage('', 12500)
  setTimeout(prikaziRotirajucuKocku,13000)


//zovemo funkciju koliko se kocka vrti puta


}


function prikaziRotirajucuKocku(){
    
    (document.querySelector("#igra2 .app")).style.display="none"
    document.body.classList.add("igraPrva");
   document.body.classList.remove("crnaPozadina");
   document.getElementById("rotirajucaKocka").style.display="block";
   document.getElementById("sakrijDivKocka").style.display="block";
   pogodiBrojNaKocki();
}

function vratiBrojRotiranjaKocke(izabraniNivo)
{
    if(izabraniNivo==0)
    return 4;
    else if(izabraniNivo==1)
    return 6;
    else return 9;
}

//dok ne emituje timer prikazuju se polja
function rotirajKocku(){
    let idDr=document.getElementById("drugaIgraPoeni");
    let inputKocka=document.getElementById("inputKocka");
    inputKocka.focus();
    if(inputKocka.value==document.querySelector(".front").innerHTML){
        drugaIgraPoeni++;
        idDr.innerHTML="Broj pogodjenih brojeva:"+drugaIgraPoeni.toString();
    }
    inputKocka.value='';
    let stage=document.querySelector(".stage");
    stage.style.animation="rotate 0.1s ease-in  infinite";
    let randId=setInterval(pokaziRandom,350);
    setTimeout(()=>{
        clearInterval(randId);
        stage.style.animation="none";

    },4000)

}
function pokaziRandom(){
    let random=Math.floor(Math.random()*500+1);
    document.querySelector(".front").innerHTML=random.toString();
}

// rotate 0.1s ease-in  infinite
 function pogodiBrojNaKocki(){
    
    let brojRotiranja=vratiBrojRotiranjaKocke(izabraniNivoIgrice);
  let id=setInterval(rotirajKocku,7000)
  setTimeout(()=>{clearInterval(id);
    prikaziKraj();
},vratiBrojRotiranjaKocke(izabraniNivoIgrice+1)*7000)
  
    
  

}

///////////////////////
 

  window.addEventListener('DOMContentLoaded', () => {
      
    let listItemsIzborNivoa=document.querySelectorAll(".kontejner ul li");
listItemsIzborNivoa.forEach(listItem=>{
    listItem.addEventListener("click",nacrtajProfilnuStranu);
});
dodajEventNaPrvuIgru();
});
