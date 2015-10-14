function stopwatch(canvas) {

	this.canvas = canvas;
	var innerStopwatch;
	this.drawStopwatch = function() {

		var ctx = canvas.getContext('2d');
		var radius = canvas.height / 2;
		ctx.translate(radius, radius);
		radius = radius * 0.90;

		innerStopwatch = new stopwatchSeconds(ctx, radius, 0);
		innerStopwatch.draw();
		setInterval(updateClock, 1000);
	}

	function updateClock(){
		innerStopwatch.count++;
		innerStopwatch.draw();
	}
}