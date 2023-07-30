process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var output;

var noOfRows = 0;
var noOfColumns = 0;

var timeTaken = 0;
process.stdin.on('data', function(data) {
  input_stdin += data;
});


process.stdin.on('end', function() {
  input_stdin_array = input_stdin.replace(/\r/g, '').split("\n");
  //console.log(input_stdin_array);

  startTime = Date.now();
  //Write code here
  var noOfRows = input_stdin_array[0].split(" ")[0];
  var noOfColumns = input_stdin_array[0].split(" ")[1];
  var matrix = [];
 for(let i=0; i<noOfRows;i++){
 var chars = input_stdin_array[i+1].split("");
 if(!matrix[i]){matrix[i]=[]};
    chars.forEach((c,idx) => matrix[i][idx] = c);
 }
var path = [];
var coins = 0;
var visited = ['00'];
var currentRow = 0, currentColumn=0;
for(let i=0; i<noOfRows; i++){
 for(let j=0; j< noOfColumns; j++){
   //  console.log("currentRow,currentColumn", currentRow,currentColumn);
  //   console.log("visited", visited)
 if(matrix[currentRow-1] && matrix[currentRow-1][currentColumn] =='F'  && !visited.includes((currentRow-1)+""+currentColumn))
{
       currentRow--;
       visited.push(currentRow+""+currentColumn)
    }
else if(matrix[currentRow+1] && matrix[currentRow+1][currentColumn] =='F' && !visited.includes((currentRow+1)+""+currentColumn))
{
       currentRow++;
    visited.push(currentRow+""+currentColumn)
    }

else if(matrix[currentColumn-1] && matrix[currentRow][currentColumn-1] =='F' && !visited.includes(currentRow+""+(currentColumn-1)))
{

       currentColumn--;
       visited.push(currentRow+""+currentColumn)

    }

else if(matrix[currentColumn+1] && matrix[currentRow][currentColumn+1] =='F' && !visited.includes(currentRow+""+(currentColumn+1)))
{

       currentColumn++;
       visited.push(currentRow+""+currentColumn)

    }



else if(matrix[currentRow+1] && matrix[currentRow+1][currentColumn] =='B' && !visited.includes((currentRow+1)+""+currentColumn))
{
       currentRow++;
       visited.push(currentRow+""+currentColumn)

       coins++;
       break;
    }

 else if(matrix[currentRow-1] && matrix[currentRow-1][currentColumn] =='B' && !visited.includes((currentRow-1)+""+currentColumn))
{
       currentRow--;
       visited.push(currentRow+""+currentColumn)

       coins++; break;
    }


else if(matrix[currentColumn+1] && matrix[currentRow][currentColumn+1] =='B' && !visited.includes(currentRow+""+(currentColumn+1)))
{
       currentColumn++;
       visited.push(currentRow+""+currentColumn)

       coins++; break;
    }


else if(matrix[currentColumn-1] && matrix[currentRow][currentColumn-1] =='B' && !visited.includes(currentRow+""+(currentColumn-1)))
{
       currentColumn--;
       visited.push(currentRow+""+currentColumn)

       coins++; break;
    }


// else if(visited.includes(currentRow+""+currentColumn)){
//     currentRow++;
//     currentColumn++;
// }

}

}

 //console.log(matrix);
//  [
//   [ 'F', 'B', 'F', 'F', 'O' ],
//   [ 'O', 'B', 'B', 'F', 'O' ],
//   [ 'O', 'O', 'B', 'F', 'O' ],
//   [ 'O', 'O', 'B', 'B', 'O' ],
//   [ 'B', 'B', 'B', 'B', 'B' ],
//   [ 'O', 'O', 'O', 'O', 'F' ]
// ]

  output = coins;



  //// /// console.log(output);
  process.stdout.write("" + output + "\n");
  timeTaken = Date.now() - startTime;
  /// console.log(timeTaken / 1000 + "s");


});
