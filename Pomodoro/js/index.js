$(function() {
	var timerCanvas = document.getElementById('timerCanvas');
	var myStopwatch = new stopwatch(timerCanvas, 25, 5);
	myStopwatch.drawStopwatch(timerCanvas);

	$('.start-button').click(function() {
		$(this).toggleClass('on');

		if($(this).hasClass('on')) {
			myStopwatch.startTimer();
			hideSelectors();
		}
		else {
			myStopwatch.stopTimer();
			showSelectors();
		}
	});

	function hideSelectors() {
		$('.break-label-div').css('visibility','hidden');
		$('.session-label-div').css('visibility','hidden');
		$('.break-length-div').css('visibility','hidden');
		$('.session-length-div').css('visibility','hidden');
	}

	function showSelectors() {
		$('.break-label-div').css('visibility','visible');
		$('.session-label-div').css('visibility','visible');
		$('.break-length-div').css('visibility','visible');
		$('.session-length-div').css('visibility','visible');
	}
});