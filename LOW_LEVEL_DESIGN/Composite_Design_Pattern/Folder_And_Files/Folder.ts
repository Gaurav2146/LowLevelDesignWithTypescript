import { FileOrFolder } from "./FileOrFolder";

export class Folder implements FileOrFolder {
  private directory: FileOrFolder[];

  constructor() {
    this.directory = new Array();
  }

  addDirectory(input: FileOrFolder) {
    this.directory.push(input);
  }

  ls(): void {
    for (let data of this.directory) {
      data.ls();
    }
  }
}
