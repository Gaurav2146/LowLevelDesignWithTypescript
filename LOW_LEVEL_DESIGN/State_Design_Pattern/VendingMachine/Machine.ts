import { IdleState } from "./IdleState";
import { Shelf } from "./Shelf";
import { State } from "./State";

export class Machine{

    state:State;
    shelf:Shelf[];

    constructor()
    {
        this.state = new IdleState();
        this.shelf=new Array();
    }

    addShelf(data:Shelf)
    {
        this.shelf.push(data);
    }

}