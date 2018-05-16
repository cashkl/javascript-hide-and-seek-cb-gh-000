function getFirstSelector(selectors) {
const ans=document.querySelector(selectors)

return ans;
}

function nestedTarget() {
const a= document.getElementsById('nested').querySelectorAll('div div div div.target')
return a;
}
