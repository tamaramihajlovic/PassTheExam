const selectPredmet = document.getElementById("selectPredmetId");

var usersDataIds = [];
var userNames = [];
var userLastNames = [];
var userUserNames = [];

var brojOsvojenihPoenaUsera = [];
var userIds = [];
var predmeti = [];

var newUsersDataIds = [];

var operativniSistemi = []; 
var algoritmiIProgramiranje = [];
var mikroracunarskiSistemi = []; 
var softverskoInženjerstvo = []; 
var webProgramiranje = []; 

function sortPoPoenima(selectedValue){
        for (var i = 0; i < newUsersDataIds.length-1; i++) 
        {  
            var min_idx = i; 
            for (var j = i+1; j < newUsersDataIds.length; j++){ 
                if(selectedValue == "Operativni Sistemi"){
                    if (operativniSistemi[j] > operativniSistemi[min_idx]) 
                    min_idx = j;
                }
                if(selectedValue == "Algoritmi i programiranje"){
                    if (algoritmiIProgramiranje[j] > algoritmiIProgramiranje[min_idx]) 
                    min_idx = j;
                }
                if(selectedValue == "Mikroracunarski sistemi"){
                    if (mikroracunarskiSistemi[j] > mikroracunarskiSistemi[min_idx]) 
                    min_idx = j;
                }
                if(selectedValue == "Softversko inženjerstvo"){
                    if (softverskoInženjerstvo[j] > softverskoInženjerstvo[min_idx]) 
                    min_idx = j;
                }
                if(selectedValue == "Web programiranje"){
                    if (webProgramiranje[j] > webProgramiranje[min_idx]) 
                    min_idx = j;
                }
            }
            var temp = operativniSistemi[min_idx]; 
            operativniSistemi[min_idx] = operativniSistemi[i]; 
            operativniSistemi[i] = temp;

            var temp2 = algoritmiIProgramiranje[min_idx]; 
            algoritmiIProgramiranje[min_idx] = algoritmiIProgramiranje[i]; 
            algoritmiIProgramiranje[i] = temp2;

            var temp3 = mikroracunarskiSistemi[min_idx]; 
            mikroracunarskiSistemi[min_idx] = mikroracunarskiSistemi[i]; 
            mikroracunarskiSistemi[i] = temp3;

            var temp4 = softverskoInženjerstvo[min_idx]; 
            softverskoInženjerstvo[min_idx] = softverskoInženjerstvo[i]; 
            softverskoInženjerstvo[i] = temp4;

            var temp5 = webProgramiranje[min_idx]; 
            webProgramiranje[min_idx] = webProgramiranje[i]; 
            webProgramiranje[i] = temp5;

            var temp6 = userNames[min_idx]; 
            userNames[min_idx] = userNames[i]; 
            userNames[i] = temp6;

            var temp7 = userLastNames[min_idx]; 
            userLastNames[min_idx] = userLastNames[i]; 
            userLastNames[i] = temp7;

            var temp8 = userUserNames[min_idx]; 
            userUserNames[min_idx] = userUserNames[i]; 
            userUserNames[i] = temp8;

            var temp9 = usersDataIds[min_idx]; 
            usersDataIds[min_idx] = usersDataIds[i]; 
            usersDataIds[i] = temp9;
        } 
}

function initialiseWebProgramiranje(){
    var array = [];
    brojOsvojenihPoenaUsera.forEach((el)=>{
        array.push(Number(el));
    })
    newUsersDataIds.forEach((newUserId)=>{
        var popunjen = false;
        var maxPoena = 0;
        userIds.forEach((userId, index)=>{
            if(newUserId == userId){
                if(predmeti[index] == "Web programiranje"){
                    if(maxPoena<=array[index]){
                        if(popunjen == false){
                            maxPoena = array[index];
                            popunjen = true;
                        }
                    }
                }
            }
        });
        webProgramiranje.push(maxPoena);
        popunjen = false;
    })
}

