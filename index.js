function getFirstSelector(selectors) {
const ans=document.querySelector(selectors)

return ans;
}

function nestedTarget() {
return document.querySelector('div.div.div.div.div.target')
}
