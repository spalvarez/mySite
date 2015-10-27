var Calc;
(function (Calc) {
    var Calculator = (function () {
        function Calculator() {
            this._curResult = 0;
            this._nextOperation = Operation.NONE;
            this.init = true;
        }
        Calculator.prototype.resetCalc = function () {
            this._curResult = 0;
            this.init = true;
        };
        Object.defineProperty(Calculator.prototype, "curResult", {
            get: function () {
                return this._curResult;
            },
            set: function (val) {
                this._curResult = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Calculator.prototype, "nextOperation", {
            get: function () {
                return this._nextOperation;
            },
            set: function (op) {
                this._nextOperation = op;
            },
            enumerable: true,
            configurable: true
        });
        Calculator.prototype.performNextOperation = function (val) {
            if (this.init) {
                this.init = false;
                this._curResult = val;
                return;
            }
            switch (this._nextOperation) {
                case Operation.ADD:
                    this._curResult = this.add(this._curResult, val);
                    break;
                case Operation.SUB:
                    this._curResult = this.subtract(this._curResult, val);
                    break;
                case Operation.MULT:
                    this._curResult = this.multiply(this._curResult, val);
                    break;
                case Operation.DIV:
                    this._curResult = this.divide(this._curResult, val);
                    break;
                case Operation.NONE:
                    this._curResult = val;
                    break;
            }
        };
        Calculator.prototype.add = function (a, b) {
            return a + b;
        };
        Calculator.prototype.subtract = function (a, b) {
            return a - b;
        };
        Calculator.prototype.multiply = function (a, b) {
            return a * b;
        };
        Calculator.prototype.divide = function (a, b) {
            return a / b;
        };
        return Calculator;
    })();
    Calc.Calculator = Calculator;
    (function (Operation) {
        Operation[Operation["ADD"] = 0] = "ADD";
        Operation[Operation["SUB"] = 1] = "SUB";
        Operation[Operation["MULT"] = 2] = "MULT";
        Operation[Operation["DIV"] = 3] = "DIV";
        Operation[Operation["NONE"] = 4] = "NONE";
    })(Calc.Operation || (Calc.Operation = {}));
    var Operation = Calc.Operation;
    ;
})(Calc || (Calc = {}));
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
    function showNumber(a) {
        var display = +a;
        console.log('Displaying length: ' + a.length);
        if (a.length > 10) {
            display = +(+a).toPrecision(9);
        }
        $('#calcDisplayLabel').text(display.toString());
    }
    function numButtonClick() {
        var curNum = $('#calcDisplayLabel').text();
        if (+curNum === 0 || newResult) {
            curNum = '';
        }
        console.log(curNum.length + ' ' + curNum);
        if (curNum.trim().length < 10) {
            showNumber(curNum.trim() + $(this).text().trim());
            newResult = false;
        }
    }
    function dotButtonClick() {
        var curNum = $('#calcDisplayLabel').text();
        if (curNum.trim().length < 9 && curNum.indexOf('.') === -1) {
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
});
