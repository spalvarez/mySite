function stopwatch(canvas, sessionMinutes, breakMinutes) {

	this.canvas = canvas;
	this.sessionMinutes = sessionMinutes;
	this.breakMinutes = breakMinutes;
	var innerStopwatch;
	var onBreak = false;
	var timerInterval;

	this.drawStopwatch = function() {

		var ctx = canvas.getContext('2d');
		var radius = canvas.height / 2;
		ctx.translate(radius, radius);
		radius = radius * 0.90;

		innerStopwatch = new stopwatchSeconds(ctx, radius, 0, this.sessionMinutes, this.breakMinutes);
		innerStopwatch.draw();
	}

	this.startTimer = function() {
		timerInterval = setInterval(updateClock, 1000);
	}

	this.stopTimer = function() {
		clearInterval(timerInterval);
	}

	function updateClock(){
		if(!onBreak && innerStopwatch.count === 59 &&innerStopwatch.sessionMinutes === 1) {

			onBreak = true;
			innerStopwatch.onBreak = true;
			innerStopwatch.count = 0;
			innerStopwatch.sessionMinutes = this.sessionMinutes;
		}
		else if(onBreak && innerStopwatch.count == 59 && innerStopwatch.breakMinutes == 1) {

			onBreak = false;
			innerStopwatch.onBreak = false;
			innerStopwatch.count = 0;
			innerStopwatch.breakMinutes = this.breakMinutes;
		}
		else if(innerStopwatch.count === 59 && !onBreak) {

			innerStopwatch.count = 0;
			innerStopwatch.sessionMinutes--;
		}
		else if(innerStopwatch.count === 59 && onBreak) {

			innerStopwatch.count = 0;
			innerStopwatch.breakMinutes--;
		}
		else {
			innerStopwatch.count++;
		}

		var ctx = canvas.getContext('2d');
		ctx.clearRect(-(canvas.width/2),-(canvas.height/2), canvas.width, canvas.height);
		innerStopwatch.draw();
	}
}