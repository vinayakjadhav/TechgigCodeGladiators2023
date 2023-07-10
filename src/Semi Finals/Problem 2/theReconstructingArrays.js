process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var output = 0;
var M = 1000000007;
var N = 0;
var K = 0;
var stringOfArray;
process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\r\n");
  /// console.log(input_stdin_array)
  const started = Date.now();
  //Write code here
  N = +input_stdin_array[0].split(" ")[0];
  K = +input_stdin_array[0].split(" ")[1];
  stringOfArray = input_stdin_array[1];
  console.log("N, K, stringOfArray", N, K, stringOfArray);

//  printSubStrings(stringOfArray.join(""));

//var count = countPossibleArrays(stringOfArray, K);
  //console.log("Number of possible arrays: " + count);
findSubsequences("123", 0, "")
//  output =  count;

  /// console.log(output);
  process.stdout.write("" + output + "\n");
  const gone = Date.now() - started;
  console.log("\n\nTime taken", gone / 1000, 's.');
});
var count = 0;

function findSubsequences(str,index,newStr){
  if(index==str.length){
    var indexx = newStr.indexOf("0") == 0 ? newStr.lastIndexOf("0")  : newStr.indexOf("0");
//    console.log('\nnewStr.indexOf("0") for ',  indexx, newStr );
  //  console.log('["0",-1].includes(str[indexx-1]) ',  newStr[indexx-1] );
    // console.log('["0",-1].includes(str[indexx+1]) ', newStr[indexx+1] );
    if(indexx){
    if( +newStr[indexx-1]){
      if(+newStr[indexx+1] || newStr[indexx+1] == 0){
        //  console.log("not ok");
          return;
      }else {
        //    console.log(++count, newStr)
        }
    } else if(+newStr[indexx+1]){
    //      console.log("not ok")
      }

    }else{
        //  console.log("not ok")
      }
      if( newStr!=="0")
  console.log(++count, +newStr.replace(/0/gi,""));

    return;
  }
  currChar = str[index];
  //choose next char => call1
  findSubsequences(str, index+1, newStr+currChar)

  //not choose next char => call2
  if(newStr[newStr.length-1]==0){
      findSubsequences(str, index+1, newStr);
  }else {
    findSubsequences(str, index+1, newStr+"0");

  }
}


function countPossibleArrays(s, k) {
    n = s.length;
    console.log(s,k)
    if (n == 0) {
        return 0; // Empty string, no possible arrays
    }

    var dp = [];
    dp[0] = 1; // There is one possible array for an empty string

    for (let i = 1; i <= n; i++) {
        var num = 0;
        num = s[i - 1];
        dp[i] = dp[i - 1];

        if (i > 1) {
            var prevNum = s[i - 2];
            console.log("at i", i, " prevNum ", prevNum)

            var combinedNum = Number(prevNum + num);
            console.log("at i", i, " combinedNum ", combinedNum)
            if (combinedNum >= 1 && combinedNum <= k && prevNum != 0) {
                dp[i] += dp[i - 2];
            }
        }
    }
console.log("dp ", dp);
    return dp[n];
}
