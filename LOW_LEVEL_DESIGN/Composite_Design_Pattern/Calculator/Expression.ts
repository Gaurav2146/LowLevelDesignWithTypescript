import { Operation } from "./Operation";
import { operations } from "./Operator";

export class Expression implements Operation {
  private letftExpression: Operation;
  private rightExpression: Operation;
  private operator: operations;

  constructor(
    letftExpression: Operation,
    rightExpression: Operation,
    operator: operations
  ) {
    this.letftExpression = letftExpression;
    this.rightExpression = rightExpression;
    this.operator = operator;
  }

  evaluate(): number {
    switch (this.operator) {
      case operations.ADD:
        return (
          this.letftExpression.evaluate() + this.rightExpression.evaluate()
        );

      case operations.SUBSTRACT:
        return (
          this.letftExpression.evaluate() - this.rightExpression.evaluate()
        );

      case operations.MULTIPLY:
        return (
          this.letftExpression.evaluate() * this.rightExpression.evaluate()
        );
    }
  }
}
