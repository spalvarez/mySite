function stopwatchMinutes(ctx, radius, count) {
	this.radius = radius;
	this.ctx = ctx;
	this.count = count;
	this.totalMinutes = count;

	this.draw = function drawMinutes(color) {
		drawFace(this.ctx, this.radius, color);
		drawTics(this.ctx, this.radius, this.totalMinutes);
		drawTimerHand(this.ctx, this.radius, this.count, this.totalMinutes);
	}

	function drawFace(ctx, radius, color) {
		var grad;

		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, 2 * Math.PI);
		ctx.fillStyle = color;
		ctx.fill();
		
		ctx.lineWidth = radius * 0.1;
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(0, 0, radius*0.1, 0, 2 * Math.PI);
		ctx.fillStyle = '#333';
		ctx.fill();
	}

	function drawTics(ctx, radius, minutes) {
		var ang;
		var num;
		ctx.font = radius * 0.04 + 'px arial';
		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		if(minutes === 1)
		{
			minutes++;
		}
		for(num=1; num <= minutes; num++) {
			ang = num * (360/minutes) * (Math.PI/180);
			ctx.rotate(ang);
			ctx.translate(0, -radius*0.86);
			ctx.rotate(-ang);
			var tickWidth = radius * 0.04;
			if(num%5 === 0) {
				tickWidth *= 2;
			}
			drawHand(ctx, ang, radius * 0.1, tickWidth);
			ctx.rotate(ang);
			ctx.translate(0, radius*0.86);
			ctx.rotate(-ang);
		}
	}

	function drawTimerHand(ctx, radius, count, minutes) {
		//second hand
		if(minutes ===1 && count === 1)
		{
			minutes++;
		}
		second = (minutes-count) * (360/minutes) * (Math.PI / 180);
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