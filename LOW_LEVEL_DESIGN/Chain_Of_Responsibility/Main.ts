import { DebugLogging } from "./DebugLogging";
import { ErrorLogging } from "./ErrorLogging";
import { InfoLogging } from "./InfoLogging";


let logging = new InfoLogging(new DebugLogging(new ErrorLogging(null)));

logging.log(1,"This is First log");
logging.log(2,"This is second log");
logging.log(3,"This is third log");
logging.log(4,"This is fourth log");