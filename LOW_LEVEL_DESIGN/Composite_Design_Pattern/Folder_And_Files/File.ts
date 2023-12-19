import { FileOrFolder } from "./FileOrFolder";

export class File implements FileOrFolder {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  ls(): void {
    console.log("File name is " + this.fileName);
  }
}
