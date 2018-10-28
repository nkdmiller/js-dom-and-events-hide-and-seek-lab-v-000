function getFirstSelector(selector){
  var find = document.querySelector(selector);
  return find;
}
function nestedTarget(){
  var find = document.querySelector('#nested .target');
  return find;
}

function deepestChild(){
  let last = document.getElementById('grand-node').querySelectorAll('div').length;
  return document.getElementById('grand-node').querySelectorAll('div')[last - 1];
}
function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')
  list.forEach(function(li) {
    li.innerHTML = Number.parseInt(li.innerHTML) + n
  })
}
