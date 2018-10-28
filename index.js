function getFirstSelector(selector){
  var find = document.querySelector(selector);
  return find;
}
function nestedTarget(){
  var find = document.querySelector('#nested .target');
  return find;
}

function deepestChild(){
  var finds = document.querySelectorAll('#grand-node');
  // var find = finds[-1];
  return finds;
}
