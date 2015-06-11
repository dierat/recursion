// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var resultElements = [];
  var children = document.body.children;
  if ( $(body).hasClass(className) ){
  	resultElements.push();
  }
  for (var i=0; i<children.length; i++){
  	if ( children[i].hasClass() ){
  		resultElements.push();
  	}
  }
  return resultElements;
};
