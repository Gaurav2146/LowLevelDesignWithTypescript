import { Expression } from "./Expression";
import { Number } from "./Number";
import { operations } from "./Operator";

let expression1 = new Expression(new Number(5), new Number(10), operations.ADD);

let expression2 = new Expression(
  new Number(15),
  new Number(21),
  operations.MULTIPLY
);

let expression = new Expression(expression1, expression2, operations.ADD);

 console.log( "Result is " + expression.evaluate());
