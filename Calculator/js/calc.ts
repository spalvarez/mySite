module Calc {

	export class Calculator {
		private _curResult: number = 0;
		private _nextOperation: Operation = Operation.NONE;
		private init : boolean = true;

		public resetCalc() : void {
			this._curResult = 0;
			this.init = true;
		}

		get curResult() : number {
			return this._curResult;
		}

		set curResult(val: number) {
			this._curResult = val;
		}

		get nextOperation(): Operation {
			return this._nextOperation;
		}

		set nextOperation(op : Operation) {
			this._nextOperation = op;
		}

		performNextOperation(val: number) : void {
			if(this.init) {
				this.init = false;
				this._curResult = val;
				return;
			}

			switch(this._nextOperation) {
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
		}

		private add(a: number, b: number) {
			return a + b;
		}

		private subtract(a: number, b: number) {
			return a - b;
		}

		private multiply(a: number, b: number){
			return a * b;
		}

		private divide(a: number, b: number) {
			return a / b;
		}
	}

	export enum Operation { ADD, SUB, MULT, DIV, NONE };
}