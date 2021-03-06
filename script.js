

//Générer le tableau de données à partir du fichier html
let tabGlobal=[];
let tabYears=[];
let tabDatas=[];
let tabCountries=[];
let table1 = document.getElementById("table1");
let years= table1.getElementsByTagName("tr")[1].getElementsByTagName("th");
let rows = table1.querySelectorAll("tr>td");
let countries = table1.querySelectorAll("th+td");
/* console.log(countries.length); */

for (let i =2; i<years.length;i++){
    tabYears.push(years[i].textContent);
}
for (let i=0; i<countries.length;i++){
   /*  console.log(countries[i].textContent); */
    tabCountries.push(countries[i].textContent);
}


        for (let i=0; i<rows.length;i++){
       
        tabDatas.push(rows[i].textContent);
        
       /*  console.log(typeof(rows[i].innerHTML)); */
        
    }


   
let regex= /^[a-zA-Z]/;//Créé une fonction qui vérifie si l'élément commence par une lettre majuscule ou minuscule"
let regex1= /^[:]/; //selectionne toutes les données comportant ":";
  
    for(let i=0; i<tabDatas.length;i++){
        let result =regex.test(tabDatas[i]);
        let result1= regex1.test(tabDatas[i]);
        if (result=== true){
            tabDatas.splice(i,1);  //Applique la fonction au tableau afin de ne garder que les nombres
        }
        if (result1=== true){
            tabDatas.splice(i,1,'0');  //remplace les ":" par des "0"
        }
    }

   


    console.log(rows.length);
    let k=0;
    for (let i=0;i<tabCountries.length;i++){
        
        for (let j=0; j<tabYears.length;j++, k++){
        //PUSH DU TABLEAU
            tabGlobal.push({Data: tabDatas[k],Country:tabCountries[i], Year: tabYears[j]});
    
        }
    }
    console.log(tabGlobal);
/* console.log(tabDatas);
console.log(tabYears);
console.log(tabCountries);    
 */

//Insertion de contenu HTML

table1.querySelector("caption").insertAdjacentHTML("afterbegin",'<button id="button-tab1" class="button">HIDE GRAPH</button>');
let buttonTab1 = document.getElementById("button-tab1");
buttonTab1.insertAdjacentHTML("afterend",'<div id="graph1"></div>');
let graph1 = document.getElementById("graph1");
graph1.insertAdjacentHTML("afterend",'<div id="graph2"></div>')
let graph2 = document.getElementById("graph2");
graph2.insertAdjacentHTML("beforebegin",'<h3>Données en temps réel</h3>')
graph1.insertAdjacentHTML("beforeBegin",'<select id="selectYear"></select>');
let selectYear = document.getElementById("selectYear");
for (let i =0; i<tabYears.length;i++){
    selectYear.insertAdjacentHTML("afterbegin",'<option value='+tabYears[i]+'>'+tabYears[i]+'</option>'); 
}

graph1.insertAdjacentHTML("beforeBegin",'<select id="selectCountry1"></select>');
let selectCountry1 = document.getElementById("selectCountry1");
for (let i =0; i<tabCountries.length;i++){
    selectCountry1.insertAdjacentHTML("afterbegin",'<option value='+tabCountries[i]+'>'+tabCountries[i]+'</option>'); 
}
graph1.insertAdjacentHTML("beforeBegin",'<select id="selectCountry2"></select>');
let selectCountry2 = document.getElementById("selectCountry2");
for (let i =0; i<tabCountries.length;i++){
    selectCountry2.insertAdjacentHTML("afterbegin",'<option value='+tabCountries[i]+'>'+tabCountries[i]+'</option>'); 
}

//Remplissage des tableaux de données
let button = document.querySelectorAll(".button");   
buttonTab1.addEventListener("click",toggleHide);

selectYear.addEventListener("change",selectElementYear);
selectCountry1.addEventListener("change",selectElementCountry);
selectCountry2.addEventListener("change",selectElementCountry);
function remove(){
    graph1.innerHTML="";
    }
function removeGraph2(){
    graph2.innerHTML="";
    }
