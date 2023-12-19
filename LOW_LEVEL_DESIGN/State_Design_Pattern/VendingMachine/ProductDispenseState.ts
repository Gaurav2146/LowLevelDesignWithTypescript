import { Machine } from "./Machine";
import { State } from "./State";

export class ProductDispenseState implements State
{
    idleState(machine: Machine): void {
        throw new Error("Method not implemented.");
    }
    hasMoneyState(machine: Machine): void {
        throw new Error("Method not implemented.");
    }
    selectProductState(machine: Machine): void {
        throw new Error("Method not implemented.");
    }
    productDespenseState(machine: Machine): void {
        throw new Error("Method not implemented.");
    }
    cancelState(machine: Machine): void {
        throw new Error("Method not implemented.");
    }
    insufficeientFund(machine: Machine): void {
        throw new Error("Method not implemented.");
    }

}