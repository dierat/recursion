// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var resultElements = [];
  if ( $('body').hasClass(className) ){
  	resultElements.push(document.body);
  }
  var children = document.body.children;
  for (var i=0; i<children.length; i++){
    resultElements.push( checkClassName(children[i], className) );
  }
  return _.flatten(resultElements);
};
 
var checkClassName = function(elem, className){
  var elemsWithClass = [];
  if ( $(elem).hasClass(className) ){
    elemsWithClass.push(elem);
  }
  if (elem.children.length > 0){
    for (var i=0; i<elem.children.length; i++){
      elemsWithClass.push( checkClassName(elem.children[i], className) );
    }
  }
  return elemsWithClass;
}
