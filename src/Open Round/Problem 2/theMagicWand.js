process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var output = -1;

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\r\n");
  // console.log(input_stdin_array);

  //Write code here
  var numberOfIntegers = input_stdin_array[0].split(" ")[0];
  var numberOfQueries = input_stdin_array[0].split(" ")[1];
  var intArray = input_stdin_array[1].split(" ").map(i=>+i);
  var queries = input_stdin_array[2].split(" ").map(i=>+i);
  var magicWandCosts = [];

  // console.log(numberOfIntegers, numberOfQueries, intArray, queries
  for (var i = 0; i < queries.length; i++) {
    magicWandCosts[i] = 0;
    for (var j = 0; j < intArray.length; j++) {
      magicWandCosts[i] += Math.abs(intArray[j] - queries[i]);
    }
  }

  // console.log(magicWandCosts);

  output = magicWandCosts.join(" ");
  // console.log(output);
  process.stdout.write("" + output + "");
});
