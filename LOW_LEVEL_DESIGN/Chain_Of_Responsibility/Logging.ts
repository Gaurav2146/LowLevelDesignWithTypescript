export abstract class Logging {
  nextLogger: Logging | null;

  constructor(nextLogger: Logging | null) {
    this.nextLogger = nextLogger;
  }

  log(type: number, message: string) {
    if (this.nextLogger != null) {
      this.nextLogger.log(type, message);
    }
  }
}
