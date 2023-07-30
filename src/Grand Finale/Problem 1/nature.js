process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var output;

var noOfCamps = 0;
var noOfTracks = 0;
var noOfReliefCamps = 0;
var theReliefCampNumbers = 0;
var pathsBetweeenCamps = {};

var timeTaken = 0;
process.stdin.on('data', function(data) {
  input_stdin += data;
});


process.stdin.on('end', function() {
  input_stdin_array = input_stdin.replace(/\r/g, '').split("\n");
  //console.log(input_stdin_array);

  startTime = Date.now();
  //Write code here
  var noOfCamps = input_stdin_array[0].split(" ")[0];
  var noOfTracks = input_stdin_array[0].split(" ")[1];
  var noOfReliefCamps = input_stdin_array[1];
  var theReliefCampNumbers = input_stdin_array[2].split(" ");

 //console.log("pathsBetweeenCamps ", pathsBetweeenCamps);
for(let i=0; i<noOfTracks;i++){
 var paths = input_stdin_array[i+3].split(" ").map(Number);
 if(!pathsBetweeenCamps[paths[0]]){pathsBetweeenCamps[paths[0]]={}};
    pathsBetweeenCamps[paths[0]][paths[1]] = paths[2];
 if(!pathsBetweeenCamps[paths[1]]){pathsBetweeenCamps[paths[1]]={}};
    pathsBetweeenCamps[paths[1]][paths[0]] = paths[2];
}


   //console.log("pathsBetweeenCamps ", pathsBetweeenCamps);
   var distanceBetweenReliefCamps = 0;
   var minDist = Infinity;
   theReliefCampNumbers.forEach(r=>{
         var keys = Object.keys(pathsBetweeenCamps[r]);
         keys.forEach(k=> {
             if(minDist > pathsBetweeenCamps[r][k])
                minDist = pathsBetweeenCamps[r][k];
         })
      //  distanceBetweenReliefCamps += pathsBetweeenCamps[e]

   })
 // console.log("minDist ", minDist);
 var element;
  theReliefCampNumbers.forEach(r=>{
    if(!element){
     element = pathsBetweeenCamps[theReliefCampNumbers[0]];
    }
   // console.log("element ", element)
         keys = Object.keys(element);
         keys.forEach(k=> {
        //   console.log("k", k,"  theReliefCampNumbers[0]", theReliefCampNumbers[0]);
            if(theReliefCampNumbers.indexOf(k)!=-1 && k !=theReliefCampNumbers[0] ){
               distanceBetweenReliefCamps += element[k];
               element = pathsBetweeenCamps[k];
              // console.log("element ", element)
            }
         })

   })

 //  console.log("distanceBetweenReliefCamps", distanceBetweenReliefCamps)

// pathsBetweeenCamps  {
//   '1': { '2': 2, '5': 4 },
//   '2': { '1': 2, '3': 5, '6': 2 },
//   '3': { '2': 5, '4': 1 },
//   '4': { '3': 1, '6': 3 },
//   '5': { '1': 4, '6': 8 },
//   '6': { '2': 2, '4': 3, '5': 8 }
// }
   var campsToConsider = []
  output = (minDist+distanceBetweenReliefCamps)*2;


  //// /// console.log(output);
  process.stdout.write("" + output + "\n");
  timeTaken = Date.now() - startTime;
  /// console.log(timeTaken / 1000 + "s");


});
