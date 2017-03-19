function findLongestWord(str) {
  var x = 0;
  var y = str.split(" ");
  for (var i = 0; i < y.length; i++){
     if(y[i].length > x){
       x = y[i].length;
     }
  }
  return x;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

