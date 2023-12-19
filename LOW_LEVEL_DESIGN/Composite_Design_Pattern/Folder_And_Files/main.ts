import { Folder } from "./Folder";
import { File } from "./File";
//                Folder
//                 /  \
//                /    \
//               /      \
//             Folder  File
//             /  \  \
//            /    \  \
//          File File Folder
//                     /
//                    /
//                  File

let folder1 = new Folder();
let folder1_file1 = new File("Resume.pdf");

let folder2 = new Folder();
let folder2_file1 = new File("passpsort.png");
let folder2_file2 = new File("signature.png");
let folder2_folder1 = new Folder();
let folder2_folder1_file1 = new File("Icard.png")
folder2_folder1.addDirectory(folder2_folder1_file1);

folder2.addDirectory(folder2_file1);
folder2.addDirectory(folder2_file2);
folder2.addDirectory(folder2_folder1);

folder1.addDirectory(folder2);
folder1.addDirectory(folder1_file1);

folder1.ls();
