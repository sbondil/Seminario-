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

// Sankey Graph
var edges = [
      {"strength": 212, "source": 4, "target": 1},
    {"strength": 402, "source": 2, "target": 0},
    {"strength": 1238, "source": 3, "target": 5},
    {"strength": 261, "source": 6, "target": 5},
    {"strength": 1720, "source": 6, "target": 7},
    {"strength": 81, "source": 4, "target": 2},
    {"strength": 1204, "source": 1, "target": 0},
    {"strength": 3067, "source": 1, "target": 7},
    {"strength": 40, "source": 4, "target": 6},
    {"strength": 363, "source": 0, "target": 5},
    {"strength": 58, "source": 5, "target": 4},
    {"strength": 460, "source": 4, "target": 7},
    {"strength": 206, "source": 8, "target": 0},
    {"strength": 588, "source": 1, "target": 5},
    {"strength": 211, "source": 1, "target": 4},
    {"strength": 1014, "source": 1, "target": 3},
    {"strength": 220, "source": 1, "target": 8},
    {"strength": 1074, "source": 2, "target": 3},
    {"strength": 365, "source": 5, "target": 0},
    {"strength": 1072, "source": 3, "target": 2},
    {"strength": 283, "source": 8, "target": 7},
    {"strength": 864, "source": 8, "target": 3},
    {"strength": 808, "source": 0, "target": 3},
    {"strength": 636, "source": 6, "target": 3},
    {"strength": 640, "source": 5, "target": 1},
    {"strength": 726, "source": 5, "target": 2},
    {"strength": 773, "source": 1, "target": 6},
    {"strength": 282, "source": 7, "target": 8},
    {"strength": 262, "source": 5, "target": 6},
    {"strength": 71, "source": 4, "target": 0},
    {"strength": 58, "source": 4, "target": 5},
    {"strength": 104, "source": 5, "target": 8},
    {"strength": 211, "source": 0, "target": 8},
    {"strength": 1, "source": 4, "target": 8},
    {"strength": 420, "source": 2, "target": 8},
    {"strength": 83, "source": 8, "target": 5},
    {"strength": 801, "source": 3, "target": 0},
    {"strength": 71, "source": 0, "target": 4},
    {"strength": 244, "source": 8, "target": 1},
    {"strength": 1012, "source": 3, "target": 1},
    {"strength": 780, "source": 6, "target": 1},
    {"strength": 762, "source": 2, "target": 5},
    {"strength": 81, "source": 2, "target": 4},
    {"strength": 2156, "source": 3, "target": 7},
    {"strength": 2177, "source": 7, "target": 3},
    {"strength": 117, "source": 8, "target": 6},
    {"strength": 117, "source": 6, "target": 8},
    {"strength": 461, "source": 7, "target": 4},
    {"strength": 1206, "source": 0, "target": 1},
    {"strength": 1206, "source": 5, "target": 3},
    {"strength": 2144, "source": 7, "target": 0},
    {"strength": 2384, "source": 2, "target": 7},
    {"strength": 40, "source": 6, "target": 4},
    {"strength": 863, "source": 3, "target": 8},
    {"strength": 646, "source": 3, "target": 6}
      ];

var nodes = [
    {"id": "Arizona"},
    {"id": "Colorado"},
    {"id": "Georgia"},
    {"id": "Illinois"},
    {"id": "Kansas"},
    {"id": "Missouri"},
    {"id": "Nevada"},
    {"id": "Texas"},           
    {"id": "Wisconsin"},
    {"id": "Inconnue"}
  ];


  var visualization = d3plus.viz()
    .container("#viz")
    .edges({
      "strength": "strength",
      "value": edges
    })
    .focus({
      "tooltip": true,
      "value": "Georgia"
    })
    .id("id")
    .nodes(nodes)
    .size(100)
    .type("sankey")
    .draw();

// Scatter Plot Graph

  // sample data array
  var sample_data = [
    {"avgtime": 194, "nbVol" : 31, "destination": "Virgin Islands, U.S."},
    {"avgtime": 122, "nbVol" : 205, "destination": "Illinois"},
    {"avgtime": 645, "nbVol" : 35, "destination": "Hawaii"},
    {"avgtime": 344, "nbVol" : 2044, "destination": "California"},
    {"avgtime": 120, "nbVol" : 145, "destination": "Tennessee"},
    {"avgtime": 79, "nbVol" : 229, "destination": "Ohio"},
    {"avgtime": 315, "nbVol" : 304, "destination": "Nevada"},
    {"avgtime": 109, "nbVol" : 92, "destination": "Gujarat"},
    {"avgtime": 126, "nbVol" : 77, "destination": "Massachusetts"},
    {"avgtime": 219, "nbVol" : 463, "destination": "Texas"},
    {"avgtime": 344, "nbVol" : 83, "destination": "Oregon"},
    {"avgtime": 302, "nbVol" : 246, "destination": "Arizona"},
    {"avgtime": 47, "nbVol" : 152, "destination": "Vermont"},
    {"avgtime": 82, "nbVol" : 548, "destination": "North Carolina"},
    {"avgtime": 191, "nbVol" : 308, "destination": "Carolina"},
    {"avgtime": 114, "nbVol" : 404, "destination": "Georgia"},
    {"avgtime": 101, "nbVol" : 120, "destination": "South Carolina"},
    {"avgtime": 91, "nbVol" : 141, "destination": "Michigan"},
    {"avgtime": 147, "nbVol" : 1745, "destination": "Florida"},
    {"avgtime": 265, "nbVol" : 20, "destination": "New Mexico"},
    {"avgtime": 178, "nbVol" : 126, "destination": "Louisiana"},
    {"avgtime": 259, "nbVol" : 3, "destination": "Wyoming"},
    {"avgtime": 100, "nbVol" : 88, "destination": "Kentucky"},
    {"avgtime": 54, "nbVol" : 596, "destination": "New York"},
    {"avgtime": 65, "nbVol" : 133, "destination": "Pennsylvania"},
    {"avgtime": 49, "nbVol" : 57, "destination": "Maine"},
    {"avgtime": 191, "nbVol" : 24, "destination": "Ponce"},
    {"avgtime": 338, "nbVol" : 236, "destination": "Washington"},
    {"avgtime": 233, "nbVol" : 124, "destination": "Colorado"},
    {"avgtime": 53, "nbVol" : 579, "destination": "Virginia"},
    {"avgtime": 284, "nbVol" : 226, "destination": "Utah"}
  ]

  // instantiate d3plus
  var visualization = d3plus.viz()
    .container("#viz3")  // container DIV to hold the visualization
    .data(sample_data)  // data to use with the visualization
    .type("scatter")    // visualization type
    .id("destination")         // key for which our data is unique on
    .x("avgtime")         // key for x-axis
    .y("nbVol")        // key for y-axis
    .draw()             // finally, draw the visualization!