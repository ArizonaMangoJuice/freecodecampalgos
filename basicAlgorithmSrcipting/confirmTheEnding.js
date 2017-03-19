function confirmEnding(str, target) {
  if(target.length === 1){
   return str.substr(-1) === target;
  }
  if(target.length > 1){
    var split = str.split(" ");
    for(var i = 0; i < split[split.length-1].length; i++ ){
        return split[split.length-1].charAt(i) == target.charAt(i);
    }
  }
}

confirmEnding("Bastian ghjghjghjn", "nd");
