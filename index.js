function getFirstSelector(selectors) {
const ans=document.querySelector(selectors)

return ans;
}

function nestedTarget() {
document.querySelector('div.div.div.div.div.target')
}