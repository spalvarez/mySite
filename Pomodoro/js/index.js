$(function() {
	var timerCanvas = document.getElementById('timerCanvas');
	var myStopwatch = new stopwatch(timerCanvas, 25, 5);
	myStopwatch.drawStopwatch(timerCanvas);
});