function initialiseSoftverskoInženjerstvo(){
    var array = [];
    brojOsvojenihPoenaUsera.forEach((el)=>{
        array.push(Number(el));
    })
    newUsersDataIds.forEach((newUserId)=>{
        var popunjen = false;
        var maxPoena = 0;
        userIds.forEach((userId, index)=>{
            if(newUserId == userId){
                if(predmeti[index] == "Softversko inženjerstvo"){
                    if(maxPoena<=array[index]){
                        if(popunjen == false){
                            maxPoena = array[index];
                            popunjen = true;
                        }
                    }
                    }
            }
        });
        softverskoInženjerstvo.push(maxPoena);
        popunjen = false;
    })
}

function initialiseMikroracunarskiSistemi(){
    var array = [];
    brojOsvojenihPoenaUsera.forEach((el)=>{
        array.push(Number(el));
    })
    newUsersDataIds.forEach((newUserId)=>{
        var popunjen = false;
        var maxPoena = 0;
        userIds.forEach((userId, index)=>{
            if(newUserId == userId){
                if(predmeti[index] == "Mikroracunarski sistemi"){
                    if(maxPoena<=array[index]){
                        if(popunjen == false){
                            maxPoena = array[index];
                            popunjen = true;
                        }
                    }
                }
            }
        });
        mikroracunarskiSistemi.push(maxPoena);
        popunjen = false;
    })
}

function initialiseAlgoritmiIProgramiranje(){
    var array = [];
    brojOsvojenihPoenaUsera.forEach((el)=>{
        array.push(Number(el));
    })
    newUsersDataIds.forEach((newUserId)=>{
        var popunjen = false;
        var maxPoena = 0;
        userIds.forEach((userId, index)=>{
            if(newUserId == userId){
                if(predmeti[index] == "Algoritmi i programiranje"){
                    if(maxPoena<=array[index]){
                        if(popunjen == false){
                            maxPoena = array[index];
                            popunjen = true;
                        }
                    }
                }
            }
        });
        algoritmiIProgramiranje.push(maxPoena);
        popunjen = false;
    })
}

function initialiseOperativniSistemi(){
    var array = [];
    brojOsvojenihPoenaUsera.forEach((el)=>{
        array.push(Number(el));
    })
    newUsersDataIds.forEach((newUserId)=>{
        var popunjen = false;
        var maxPoena = 0;
        userIds.forEach((userId, index)=>{
            if(newUserId == userId){
                if(predmeti[index] == "Operativni Sistemi"){
                    if(maxPoena<array[index]){
                        if(popunjen == false){
                            maxPoena = array[index];
                            popunjen = true;
                        }
                    }
                }
            }
        });
        operativniSistemi.push(maxPoena);
        popunjen = false;
    })
}

function initialiseData(){
    var children = Array.from(document.getElementById("brojOsvojenihPoenaId").children);
    children.forEach((child, index) => {
        brojOsvojenihPoenaUsera.push(child.innerHTML);
    })
    children = Array.from(document.getElementById("userId").children);
    children.forEach((child, index) => {
        userIds.push(child.innerHTML);
    })
    children = Array.from(document.getElementById("predmetiId").children);
    children.forEach((child, index) => {
        predmeti.push(child.innerHTML);
    })
    children = Array.from(document.getElementById("userUserNameId").children);
    children.forEach((child, index) => {
        userUserNames.push(child.innerHTML);
    })
    children = Array.from(document.getElementById("userDataId").children);
    children.forEach((child, index) => {
        usersDataIds.push(child.innerHTML);
    })
    children = Array.from(document.getElementById("userNameId").children);
    children.forEach((child, index) => {
        userNames.push(child.innerHTML);
    })
    children = Array.from(document.getElementById("userLastNameId").children);
    children.forEach((child, index) => {
        userLastNames.push(child.innerHTML);
    })
}

function workOnData() {
    newUsersDataIds = usersDataIds;
    initialiseWebProgramiranje();
    initialiseSoftverskoInženjerstvo();
    initialiseMikroracunarskiSistemi();
    initialiseAlgoritmiIProgramiranje();
    initialiseOperativniSistemi();
}



