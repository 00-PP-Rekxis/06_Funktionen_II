
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : check! | ??????
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendwas ging schief!";

startApp();
function startApp() {
	output(calculator(getNum(), getNum(), getOp()));
}

function getNum() {
	return parseInt(prompt("Zahl?"));
}

function getOp() {
	return prompt("Operator?");
}

// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));	// Expected: 5
// output(calculator(3,2,"-"));	// Expected: 1
// output(calculator(3,2,"*"));	// Expected: 6
// output(calculator(3,2,":"));	// Expected: 1.5
// output(calculator(3,2,"/"));	// Expected: 1.5
// output(calculator(3,0,"/"));	// Expected: ERROR_STR_DIV
// output(calculator(3,2,"#?!"));	// Expected: ERROR_STR_GEN
function calculator(a, b, op) {
	switch (op) {
		case "+":
			return add(a, b);
		case "-":
			return sub(a, b);
		case "*":
			return multiply(a, b);
		case ":":
		case "/":
			return divide(a, b);
		default:
			return ERROR_STR_GEN;
	}
}

// module: addition a + b | test:
// output(add(2, 2)); 		// Expected: 4
// output(add(2, -2));		// Expected: 0
// output(add(2, 0));		// Expected: 2
function add(a, b) {
	return a + b;
}

// module: subtraktion a - b | test:
// output(sub(3, 2));		// Expected: 1	
// output(sub(3, -2));		// Expected: 5
// output(sub(3, 0));		// Expected: 3
// output(sub(0, 3));		// Expected: -3
function sub(a, b) {
	return a - b;
}

// module: multiplikation a - b | test:
// output(multiply(3,2));	// Expected: 6
// output(multiply(3,-2));	// Expected: -6	
// output(multiply(3,0));	// Expected: 0
function multiply(a, b) {
	return a * b;
}

// module: division a - b | test:
// output(divide(4,2));		// Expected: 2
// output(divide(3,2));		// Expected: 1.5
// output(divide(3,-2));	// Expected: -1.5
// output(divide(0,2));		// Ecpected: 0
// output(divide(3,0));		// Expected: ERROR_STR_DIV
function divide(a, b) {

	if (b == 0) { // Ausnahme + Abbruch
		return ERROR_STR_DIV;
	}

	return a / b; // Regel

}

// module: output | test:
// output("hello");			// Expected: "hello"
// output(2);				// Expected: 2
function output(outputData) {
	console.log(outputData);
}
