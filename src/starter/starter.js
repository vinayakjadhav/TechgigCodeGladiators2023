process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var output = 0;
var outputb = 0;
var outputr = 0;

// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

process.stdin.on('data', function(data) {
  input_stdin += data;
});


process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\n"); // "\r\n" for local editor

  console.log(input_stdin_array)

  //Write code here


  process.stdout.write("" + output + "");
});