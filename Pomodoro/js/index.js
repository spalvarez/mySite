$(function() {
	var timerCanvas = document.getElementById('timerCanvas');
	var myStopwatch = new stopwatch(timerCanvas, 25, 5);
	myStopwatch.drawStopwatch(timerCanvas);
/*
	var canvas = document.getElementById('clockCanvas');
	var ctx = canvas.getContext('2d');
	var radius = canvas.height / 2;
	ctx.translate(radius, radius);
	radius = radius * 0.90;
	//redraw once a second
	setInterval(drawClock, 1000);

	function drawClock() {
		drawFace(ctx, radius);		
		drawMinuteNumbers(ctx, radius);
		drawSecondNumbers(ctx, radius);
		drawHands(ctx, radius);
	}

	function drawFace(ctx, radius) {
		var grad;

		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, 2 * Math.PI);
		ctx.fillStyle = '#fff';
		ctx.fill();
		

		grad = ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
		grad.addColorStop(0, '#333');
		grad.addColorStop(0.5, '#fff');
		grad.addColorStop(1, '#333');
		ctx.strokeStyle = grad;
		ctx.lineWidth = radius * 0.1;
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(0, 0, radius*0.1, 0, 2 * Math.PI);
		ctx.fillStyle = '#333';
		ctx.fill();
	}

	function drawMinuteNumbers(ctx, radius) {
		var ang;
		var num;
		ctx.font = radius * 0.15 + 'px arial';
		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		for(num=1; num < 13; num++) {
			ang = num * Math.PI / 6;
			ctx.rotate(ang);
			ctx.translate(0, -radius*0.78);
			ctx.rotate(-ang);
			ctx.fillText(num.toString(), 0, 0);
			ctx.rotate(ang);
			ctx.translate(0, radius*0.78);
			ctx.rotate(-ang);
		}
	}

	function drawSecondNumbers(ctx, radius) {
		var ang;
		var num;
		ctx.font = radius * 0.04 + 'px arial';
		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		for(num=1; num <= 60; num++) {
			//if(num%5 === 0) {
			//	continue;
			//}

			ang = num * Math.PI/30 ;
			ctx.rotate(ang);
			ctx.translate(0, -radius*0.86);
			ctx.rotate(-ang);
			//ctx.fillText(num.toString(), 0, 0);
			var tickWidth = radius * 0.01;
			if(num%5 === 0) {
				tickWidth *= 2;
			}
			drawHand(ctx, ang, radius * 0.1, tickWidth);
			ctx.rotate(ang);
			ctx.translate(0, radius*0.86);
			ctx.rotate(-ang);
		}
	}

	function drawHands(ctx, radius) {
		var now = new Date();
		var hour = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();
		//hour hand
		hour = hour % 12;
		hour = (hour * Math.PI/6) + (minute * Math.PI/(6*60));
		drawHand(ctx, hour, radius * .5, radius*0.07);
		//minute hand
		minute = (minute * Math.PI / 30) + (second * Math.PI / (30*60));
		drawHand(ctx, minute, radius*0.8, radius*0.07);
		//second hand
		second = (second * Math.PI / 30);
		drawHand(ctx, second, radius*0.9, radius*0.02);
	}

	function drawHand(ctx, pos, length, width) {
		ctx.beginPath();
		ctx.lineWidth = width;
		ctx.lineCap = 'round';
		ctx.moveTo(0,0);
		ctx.rotate(pos);
		ctx.lineTo(0, -length);
		ctx.stroke();
		ctx.rotate(-pos);
	}
	*/
});