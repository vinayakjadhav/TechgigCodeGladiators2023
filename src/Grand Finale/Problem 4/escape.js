process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var output = 1;

var primeNumbers = [];
var noOfPhases;
var noOfStates;

// var myArgs = process.argv.slice(2);
// // /// console.log('myArgs: ', myArgs);
var timeTaken = 0;
process.stdin.on('data', function(data) {
  input_stdin += data;
  //  startTime = Date.now();
});


process.stdin.on('end', function() {
  input_stdin_array = input_stdin.replace(/\r/g, '').split("\n");

  //  // /// console.log(input_stdin_array);

  //Write code here
  var noOfTestCases = input_stdin_array[0];
  var P = noOfTestCases[0];
  var L = noOfTestCases[1];
  var Captain = [noOfTestCases[2], noOfTestCases[3]];
  var posts = [];
  var ropes = [];
  input_currentline = 1;
  for (var i = 0; i < P; i++) {
    posts[i] = input_stdin_array[input_currentline++].split(" ");
  }
  for (var i = P; i < L; i++) {
    ropes[i] = input_stdin_array[input_currentline++].split(" ");
  }

  /// console.log("Captain ", Captain);
  /// console.log("posts ", posts);
  /// console.log("ropes ", ropes);

  for (var k = 0; k < noOfTestCases; k++) {
    findPrimeNumbers(k, testCases[k].L, testCases[k].R)
  }



  //// /// console.log(output);
  process.stdout.write("" + output + "\n");
  // timeTaken = Date.now() - startTime;
  // // /// console.log(timeTaken, " ms timeTaken");


  function findPrimeNumbers(testCaseNo, start, end) {
    primeNumbers[testCaseNo] = [];
    for (var j = start; j <= end; j++) {
      var isPrime = isPrimeNumber(j);
      if (isPrime) {
        primeNumbers[testCaseNo].push(j);
        for (var k = end; k > j; k--) {
          var isPrime = isPrimeNumber(k);
          if (isPrime) {
            primeNumbers[testCaseNo].push(k);
            break;
          }
        }
        return primeNumbers[testCaseNo];
      }
    }
    return primeNumbers[testCaseNo];
  }

  function isPrimeNumber(number) {
    for (var i = 2; i < number; i++) {
      if (number % i == 0) return false;
    }
    return true;
  }

});