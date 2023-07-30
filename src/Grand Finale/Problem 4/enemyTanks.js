process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var output;

var noOfBombs = 0;
var noOfStrength = 0;
var noOfTanks = 0;
var destroyed = 0;

var timeTaken = 0;
process.stdin.on('data', function(data) {
  input_stdin += data;
});


process.stdin.on('end', function() {
  input_stdin_array = input_stdin.replace(/\r/g, '').split("\n");
  //console.log(input_stdin_array);

  startTime = Date.now();
  //Write code here
  noOfBombs = input_stdin_array[0].split(" ")[0];
  noOfStrength = input_stdin_array[0].split(" ")[1];
  noOfTanks = input_stdin_array[1];
  var tanks = [];
 for(let i=0; i<noOfTanks;i++){
 var healths = input_stdin_array[i+2].split(" ");
     if(!tanks[i]){tanks[i]=[]};
    tanks[i]['T'] = i+1;
    tanks[i]['H'] = healths[0];
    tanks[i]['HB'] = healths[1];
    tanks[i]['FH'] = healths[0];
    tanks[i]['diff'] = healths[0]-healths[1];
 }

var mostImpactTanks = tanks.map(a=>a);
mostImpactTanks.sort((a,b)=>{
    return b.diff - a.diff
});

// console.log("tanks", tanks);
// console.log("mostImpactTanks", mostImpactTanks);

for(let i=0; i<noOfBombs;i++){
    mostImpactTanks[i]['FH'] = mostImpactTanks[i]['HB'];
}

// console.log("mostImpactTanks", mostImpactTanks);

var mostImpactedTanks = mostImpactTanks.map(a=>a);
mostImpactedTanks.sort((a,b)=>{
    return a.FH - b.FH
});

// console.log("mostImpactedTanks", mostImpactedTanks);

for(let i=0; i< noOfTanks; i++){
    if(mostImpactedTanks[i].FH <= noOfStrength){
        destroyed++;
        noOfStrength -= mostImpactedTanks[i].FH;
        mostImpactedTanks[i].FH = 0;
    }
}

// console.log("mostImpactedTanksAfterDetroyed", mostImpactedTanks);

output = destroyed;



  //// /// console.log(output);
  process.stdout.write("" + output + "\n");
  timeTaken = Date.now() - startTime;
  /// console.log(timeTaken / 1000 + "s");


});
