import { Logging } from "./Logging";

export class ErrorLogging extends Logging
{

    constructor(nextLogger:Logging)
    {
        super(nextLogger);
    }

    log(type:number,message:string)
    {
        if(type == 3)
        {
          console.log("ERROR" , message);
        }
        else
        {
            super.log(type,message);
        }
    }
} 