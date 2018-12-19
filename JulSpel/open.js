
let colorsHash = [];


var boxY = Math.floor(Math.random() * 101); 
var boxX = Math.floor(Math.random() * 101);

var canvas = document.getElementById('spelYta');

if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
}


function draw() {

	let box = {
		x: Math.floor(Math.random() * 370),
		y: Math.floor(Math.random() * 380),
		size: 25,
		color: getRandomColor()
	}

	ctx.fillStyle = box.color;
	ctx.fillRect(box.x, box.y, box.size , box.size );

	colorsHash[box.color] = box;
}

document.getElementById("spelYta").addEventListener("click", function(e) {
    let pixel = ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data;
    let color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
    let shape = colorsHash[color];
    if (shape) {
        console.log('click on: ' + shape.color);
    }
    //console.log(e.x, e.y, pixel);
}, false);

function getRandomColor() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}


