process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var output = [];

var noOfPeopleRanked = 0;
var noOfPeopleToBeRanked = 0;
var ranks = {};


process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\r\n");
  //console.log(input_stdin_array)

  //Write code here
  var noOfPeopleRanked = input_stdin_array[0].split(" ")[0];
  var noOfPeopleToBeRanked = input_stdin_array[0].split(" ")[0];
  //console.log(noOfPeopleRanked,noOfPeopleToBeRanked)
  var peopleRanked = input_stdin_array[1].split(" ").map(Number);
  var peopleToBeRanked = input_stdin_array[2].split(" ").map(Number);
  //console.log(peopleRanked)
  //console.log(peopleToBeRanked)

  applyRanking(peopleRanked);
  //console.log("ranks", ranks)

  peopleToBeRanked.forEach((item, i) => {
    if(ranks[item]) {
        output = ranks[item];
    } else {
        if(peopleRanked.length) {
          var targetIndex = binarySearch(peopleRanked, item);
          ranks[item] = targetIndex ? ranks[peopleRanked[targetIndex-1]]+1 : 1;
        }
        output = ranks[item];
    }
    process.stdout.write("" + output + "\n");
  });
  
});

function applyRanking(items){
  var rank = 0;
  for(let i = 0; i< items.length; i++) {
    if(items[i] !== items[i-1]){
      rank++;
      ranks[items[i]] = rank;
    }
  }
}
function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (arr[middle] > target) {
      // Search the right half
      start = middle + 1
    } else {
      // Search the left half
      end = middle - 1
    }
  }
  // Target not found
  return start
}
