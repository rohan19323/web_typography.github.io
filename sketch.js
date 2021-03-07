var points;
var font;
var amt;
var multiplier = 0.4;
var r = [];


function preload() {
    font = loadFont('TechnaSans-Regular.otf');
}


function setup() {
    createCanvas(1600, 500);
    background(1);


    points = font.textToPoints('chaotic', 50, 200, 150, {
        sampleFactor: .9,
        simplifyThreshold: 0
    });
}


function draw() {
    
    rect(0, 0, width, height);

    
    for(let i= 0; i < points.length; i++) {

        

        
        var p = points[i]; //used for getting the location of each point
        amt = map(mouseX, 0, width, 0, 85); //used to calculate mouse speed as we move our mouse along the X-axis
        var nX = noise(p.x + p.y + (frameCount * multiplier)); //used to generate random points but in a naturally ordered and smooth fashion.
        var locX = map(nX, 0, 1, -amt, amt); //used to calculate new X-coordinate
        var nY = noise(p.x + p.y + (frameCount * multiplier)); //same steps as above used to calculate new Y-coordinate
        var locY = map(nY, 0, 1, -amt, amt);
        
        ellipse(p.x+locX ,p.y+locY , 4, 4); //creating ellipses by adding the new location to the initial location
    }
}