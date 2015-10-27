/// <reference path="jquery.d.ts" />
/// <reference path="calc.ts" />

$(function () {
	var calc = new Calc.Calculator();
	var newResult = true;
	showNumber('0');

	$('.number').click(numButtonClick);
	$('#dot').click(dotButtonClick);
	$('#ac').click(clearAll);
	$('#ce').click(clearEntry);
	$('#perc').click(percButtonClick);
	$('#add').click(addButtonClick);
	$('#sub').click(subButtonClick);
	$('#mult').click(multButtonClick);
	$('#div').click(divButtonClick);
	$('#equals').click(equalButtonClick);


	function showNumber(a: string) {
		var display: number = +a;
		console.log('Displaying length: ' + a.length);
		if(a.length > 10) {
			display = +(+a).toPrecision(9);
		}

		$('#calcDisplayLabel').text(display.toString());
	}

	function numButtonClick() {
		var curNum = $('#calcDisplayLabel').text();
		if(+curNum === 0 || newResult) {
			curNum = '';
		}
		console.log(curNum.length + ' ' + curNum);

		if(curNum.trim().length < 10) {
			showNumber(curNum.trim() + $(this).text().trim());
			newResult = false;
		}
	}

	function dotButtonClick() {
		var curNum = $('#calcDisplayLabel').text();
		if(curNum.trim().length < 9 && curNum.indexOf('.') === -1){
			showNumber(curNum.trim() + $(this).text().trim());
		}
	}

	function percButtonClick() {
		var curNum = $('#calcDisplayLabel').text();
		showNumber((+curNum * 0.01).toString());
	}

	function addButtonClick() {
		performOp();
		calc.nextOperation = Calc.Operation.ADD;
	}

	function subButtonClick() {
		performOp();
		calc.nextOperation = Calc.Operation.SUB;
	}

	function multButtonClick() {
		performOp();
		calc.nextOperation = Calc.Operation.MULT;
	}

	function divButtonClick() {
		performOp();
		calc.nextOperation = Calc.Operation.MULT;
	}

	function equalButtonClick() {
		performOp();
		calc.nextOperation = Calc.Operation.NONE;
	}

	function performOp() {
		var curNum = $('#calcDisplayLabel').text();
		calc.performNextOperation(+curNum);
		showNumber(calc.curResult.toString());
		newResult = true;
	}

	function clearAll() {
		calc.resetCalc();
		showNumber('0');
	}

	function clearEntry() {
		showNumber('0');
	}

})