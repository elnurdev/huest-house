let span = document.querySelectorAll('.arrow')
let div = document.querySelectorAll('.blog')
let l = 0

span [1].onclick = () => {
  l++
  for(let i of div) {
    if (l==1) {i.style.left = '-604px'}
    if (l==2) {i.style.left = '-1208px'}
    if (l==3) {i.style.left = '-1208px'}
    if (l==4) {i.style.left = '-1820px'}
    if (l>6) {l=6}
  }
}

span [0].onclick = () => {
  l--
  for(let i of div) {
    if (l==1) {i.style.left = '-604px'}
    if (l==2) {i.style.left = '-1208px'}
    if (l==3) {i.style.left = '-1208px'}
    if (l==4) {i.style.left = '-1820px'}
    if (l<0) {l=0}
  }
}