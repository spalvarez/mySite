$(function() {
	var timerCanvas = document.getElementById('timerCanvas');
	var breakLength = $('#breakLength').text();
	var sessionLength = $('#sessionLength').text();
	var myStopwatch = new stopwatch(timerCanvas, 25, 5);
	myStopwatch.drawStopwatch();

	$('#decrease-break-button').click(decreaseBreakLength);
	$('#increase-break-button').click(increaseBreakLength);
	$('#decrease-session-button').click(decreaseSessionLength);
	$('#increase-session-button').click(increaseSessionLength);
	$('.start-button').click(function startClick() {
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

	function decreaseBreakLength() {
		if(parseInt(breakLength) > 1) {
			breakLength--;
			$('#breakLength').text(breakLength);
			redrawClock();
		}
	}

	function increaseBreakLength() {
		if(parseInt(breakLength) < 90) {
			breakLength++;
			$('#breakLength').text(breakLength);
			redrawClock();
		}
	}

	function decreaseSessionLength() {
		if(parseInt(sessionLength) > 1) {
			sessionLength--;
			$('#sessionLength').text(sessionLength);
			redrawClock();
		}
	}

	function increaseSessionLength() {
		if(parseInt(sessionLength) < 90) {
			sessionLength++;
			$('#sessionLength').text(sessionLength);
			redrawClock();
		}
	}

	function redrawClock() {
		myStopwatch.resetStopwatch(breakLength, sessionLength);
	}
});