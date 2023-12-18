import { DebugLogging } from "./DebugLogging";
import { ErrorLogging } from "./ErrorLogging";
import { InfoLogging } from "./InfoLogging";
const readline = require('readline');

// Create an interface to read from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let logging = new InfoLogging(new DebugLogging(new ErrorLogging(null)));

function askForInput() {
// Prompt the user for input
rl.question('Enter log type ', (logType: number) => {
    rl.question('Enter log message ', (logMessage: string) => {
            logging.log(logType, logMessage);
            askForInput();
    });
});
}

askForInput();

// rl.close();
// // Event listener for when the interface is closed
// rl.on('close', () => {
//     console.log('Input interface closed.');
// });