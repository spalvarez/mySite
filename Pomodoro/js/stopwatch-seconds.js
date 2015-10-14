function stopwatchSeconds() {
	var radius;
	var ctx;

	function draw(ctx, radius) {
		drawFace(ctx, radius);
		drawSecondNumbers(ctx, radius);
		drawTics(ctx, radius);
		drawTimerHand(ctx, radius);
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

	function drawSecondNumbers(ctx, radius) {
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
			ctx.fillText((num * 5).toString(), 0, 0);
			ctx.rotate(ang);
			ctx.translate(0, radius*0.78);
			ctx.rotate(-ang);
		}
	}

	function drawTics(ctx, radius) {
		var ang;
		var num;
		ctx.font = radius * 0.04 + 'px arial';
		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		for(num=1; num <= 60; num++) {
			ang = num * Math.PI/30 ;
			ctx.rotate(ang);
			ctx.translate(0, -radius*0.86);
			ctx.rotate(-ang);
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

	function drawTimerHand(ctx, radius, count) {
		//second hand
		second = (count * Math.PI / 30);
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
}