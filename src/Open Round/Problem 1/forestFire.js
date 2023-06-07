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
  var numberOfAnimals = input_stdin_array[0].split(" ")[0];
  var capacityForTransport = input_stdin_array[0].split(" ")[1];
  var engeryLevelsOfAnimals = input_stdin_array[1].split(" ");

  var minimumEnergyLevel = -1;
  engeryLevelsOfAnimals.sort((a,b)=>a-b);

  engeryLevelsOfAnimals.forEach((item, i) => {
    noOfAnimalsThatCanBeTransported = engeryLevelsOfAnimals.length - engeryLevelsOfAnimals.indexOf(item);
    if(noOfAnimalsThatCanBeTransported == capacityForTransport){
      minimumEnergyLevel = item;
    }
  });

  output = minimumEnergyLevel;
  // console.log(output);
  process.stdout.write("" + output + "");
});
