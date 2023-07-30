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
  var sequence;
  var subSequences;
  input_stdin_array = input_stdin.split("\r\n");
  // console.log(input_stdin_array)

  //Write code here
  const started = Date.now();
  var sequence = input_stdin_array[0];
  var noOfSubSequnces = input_stdin_array[1];
  output = new Array(+noOfSubSequnces).fill('NEGATIVE');
  var subSeqHeads = new Array(+noOfSubSequnces).fill(0);
  subSequnces = [];
  input_currentline = 2;
  for (var i = 0; i < noOfSubSequnces; i++) {
    //    // console.log(input_stdin_array[input_currentline]);
    subSequnces.push(input_stdin_array[input_currentline])
    input_currentline++;
  }
  // console.log(sequence);
  // console.log(noOfSubSequnces);
  // console.log(subSequnces);

  subSequence();

  function subSequence() {
    for (var i = 0; i < sequence.length; i++) {
      for (var j = 0; j < noOfSubSequnces; j++) {
        if (subSequnces[j][subSeqHeads[j]] == sequence[i]) {
          // console.log("(i,subSeqHeads)", i, subSeqHeads[j], "subSequnces[j][subSeqHeads[j]] == sequence[i] ", subSequnces[j][subSeqHeads[j]] == sequence[i]);
          subSeqHeads[j]++;
        } else if (!sequence.includes(subSequnces[j][subSeqHeads[j]])) {
          // console.log("sequence.includes(subSequnces[j][subSeqHeads[j]] ", sequence, subSequnces[j][subSeqHeads[j]], sequence.includes(subSequnces[j][subSeqHeads[j]]));
          output[j] = 'NEGATIVE';
          continue;
        }
      }

    }

    for (var j = 0; j < noOfSubSequnces; j++) {
      //  // console.log(subSeqHeads[j], (subSequnces[j].length))
      if (subSeqHeads[j] == subSequnces[j].length) {
        output[j] = "POSITIVE";
      }
    }
    return output;

  }

  // console.log(output.join("\n"));
  process.stdout.write("" + output.join("\n") + "");
  const gone = Date.now() - started;
  console.log("\n\nTime taken", gone / 1000, 's.');
});