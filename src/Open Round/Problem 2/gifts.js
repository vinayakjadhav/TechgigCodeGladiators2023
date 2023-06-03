// Read input from STDIN. Print your output to STDOUT.

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var _input_stdin = "";
var _input_stdin_array = "";
var _input_currentline = 0;
var output;

var noOfTestCases = 0;


process.stdin.on('data', function(data) {
  _input_stdin += data;
});


process.stdin.on('end', function() {
  _input_stdin_array = _input_stdin.split("\r\n");

  // console.log(_input_stdin_array);
  //Write code here

  noOfTestCases = _input_stdin_array[0];

  var noOfGiftsToBuy;
  var noOfGiftsToAvailable;
  var giftPrices;
  output = [];

  for (var i = 0; i < noOfTestCases; i++) {
    noOfGiftsToBuy = _input_stdin_array[3 * i + 1];
    noOfGiftsToAvailable = _input_stdin_array[3 * i + 2];
    giftPrices = _input_stdin_array[3 * i + 3].split(" ").map(a => +a);
    output[i] = getMinMoneyToSpend(noOfGiftsToBuy, noOfGiftsToAvailable, giftPrices);
  }


  process.stdout.write("" + output.join("\n") + "\n");
});

function getMinMoneyToSpend(noOfGiftsToBuy, noOfGiftsToAvailable, giftPrices) {
  var minMoneyToSpend = 0;
  //  console.log("before", giftPrices);
  giftPrices.sort((a, b) => a - b);
  //  console.log(giftPrices);
  minSpendOnGifts = giftPrices.slice(0, noOfGiftsToBuy);
  minMoneyToSpend = minSpendOnGifts.reduce((previousValue, currentValue) => previousValue + currentValue,
    0);
  return minMoneyToSpend;
}