import { Logging } from "./Logging";

export class DebugLogging extends Logging
{

    constructor(nextLogger:Logging|null)
    {
        super(nextLogger);
    }

    log(type:number,message:string)
    {
        if(type == 2)
        {
          console.log("DEBUG" , message);
        }
        else
        {
            super.log(type,message);
        }
    }
} 