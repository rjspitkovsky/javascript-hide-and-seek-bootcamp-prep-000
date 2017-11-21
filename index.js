function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
return document.querySelectorAll('#nested')[0]
}

function increaseRankBy(n) {
  const lists = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lists.length; i++) {
    lists[i].innerHTML = parseInt(lists[i].innerHTML) + n;
  }
}


function deepestChild() {
  let boo = document.getElementById("grand-node")
  let text = boo.children[0]

  while (text) {
    boo = text
    text = boo.children[0]
  }
  return boo 
}
