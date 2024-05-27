var fs=require("fs");
var ans= fs.readFileSync("demo.html","utf-8");
console.log(ans);
console.log("File operation completed");