function createHallOfFameForSpecificArray(arrayPredmetPoeni, predmet){
    var dataTableBody = document.getElementById("tbodyHallOfFameId");
    dataTableBody.innerHTML = "";
    var dataTableHead = document.getElementById("theadHallOfFameId");
    dataTableHead.innerHTML = "";
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.innerHTML = "#";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Ime";
    th.className = "d-none d-lg-table-cell";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Prezime";
    th.className = "d-none d-lg-table-cell";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "User name";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Poeni";
    tr.appendChild(th);
    dataTableHead.appendChild(tr);
    newUsersDataIds.forEach((id, index)=>{ 
        if(index == 0){
            setRank(id, predmet)
        }
        tr = document.createElement("tr");
        td = document.createElement("td");
        if(index==0){
            td.innerHTML = "1 🥇";
        }else if(index==1){
            td.innerHTML = "2 🥈";
        }else if(index==2){
            td.innerHTML = "3 🥉";
        }else{
            td.innerHTML = index + 1;
        }

        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = userNames[index];
        td.className = "d-none d-lg-table-cell";
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = userLastNames[index];
        td.className = "d-none d-lg-table-cell";
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = userUserNames[index];
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = arrayPredmetPoeni[index];
        tr.appendChild(td);
        dataTableBody.appendChild(tr);
    })
}

var rank1;
var rank2;
var rank3;
var rank4;
var rank5;

function setRank(id, predmet){
    if(predmet == "Operativni Sistemi"){
        rank1 = id;
    }
    if(predmet == "Algoritmi i programiranje"){
        rank2 = id;
    }
    if(predmet == "Mikroracunarski sistemi"){
        rank3 = id;
    }
    if(predmet == "Softversko inženjerstvo"){
        rank4 = id;
    }
    if(predmet == "Web programiranje"){
        rank5 = id;
    }
    updateStorage();
}


function updateStorage(){
    if(localStorage.getItem("rank1")===null){
        localStorage.setItem("rank1", JSON.stringify(rank1));
    }else{
        localStorage.removeItem("rank1");
        localStorage.setItem("rank1", JSON.stringify(rank1));
    }
    if(localStorage.getItem("rank2")===null){
        localStorage.setItem("rank2", JSON.stringify(rank2));
    }else{
        localStorage.removeItem("rank2");
        localStorage.setItem("rank2", JSON.stringify(rank2));
    }
    if(localStorage.getItem("rank3")===null){
        localStorage.setItem("rank3", JSON.stringify(rank3));
    }else{
        localStorage.removeItem("rank3");
        localStorage.setItem("rank3", JSON.stringify(rank3));
    }
    if(localStorage.getItem("rank4")===null){
        localStorage.setItem("rank4", JSON.stringify(rank4));
    }else{
        localStorage.removeItem("rank4");
        localStorage.setItem("rank4", JSON.stringify(rank4));
    }
    if(localStorage.getItem("rank5")===null){
        localStorage.setItem("rank5", JSON.stringify(rank5));
    }else{
        localStorage.removeItem("rank5");
        localStorage.setItem("rank5", JSON.stringify(rank5));
    }
}

function drawTable(selectElement){
    if(selectElement.value == "Operativni Sistemi"){
        sortPoPoenima("Operativni Sistemi");
        createHallOfFameForSpecificArray(operativniSistemi, "Operativni Sistemi");
    }
    if(selectElement.value == "Algoritmi i programiranje"){
        sortPoPoenima("Algoritmi i programiranje");
        createHallOfFameForSpecificArray(algoritmiIProgramiranje, "Algoritmi i programiranje");
    }
    if(selectElement.value == "Mikroracunarski sistemi"){
        sortPoPoenima("Mikroracunarski sistemi");
        createHallOfFameForSpecificArray(mikroracunarskiSistemi, "Mikroracunarski sistemi");
    }
    if(selectElement.value == "Softversko inženjerstvo"){
        sortPoPoenima("Softversko inženjerstvo");
        createHallOfFameForSpecificArray(softverskoInženjerstvo, "Softversko inženjerstvo");
    }
    if(selectElement.value == "Web programiranje"){
        sortPoPoenima("Web programiranje");
        createHallOfFameForSpecificArray(webProgramiranje, "Web programiranje");
    }
}

window.onload = function(){
    initialiseData();
    workOnData();
    $(document).ready(function() {
        $('#tableHallOfFameId').DataTable();
    } );
    sortPoPoenima("Softversko inženjerstvo");
    createHallOfFameForSpecificArray(softverskoInženjerstvo);
}