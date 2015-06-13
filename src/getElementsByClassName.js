// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  return _.flatten([ checkClassName(document.body, className) ]);
};
 
var checkClassName = function(elem, className){
  var elemsWithClass = [];
  if ( elem.classList.contains(className) ){
    elemsWithClass.push(elem);
  }
  if (elem.children.length > 0){
    for (var i=0; i<elem.children.length; i++){
      elemsWithClass.push( checkClassName(elem.children[i], className) );
    }
  }
  return elemsWithClass;
};
