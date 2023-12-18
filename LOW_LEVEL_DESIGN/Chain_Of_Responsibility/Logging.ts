
export abstract class Logging
{
   nextLogger:Logging;

   constructor(nextLogger:Logging)
   {
    this.nextLogger=nextLogger;
   }

   log(type:number,message:string)
   {
     if(this.nextLogger!=null)
     {
        this.nextLogger.log(type,message);
     }
   }
}