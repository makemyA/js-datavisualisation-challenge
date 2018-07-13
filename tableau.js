var svg = dimple.newSvg("main", 800, 600);
var data = [
  { "Pays":"Belgique", "Data":1012.8 },
  { "Pays":"Bulgarie", "Data":146.9 }
];
var chart = new dimple.chart(svg, data);
chart.addCategoryAxis("x", "Pays");
chart.addMeasureAxis("y", "Data");
chart.addSeries(null, dimple.plot.bar);
chart.draw();