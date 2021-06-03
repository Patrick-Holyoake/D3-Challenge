// Define function
function makeResponsive() {
    
    //Select svg
    var svgArea = d3.select("body").select("svg");

    // Ensure svg is empty
    if (!svgArea.empty()) {
        svgArea.remove();
    }
    
    // Svg paramaters
    var svgWidth = window.innerWidth - 100;
    var svgHeight = window.innerHeight - 400;

    var margin = {
        top: 50,
        right: 50,
        bottom: 100,
        left: 50
        };
    
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    // Create svg wrapper
    var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);   

    var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Import data from the data.csv file
    d3.csv("assets/data/data.csv").then(censusData => {
        
        // Preview the data
        console.log(censusData);
        
    }






    