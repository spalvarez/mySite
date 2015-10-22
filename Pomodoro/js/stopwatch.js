function stopwatch(canvas, sessionMinutes, breakMinutes) {

	this.canvas = canvas;
	this.sessionMinutes = sessionMinutes;
	this.breakMinutes = breakMinutes;
	var innerStopwatch;
	var onBreak = false;
	var timerInterval;
	var snd;

	this.drawStopwatch = function drawWatch() {
		var ctx = canvas.getContext('2d');
		var radius = canvas.height / 2;
		ctx.translate(radius, radius);
		radius = radius * 0.90;

		innerStopwatch = new stopwatchSeconds(ctx, radius, 0, this.sessionMinutes, this.breakMinutes);
		innerStopwatch.draw();
	}

	this.resetStopwatch = function resetWatch(breakLength, sessionLength) {
		this.breakMinutes = breakLength;
		this.sessionMinutes = sessionLength;
		var ctx = canvas.getContext('2d');
		ctx.translate(-(canvas.width/2), -(canvas.height/2))
		ctx.clearRect(0,0, canvas.width, canvas.height);
		this.drawStopwatch();
	}

	this.startTimer = function startTime() {
		timerInterval = setInterval(updateClock, 1000, this.sessionMinutes, this.breakMinutes);
	}

	this.stopTimer = function stopTime() {
		clearInterval(timerInterval);
	}

	function updateClock(sessionMinutes, breakMinutes){
		if(!onBreak && innerStopwatch.count === 59 &&innerStopwatch.sessionMinutes === 1) {

			onBreak = true;
			playSound();
			innerStopwatch.onBreak = true;
			innerStopwatch.count = 0;
			if(sessionMinutes === 1) {
				innerStopwatch.sessionMinutes = 2;
			}
			else {
				innerStopwatch.sessionMinutes = sessionMinutes;
			}
			if(breakMinutes === 1) {
				innerStopwatch.breakMinutes = breakMinutes;
			}
			else {
				innerStopwatch.breakMinutes = 2;
			}
			
		}
		else if(onBreak && innerStopwatch.count == 59 && innerStopwatch.breakMinutes == 1) {

			onBreak = false;
			playSound();
			innerStopwatch.onBreak = false;
			innerStopwatch.count = 0;
			if(sessionMinutes === 1) {
				innerStopwatch.sessionMinutes = sessionMinutes;
			}
			else {
				innerStopwatch.sessionMinutes = 2;
			}
			if(breakMinutes === 1) {
				innerStopwatch.breakMinutes = 2;
			}
			else {
				innerStopwatch.breakMinutes = breakMinutes;
			}
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

		console.log('CurrentSession: ' + innerStopwatch.sessionMinutes + ' Current Break: ' + innerStopwatch.breakMinutes + '\n' +
					' Total Session: ' + sessionMinutes + ' Total Break: ' + breakMinutes);

		var ctx = canvas.getContext('2d');
		ctx.clearRect(-(canvas.width/2),-(canvas.height/2), canvas.width, canvas.height);
		innerStopwatch.draw();
	}

	function playSound() {
		// buffers automatically when created
		snd = new Audio("audio/Ship_Bell-Mike_Koenig-1911209136.mp3"); 
		snd.play();
	}
}