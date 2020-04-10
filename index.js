// Import stylesheets
import './style.css';

d3.tsv("https://d3plus.org/assets/posts/getting_started_1/data/state_crime.tsv", function(error, state_crime) {
  if (error) return console.error(error);
  
  // Coerce data values to be numeric
  state_crime.forEach(function(d) {
    d3.keys(d).forEach(function(k){
      if(k != "State"){
        d[k] = +d[k]
      }
    })
  });
  console.log(state_crime);
  make_viz(state_crime);
});

function make_viz(data){
  var visualization = d3plus.viz()
      .container("#viz1")
      .data(data)
      .type("tree_map")
      .id("State")
      .size("Assault")
      .time("Year")
      .draw()
}

var data2 = [
    {"year": 1991, "name":"alpha", "value": 15},
    {"year": 1991, "name":"beta", "value": 10},
    {"year": 1991, "name":"gamma", "value": 5},
    {"year": 1991, "name":"delta", "value": 50},
    {"year": 1992, "name":"alpha", "value": 20},
    {"year": 1992, "name":"beta", "value": 10},
    {"year": 1992, "name":"gamma", "value": 10},
    {"year": 1992, "name":"delta", "value": 43},
    {"year": 1993, "name":"alpha", "value": 30},
    {"year": 1993, "name":"beta", "value": 40},
    {"year": 1993, "name":"gamma", "value": 20},
    {"year": 1993, "name":"delta", "value": 17},
    {"year": 1994, "name":"alpha", "value": 60},
    {"year": 1994, "name":"beta", "value": 60},
    {"year": 1994, "name":"gamma", "value": 25},
    {"year": 1994, "name":"delta", "value": 32}
  ]

  function make_viz2(data2){
  var visualization = d3plus.viz()
      .container("#viz2")
      .data(data2)
      .type("tree_map")
      .id("name")
      .size("value")
      .time("year")
      .draw()
}

make_viz2(data2)


