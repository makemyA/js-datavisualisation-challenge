
//Tableau de données
let tabYear =[];
let dataTab=[];
let data2002 = [];
let data2003 =[];
let dataTotal =[];
let dataCountry1=[];
let dataCountries=[];

// table1 accesseur
let table1 = document.getElementById("table1");

let tableItemTotal = table1.querySelector("tbody").querySelectorAll("tr>td+td");
 


console.log(dataTotal);

let i=0;

for( i ; i<tableItemTotal.length;i++){
    
}

        for( j ; j<11;j++){
            dataTotal[j].push(tableItemTotal[i].textContent);
            
    dataCountry1.push(dataTotal[i]);
        }




for(let i= i;i<)
console.log(dataCountry1);

for(let i =0 ; i<37;i++){
    dataCountries.push(dataCountry[i]);;
}
console.log(dataCountries);




let tableItemCountry = table1.querySelector("tbody").querySelectorAll("th+td");
let tableItem2002 = table1.querySelector("tbody").querySelectorAll("th+td+td");
let tableItem2003 = table1.querySelector("tbody").querySelectorAll("th+td+td+td");
let tableItem2004 = table1.querySelector("tbody").querySelectorAll("th+td+td+td+td");
let tableItem2005 = table1.querySelector("tbody").querySelectorAll("th+td+td+td+td+td");
let tableItem2006 = table1.querySelector("tbody").querySelectorAll("th+td+td+td+td+td+td");
let tableItem2007 = table1.querySelector("tbody").querySelectorAll("th+td+td+td+td+td+td+td");
let tableItem2008 = table1.querySelector("tbody").querySelectorAll("th+td+td+td+td+td+td+td+td");
let tableItem2009 = table1.querySelector("tbody").querySelectorAll("th+td+td+td+td+td+td+td+td+td");
let tableItem2010 = table1.querySelector("tbody").querySelectorAll("th+td+td+td+td+td+td+td+td+td+td");
let tableItem2011 = table1.querySelector("tbody").querySelectorAll("th+td+td+td+td+td+td+td+td+td+td+td");
let tableItem2012 = table1.querySelector("tbody").querySelectorAll("th+td+td+td+td+td+td+td+td+td+td+td+td");
let tableItemYear= table1.querySelector("tbody").querySelectorAll("tr>th+th+th");
//Insertion de contenu HTML

table1.querySelector("caption").insertAdjacentHTML("afterbegin",'<button id="button-tab1" class="button">SHOW GRAPH</button>');
let buttonTab1 = document.getElementById("button-tab1");
buttonTab1.insertAdjacentHTML("afterend",'<div id="graph1"></div>');
let graph1 = document.getElementById("graph1");
graph1.insertAdjacentHTML("beforeBegin",'<select id="select1"></select>');
let select1 = document.getElementById("select1");
for(let i =0; i<tableItemYear.length;i++){
    tabYear.push(tableItemYear[i].textContent);
}
for (let i =0; i<tabYear.length;i++){
    select1.insertAdjacentHTML("afterbegin",'<option value='+tabYear[i]+'>'+tabYear[i]+'</option>'); 
}

//Remplissage des tableaux de données
let button = document.querySelectorAll(".button");   
buttonTab1.addEventListener("click",toggleHide);
select1.addEventListener("change",selectElement);
/* let year = 2004; */
function remove(){
    graph1.innerHTML="";
    }

function toggleHide(){
 graph1.classList.toggle("hide");
 select1.classList.toggle("hide");
 if(buttonTab1.innerHTML=== "HIDE GRAPH"){
    buttonTab1.innerHTML="SHOW GRAPH";
 }else {
    buttonTab1.innerHTML="HIDE GRAPH";
 }

}

