process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var output = [];

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\r\n");
  // console.log(input_stdin_array)

  //Write code here
  var launchTime = input_stdin_array[0].split(" ");
  var travelTime = input_stdin_array[1].split(" ");

  var launchTimeHr = launchTime[0];
  var launchTimeMin = launchTime[1]

  var travelTimeHr = travelTime[0];
  var travelTimeMin = travelTime[1]

  var blastTimeHr = +launchTimeHr + +travelTimeHr;
  var blastTimeMin = +launchTimeMin + +travelTimeMin;

  if (blastTimeMin >= 60) {
    blastTimeHr++;
    blastTimeMin -= 60;
  }
  if (blastTimeHr >= 24) {
    blastTimeHr = blastTimeHr - 24;
  }
  if (blastTimeMin < 10) {
    blastTimeMin = "0" + blastTimeMin;
  }
  if (blastTimeHr < 10) {
    blastTimeHr = "0" + blastTimeHr;
  }

  output = blastTimeHr + " " + blastTimeMin;

  //console.log(output);
  process.stdout.write("" + output + "");
});