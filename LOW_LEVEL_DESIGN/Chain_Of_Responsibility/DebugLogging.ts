import { Logging } from "./Logging";

export class DebugLogging extends Logging
{

    constructor(nextLogger:Logging)
    {
        super(nextLogger);
    }

    log(type:number,message:string)
    {
        if(type == 1)
        {
          console.log("DEBUG" , message);
        }
        else
        {
            super.log(type,message);
        }
    }
} 