function selectElement(){
    let selectedValue= select1.value;
    console.log(selectedValue);

    switch (selectedValue){
        case "2002":
              
             remove(); 
                dataTab=[];
            for (let i=0; i<tableItemCountry.length;i++){
                dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2002[i].textContent });     
         }
         loading(); 
            break;
        case "2003": 
            remove(); 
                dataTab=[];
            for (let i=0; i<tableItemCountry.length;i++){
                dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2003[i].textContent });     
         }
         loading();        
             break;
             case "2004": 
        
             remove(); 
                      dataTab=[];
                  for (let i=0; i<tableItemCountry.length;i++){
                      dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2004[i].textContent });     
               }
               loading();        
                   break;
          case "2005": 
              
             remove(); 
                      dataTab=[];
                  for (let i=0; i<tableItemCountry.length;i++){
                      dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2005[i].textContent });     
               }
               loading();        
                   break;
          case "2006": 
              
          remove(); 
                      dataTab=[];
                  for (let i=0; i<tableItemCountry.length;i++){
                      dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2006[i].textContent });     
               }
               loading();        
                   break;
      case "2007": 
              
          remove(); 
                      dataTab=[];
                  for (let i=0; i<tableItemCountry.length;i++){
                      if(tableItem2007[i].textContent === ':'){
                      tableItem2007[i].textContent="0";
                      dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2007[i].textContent });
                      }else {
                          dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2007[i].textContent });
                      console.log(tableItem2007[i].textContent);     
               }
            }
             /*   dataTab[].Data="0"; */
               console.log(dataTab);
               loading();        
                   break;
      case "2008": 
              
          remove(); 
                      dataTab=[];
                      for (let i=0; i<tableItemCountry.length;i++){
                        if(tableItem2008[i].textContent === ':'){
                        tableItem2008[i].textContent="0";
                        dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2008[i].textContent });
                        }else {
                            dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2008[i].textContent });
                        console.log(tableItem2008[i].textContent);     
                 }
              }
               loading();        
                   break;
      case "2009": 
              
          remove(); 
                      dataTab=[];
                      for (let i=0; i<tableItemCountry.length;i++){
                        if(tableItem2009[i].textContent === ':'){
                        tableItem2009[i].textContent="0";
                        dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2009[i].textContent });
                        }else {
                            dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2009[i].textContent });
                        console.log(tableItem2009[i].textContent);     
                 }
              }
               loading();        
                   break;
      case "2010": 
              
         remove(); 
                      dataTab=[];
                      for (let i=0; i<tableItemCountry.length;i++){
                        if(tableItem2010[i].textContent === ':'){
                        tableItem2010[i].textContent="0";
                        dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2010[i].textContent });
                        }else {
                            dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2010[i].textContent });
                        console.log(tableItem2010[i].textContent);     
                 }
              }
               loading();        
                   break;
      case "2011": 
              
         remove(); 
                      dataTab=[];
                      for (let i=0; i<tableItemCountry.length;i++){
                        if(tableItem2011[i].textContent === ':'){
                        tableItem2011[i].textContent="0";
                        dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2011[i].textContent });
                        }else {
                            dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2011[i].textContent });
                        console.log(tableItem2011[i].textContent);     
                 }
              }
               loading();        
                   break;
      case "2012": 
              
          remove(); 
                      dataTab=[];
                      for (let i=0; i<tableItemCountry.length;i++){
                        if(tableItem2012[i].textContent === ':'){
                        tableItem2012[i].textContent="0";
                        dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2012[i].textContent });
                        }else {
                            dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2012[i].textContent });
                        console.log(tableItem2012[i].textContent);     
                 }
              }
               loading();        
                   break;
             default: 
             console.log("Faites un choix svp");
        }
    }

console.log(dataTab);
console.log(tabYear); 

/* let push1 = [{Pays:"lzttonie", Data:145.9},{Pays:"lzttondzzzzzze", Data:1295}];
dataTab.push(push1[0]);
dataTab.push(push1[1]); */

console.log(dataTab);
/* for (let j=0; j<tab.length;j++){
    dataTab.push(tab[j]);
} */
/* console.log(data2012); */



/* tableauWrite.insertAdjacentHTML("afterbegin",year2003.Pays.join(",")); */

//graphique interactif
function loading(){
    var svg = dimple.newSvg("#graph1", "100%", "50vh");
    var data = dataTab;
    var chart = new dimple.chart(svg, data);
    /* Chart.setMargins("10px", "10px", "10px", "10px"); */
    chart.addCategoryAxis("x", "Pays");
    chart.addMeasureAxis("y", "Data");
    chart.addSeries(null, dimple.plot.bar);
   /*  chart.addLegend("-100px", "30px", "100px", "-70px"); */
    chart.draw();
    window.onresize = function () {
        // As of 1.1.0 the second parameter here allows you to draw
        // without reprocessing data.  This saves a lot on performance
        // when you know the data won't have changed.
        myChart.draw(0, true);
    };
}
 //Tableau2 accesseur//

let table2 = document.getElementById("table2").querySelector("caption");
console.log(table2);
table2.insertAdjacentHTML("afterBegin",'<button id="button-tab2">click me</button>');

let buttonTab2 = document.getElementById("button-tab2");
buttonTab2.insertAdjacentHTML("afterend",'<div id="graph2"></div>');


//onload Page
select1.classList.toggle("hide");
for (let i=0; i<tableItemCountry.length;i++){
    dataTab.push({Pays: tableItemCountry[i].textContent,Data:tableItem2002[i].textContent });     
}
loading();
graph1.classList.toggle("hide");





























