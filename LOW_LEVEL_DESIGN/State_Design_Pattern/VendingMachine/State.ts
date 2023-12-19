import { Machine } from "./Machine";

export interface State{

    idleState(machine:Machine):void

    hasMoneyState(machine:Machine):void

    selectProductState(machine:Machine):void

    productDespenseState(machine:Machine):void

    cancelState(machine:Machine):void

    insufficeientFund(machine:Machine):void

}