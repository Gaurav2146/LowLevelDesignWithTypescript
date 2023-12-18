import { Logging } from "./Logging";

export class InfoLogging extends Logging
{

    constructor(nextLogger:Logging|null)
    {
        super(nextLogger);
    }

    log(type:number,message:string)
    {
        if(type == 1)
        {
          console.log("INFO" , message);
        }
        else
        {
            super.log(type,message);
        }
    }
} 