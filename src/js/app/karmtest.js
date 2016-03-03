var TT = function (a) {
 
	if(a == true) { 
		console.log(true);
	} else { 
		return false; 
	};
	return function () { 
		return "abc";
	}
};