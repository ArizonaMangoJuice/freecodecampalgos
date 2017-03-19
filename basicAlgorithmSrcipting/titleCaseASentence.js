function titleCase(str) {
  var x = str.toLowerCase().split(" ");
  for(var i = 0; i < x.length; i++){
    var temp = x[i].split("");
    temp.shift();
    temp = temp.join("");
    x[i] = x[i].charAt(0).toUpperCase() + temp;
  }
  return x.join(" ");
}

titleCase("I'm a little tea pot");
