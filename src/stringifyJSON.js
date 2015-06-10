// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // specific behavior for certain argument types
  if (typeof obj === 'function' || typeof obj === 'undefined'){
  	return '';
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string'){
    return '"' + obj + '"';

  // arrays and objects require looping over the values and use recursive calls for each value
  } else if (Array.isArray(obj)){
    if (obj.length === 0) {
      return '[' + ']';
    } else {
      var str = '[';
      for (var i=0; i<obj.length; i++){
        str += stringifyJSON(obj[i]);
        if (i !== obj.length-1){
          str += ',';
        }
      }
      return str += ']';
    }	
  } else if (typeof obj === 'object'){
  	var str = '{';
  	for (var key in obj){
  		if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined'){
  		  str += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
  		}
  	}
  	if (str.length > 1){
      str = str.slice(0, str.length-1);
  	}
  	return str += '}';

  // default behavior is to convert the argument into a string; works for numbers and booleans	
  } else {
    return obj.toString();
  }
};
