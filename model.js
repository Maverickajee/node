// 1)create a http.Server
// -----------------------------------
// var http=require('http');
// http.createServer().listen(8080,function(){
//     console.log("hai it is started")
// });
// ____________________________________________________
// 2)print in localhost
// --------------------------
// var http=require('http');
// http.createServer(function(req,res){
//     res.write("Hello Bhaai");
//     res.end()
// }).listen(8080);
// ________________________________________
// 3)print request details 
// ---------------------------------
// const { defaultMaxListeners } = require('events');
// var http=require('http');
// http.createServer(function(req,res){
//     console.log(req);
// }).listen(4000);
// ________________________________________________
// 4)current working current Directory
// ---------------------------------------
// var fs = require('fs');

// //a) Get the current working directory
// const currentDirectory = process.cwd();
// console.log('Current Working Directory:', currentDirectory);
// ________________________________________________
// 5)Files in our working FileSystemDirectoryEntry
// ---------------------------------------------
// var fs = require('fs');
// const CurrentDirectory = process.cwd();
// fs.readdir(CurrentDirectory, (err, files) => {
//    if (err) {
//      console.error('Error reading file system:', err);
//      return;
//    }

//    console.log('File System:');
//    files.forEach((file) => {
//      console.log('- ' + file);
//    });
// });
// ____________________________________________________
// 6) read a text file and print it 
// -------------------------------------
// const fs = require('fs');

// fs.readFile('test.txt', 'utf-8', function(err, data) {
//     if (err) {
//         console.error("Error reading the file:", err);
//         return;
//     }
//     console.log(data);
// });
// ________________________________________________
// 7) todays Date
// -------------------------
// exports.currentDateTime = new Date().toLocaleDateString()

// var dt = require('./currentDateTime.js');

// console.log(dt.currentDateTime);
// currentDateTime.js
// --------------------------
// exports.currentDateTime = new Date().toLocaleDateString()
// ________________________________________________
//8)remaining days
// -------------------------------
// const { getRemainingDays } = require('./dateTime.js');

// const readline = require('readline').createInterface({
//    input: process.stdin,
//    output: process.stdout
//  });

//  readline.question('Enter a date (YYYY-MM-DD): ', (inputDate) => {
//    const remainingDays = getRemainingDays(inputDate);
//    console.log(`Remaining days: ${remainingDays}`);

//    readline.close();
// });
// dateTime.js
// ------------------------
// function getRemainingDays(inputDate) {
//     const currentDate = new Date();
//     const targetDate = new Date(inputDate);
 
//     const differenceMs = targetDate - currentDate;
 
//     const remainingDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
 
//     return remainingDays;
//  }
// module.exports = { getRemainingDays };
// ______________________________________________________________
// 9)no of days between two days
// ------------------------------------
// const { getRemainingDays } = require('./dateTime.js');

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Enter the start date (YYYY-MM-DD): ', (startDate) => {
//   readline.question('Enter the end date (YYYY-MM-DD): ', (endDate) => {
//     const remainingDays = getRemainingDays(startDate, endDate);
//     console.log(`Remaining days: ${remainingDays}`);

//     readline.close();
//   });
// });
// dateTime.js
// ------------------------------
// function getRemainingDays(startDate, endDate) {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
  
//     const differenceMs = end - start;
  
//     const remainingDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
  
//     return remainingDays;
//   }
  
//   module.exports = { getRemainingDays };
// ____________________________________________

