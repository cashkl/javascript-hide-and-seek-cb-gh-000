function getFirstSelector(selectors) {
const ans=document.querySelector(selectors)

return ans;
}

function nestedTarget() {
  const a= document.getElementById('nested').querySelector('div div div div.target')
return a;
}
