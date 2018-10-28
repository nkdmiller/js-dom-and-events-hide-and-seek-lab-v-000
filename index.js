function getFirstSelector(selector){
  var find = document.querySelector(selector);
  return find;
}
function nestedTarget(){
  var find = document.querySelector('#nested .target');
  return find;
}

function deepestChild(){
  return document.getElementById('grand-node').querySelectorAll('div')[-1];
}