function toggleHide(){
 graph1.classList.toggle("hide");
 selectYear.classList.toggle("hide");
 selectCountry1.classList.toggle("hide");
 selectCountry2.classList.toggle("hide");
 if(buttonTab1.innerHTML=== "HIDE GRAPH"){
    buttonTab1.innerHTML="SHOW GRAPH";
 }else {
    buttonTab1.innerHTML="HIDE GRAPH";
 }

}

//requete YEar
let graphYear = [];
let selectedYear="2002";
function selectElementYear(){
     selectedYear= selectYear.value;
      graphYear = [];
    remove();
    requeteByYear();
   
    console.log(selectedYear);
    console.log (graphYear);
}

//requete country
let graphCountry = [];
let selectedCountry1="";
let selectedCountry2="";
function selectElementCountry(){
    selectedCountry1= selectCountry1.value;
    selectedCountry2= selectCountry2.value;
      graphCountry = [];
    remove();
    requeteByCountry();
   
    console.log(selectedCountry1);
    console.log(selectedCountry2);
    console.log (graphCountry);
}



   
function requeteByCountry(){
    for (let i = 0; i < tabGlobal.length; i++) {
        if (tabGlobal[i].Country === selectedCountry1) {
            graphCountry.push(tabGlobal[i]);
        }
        if (tabGlobal[i].Country === selectedCountry2) {
            graphCountry.push(tabGlobal[i]);
        }
    }
    loadingCountry();
}

function requeteByYear() {
    for (let i = 0; i < tabGlobal.length; i++) {
        if (tabGlobal[i].Year === selectedYear) {
            graphYear.push(tabGlobal[i]);
        }
    }
    loadingYEar();
}

//afficher tableaux

function loadingYEar(){
    var svg = dimple.newSvg("#graph1", "100%", "50vh");
    var data = graphYear;
    var chart = new dimple.chart(svg, data); //chart.data 
    chart.addCategoryAxis("x", "Country");
    chart.addMeasureAxis("y", "Data");
    chart.addSeries(null, dimple.plot.bar);
  
    chart.draw();
    window.onresize = function () {
      
        chart.draw(0, true);  //chart.
    };
}

function loadingCountry(){
    var svg = dimple.newSvg("#graph1", "100%", "50vh");
    var data = graphCountry;
    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Year");
    chart.addMeasureAxis("y", "Data");
  /*   chart.addSeries(null, dimple.plot.bar); */
  
  chart.addSeries("Country", dimple.plot.bar);
  // Draw without any axes
 /*  xAxis.hidden = true;
  yAxis.hidden = true; */
    chart.draw();
    window.onresize = function () {
      
        chart.draw(0, true);
    };
}


//effacer tableaux


    requeteByYear();
   


    let dataPoints= [];

    function loadingData(){
       removeGraph2();
       /* dataPoints=[]; */
        var svg = dimple.newSvg("#graph2", "100%", "50vh");
        var data = dataPoints;
        var chart = new dimple.chart(svg, data);
        /* chart.setBounds(35, 60, "90%", 450); */
        let x= chart.addCategoryAxis("x", "data");
        let y =chart.addMeasureAxis("y", "value");
      /*   chart.addSeries(null, dimple.plot.bar); */
      x.addOrderRule("x", false);
    /*   y.ticks = 15; */
       chart.addSeries(null, dimple.plot.bubble);
    chart.addSeries(null, dimple.plot.scatter);
       /* chart.addSeries(null, dimple.plot.line); */ 
      // Draw without any axes
     /*  xAxis.hidden = true;
      yAxis.hidden = true; */
        chart.draw();
        
    
    }

var request = new XMLHttpRequest();

request.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true);

request.onload = function() {

if (request.status >= 200 && request.status < 400) {
    let data = JSON.parse(request.responseText);

    for (i = 0; i < data.length; i++) {

        dataPoints.push({data: data[i][0], value: data[i][1]});
    }
    loadingData();
    updateChart();
    
}
};

request.send();

function updateChart() {
    dataPoints=[];
request.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true);

request.onload = function() {

    if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);

        for (i = 0; i < data.length; i++) {
            dataPoints.push({data: data[i][0], value: data[i][1]});
        }
        console.log(dataPoints);
        
 loadingData();


        setTimeout(function() { updateChart() }, 1500);


    }
}
request.send()
}
//END

