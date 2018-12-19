var bgcanvas = document.getElementById('bg');

if (bgcanvas.getContext) {
	var bgctx = bgcanvas.getContext('2d');

	bgctx.drawImage(document.getElementById('vykort'),0,0, 680, 398);
}

