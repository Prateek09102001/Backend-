const fs = require('fs');

// Create a file
// fs.writeFile("hey.txt","Hello how are you?", (err)=>{
//     if(err) console.error(err);
//     else console.log("Done");
// })

// Append a file 
// fs.appendFile("hey.txt","I am good and you ?", function (err) {
//     if(err) console.error(err.message);
//     else console.log("Done!");
// })

// Read a file - please how to read file
// fs.readFile("hello.txt",'utf8',(err,data)=>{
//     if(err) console.error(err);
//     else console.log(data);
// })


// Change File name
// fs.rename("hey.txt","hello.txt", (err)=>{
//     if(err) console.error(err);
//     else console.log("Change File name");
// })

// Copy file to crate a new file
// fs.copyFile("hello.txt", "./Folder/new.txt", (err) => {
//     if (err) console.error(err.message);
//     else console.log("Copy file successfully!");
// })

// fs.unlink("./Folder/new.txt",(err)=>{
//     if(err) console.error(err);
//     else console.log("Delete File Successfully!");
// })


// rmdir and rm both delete folder 
// If folder is empty so {recursive: true} use kar bhi sakte ho or nahi bhi
// but is not empty so use {recursive: true}
// fs.rmdir("./Folder", {recursive: true},(err)=>{
//     if(err) console.error(err.message);
//     else console.log("Delete Folder Successfully!");
// })

// fs.rm("./Folder", {recursive: true},(err)=>{
//     if(err) console.error(err.message);
//     else console.log("Delete Folder Successfully!");
// })

const folderName = 'myFolder';
const fileName = 'myFile.txt';
const filePath = `${folderName}/${fileName}`;

// Create folder if it doesn't exist
// if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
// }

fs.writeFile(filePath, "Hello World!", (err) => {
    if (err) console.error(err.message);
    else console.log("Done");
});