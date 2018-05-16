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
    lis[i].innerHTML+=n;
  }
}