process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var output = [];

var sequenceToCheck = ["2", "14"];

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\n");
  console.log(input_stdin_array)

  //Write code here
  var seqNumber = "" + input_stdin_array[0];
  let i = 1;
  let roomNumber = 0;
  while (i <= +seqNumber) {
    if (isContiSubsequence(i)) {
      seqNumber++;
    }
    roomNumber++;
    console.log("iteration", i, "\r\n");
    i++;
  }
  //console.log("roomNumber ", roomNumber);

  output = roomNumber;

  process.stdout.write("" + output + "");
});

function isContiSubsequence(num) {
  num = "" + num;
  var yes = false;
  for (var i = 0; i < sequenceToCheck.length; i++) {
    var ct = 0;

    for (var j = 0; j < num.length; j++) {
      if (!sequenceToCheck[i][ct]) {
        console.log("breaking ", sequenceToCheck[i], "&", "ct =", ct);
        break;
      }
      console.log("checking ", sequenceToCheck[i][ct], "&", num[j], "ct =", ct);

      if (sequenceToCheck[i][ct] == num[j]) {
        console.log("inside as", sequenceToCheck[i][ct], " == ", num[j]);
        ct++;
      } else {
        if (ct > 0) j--;
        ct = 0;
      }
    }

    //  console.log("condition sequenceToCheck[i].length & ct", sequenceToCheck[i].length, " == ", ct)
    if (sequenceToCheck[i].length == ct) {
      yes = true;
      console.log("result of isContiSubsequence with ", num, sequenceToCheck, yes);
      return yes;
    }
  }


  return yes;
}