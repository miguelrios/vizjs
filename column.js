var ColumnChart = {};
var MARGIN = 3;

//modify array to calculate maxs and mins. 
//Thx to @jeresig: http://ejohn.org/blog/fast-javascript-maxmin/ 
(function(){
 	Array.max = function( array ){
      return Math.max.apply( Math, array );
  };
  Array.min = function( array ){
      return Math.min.apply( Math, array );
  }; 
})();
//chart_element is a DOM div element and data is an array of numbers > 0
ColumnChart.draw = function(chart_element, data){
  var chart_width = chart_element.offsetWidth || chart_element.clientWidth;
  var chart_height = chart_element.offsetHeight|| chart_element.clientHeight;
  for(var i = 0; i < data.length; i++){
    var number = data[i];
    var bar = document.createElement('div');
    bar.style.width = (chart_width/data.length) - MARGIN + "px";
    bar.style.height = ((number/Array.max(data) * chart_height) - MARGIN) + "px";
    bar.style.marginLeft = MARGIN + "px";
    bar.className = 'bar';
    chart_element.appendChild(bar);
  }
}