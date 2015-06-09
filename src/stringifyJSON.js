// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if (typeof obj === 'number') {
		return obj.toString();
	} else if (obj === null) {
		return 'null';
	} else if (typeof obj === 'string'){
		return '"' + obj + '"';
	} else if (Array.isArray(obj)){
		return '[' + obj.toString() + ']';
	}
	return obj.toString();
};
