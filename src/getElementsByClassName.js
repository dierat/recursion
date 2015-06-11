// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var resultElements = [];
  var children = document.body.children;
  console.log("children = ", children);
  // either refactor this into a helper function or figure out how to make this a part of the recursive call
  if ( $('body').hasClass(className) ){
  	resultElements.push(document.body);
  }
  // refactor this into a call to forEach (or filter?)
  for (var i=0; i<children.length; i++){
    resultElements.push( checkClassName(children[i], className) );
  }
  return _.flatten(resultElements);
};

// need a recursive helper function that accepts an element as an argument
// if that element has no children, return that element if it has the target class name
// otherwise return the element if it has the class name and a recursive call with the children of that element as the argument 
var checkClassName = function(elem, className){
  console.log("calling checkClassName with ", elem, " and ", className);
  var elemsWithClass = [];
  console.log("$(elem).hasClass(className) = ", $(elem).hasClass(className));
  if ( $(elem).hasClass(className) ){
  	console.log("pushing elem to elemsWithClass");
    elemsWithClass.push(elem);
  }
  console.log("elem.children.length = ", elem.children.length);
  if (elem.children.length > 0){
  	// refactor into call to forEach
    for (var i=0; i<elem.children.length; i++){
      elemsWithClass.push( checkClassName(elem.children[i], className) );
    }
  }
  console.log("returning ", elemsWithClass);
  return elemsWithClass;
}
