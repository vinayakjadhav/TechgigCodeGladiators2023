process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var output;

var primeNumbers = [];
var noOfPhases;
var noOfStates;

// var myArgs = process.argv.slice(2);
// // /// console.log('myArgs: ', myArgs);
var timeTaken = 0;
process.stdin.on('data', function(data) {
  input_stdin += data;
});


process.stdin.on('end', function() {
  input_stdin_array = input_stdin.replace(/\r/g, '').split("\n");
  //  // /// console.log(input_stdin_array);

  startTime = Date.now();
  //Write code here
  var noOfTestCases = input_stdin_array[0];

  var sequence = [];
  input_currentline = 1;

  sequence = input_stdin_array[input_currentline].split(" ").map(a => +a);

  /// console.log("sequence ", sequence);
  output = sequence[0];

  var isContinuosNaturalNumbers = findifContinuousNaturalNumbers(sequence);
  /// console.log("sequence ", sequence, isContinuosNaturalNumbers);

  if (!isContinuosNaturalNumbers) {
    var faultIndex = -1;
    var fault = findFaultInContinuousNaturalNumbers(sequence, faultIndex);
    /// console.log("fault ", fault, sequence);

    //      prepend

    var d = Math.abs(fault - 1);

    var dt0 = d + "" + sequence[0];
    var f0 = +dt0 + fault;
    f0 = "" + f0;
    var f1 = +dt0 + fault + 1;
    f1 = "" + f1;
    var t1 = "" + sequence[fault];
    var t2 = "" + sequence[fault + 1];
    /// console.log("f0, f1, sequence[fault], sequence[fault + 1]", f0, f1, t1, t2);
    if (f0.split("").includes(t1) &&
      f1.split("").includes(t2)) {
      /// console.log("they are there");
      output = d + "" + sequence[0];
    } else {
      output = sequence[0] + "" + d;
    }

  }

  function findFaultInContinuousNaturalNumbers(sequence, faultIndex) {
    if (sequence.length == 1) return faultIndex;
    var s1 = sequence.slice(0, Math.floor(sequence.length / 2));
    var s2 = sequence.slice(Math.ceil(sequence.length / 2), sequence.length);
    /// console.log("s1", s1);
    /// console.log("s2", s2)

    if (!findifContinuousNaturalNumbers(s1)) {
      faultIndex = faultIndex + 0;
      return findFaultInContinuousNaturalNumbers(s1, faultIndex);
    } else {
      faultIndex = faultIndex + Math.ceil(sequence.length / 2);
      return findFaultInContinuousNaturalNumbers(s2, faultIndex);
    }
  }

  function findifContinuousNaturalNumbers(sequence) {
    var nos = sequence.map(a => +a);
    var sum = nos.reduce((acc, cur) => acc + cur, 0);
    //  /// console.log("sum", sum);
    var n = nos[nos.length - 1];
    var k = nos[0];
    var sumByFormula = ((n * (n + 1)) - ((k - 1) * k)) / 2;
    return sum == sumByFormula;
  }

  // for (var k = 0; k < noOfTestCases; k++) {
  //   findPrimeNumbers(k, testCases[k].L, testCases[k].R)
  // }
  //
  // for (var i = 0; i < primeNumbers.length; i++) {
  //   var l = primeNumbers[i].length;
  //   switch (l) {
  //     case 0:
  //       output[i] = -1;
  //       break;
  //     case 1:
  //       output[i] = 0;
  //       break;
  //     default:
  //       output[i] = primeNumbers[i][l - 1] - primeNumbers[i][0];
  //   }
  //
  //
  // }


  //// /// console.log(output);
  process.stdout.write("" + output + "\n");
  timeTaken = Date.now() - startTime;
  /// console.log(timeTaken / 1000 + "s");


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