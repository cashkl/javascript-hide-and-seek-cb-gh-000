function getFirstSelector(selectors) {
const ans=document.querySelector(selectors)

return ans;
}

function nestedTarget() {
  const a= document.querySelector('#nested .target')
return a;
}
function increaseRankBy(n) {
  const lis=document.querySelectorAll('.ranked-list')
  for (var i = 0; i < lis.length; i++) {
    var sayi=parseInt(lis[i].innerHTML,10);
    sayi+=n;
    lis[i].innerHTML=sayi;
  }
}

function deepestChild() {
  const lis = document.querySelectorAll('div #grand-node');
  var ans;
  for (var i = 0; i < lis.length; i++) {
    ans= lis[i].innerHTML;
  }
  return ans
}
