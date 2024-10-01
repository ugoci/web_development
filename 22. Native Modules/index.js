const fs = require("fs");

//Both examples below assume that the file is saved in the same directory. In other instances, you might want to include the full file path. See documentation

// Writing data to a file and saving it on the system____________________________
/*fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
*/

// Reading data from a file saved in the system____________________________________________
fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });