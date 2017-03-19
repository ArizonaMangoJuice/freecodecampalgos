function palindrome(str){
	var i = str.replace(/[\W_]/g, '').toLowerCase();
	var k = i.split("").reverse().join("");
	return i === k;
}
palindrome("Nope");
