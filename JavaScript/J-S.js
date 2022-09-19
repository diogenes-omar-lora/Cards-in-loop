const loop =document.querySelector('.loop')
const item = document.querySelectorAll('.loop > *')
const itemLength = item.length;
const perView = 3
let totalScroll = 0

loop.style.setProperty('--per-view',perView)

for(let i =0; i <perView; i++){
    loop.insertAdjacentHTML('beforeend', item[i].outerHTML)
}
 let autoScroll = setInterval(scrolling, 3000)

 function scrolling(){
    totalScroll++
    if(totalScroll == itemLength + 1){
        clearInterval(autoScroll)
        totalScroll = 1
        loop.style.left = '0'
        loop.style.transition = '.0s'
        autoScroll = setInterval(scrolling, 3000)
    }
    const widthEl = document.querySelector('.loop> :first-child').offsetWidth + 24
    loop.style.left = `-${totalScroll * widthEl}px`
    loop.style.transition = '.5s'
}