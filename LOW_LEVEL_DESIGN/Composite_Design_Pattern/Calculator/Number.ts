import { Operation } from "./Operation";

export class Number implements Operation {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  evaluate(): number {
    return this.value;
  }
}
