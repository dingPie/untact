'use strict'
const $logoBar = document.querySelector('.logo_bar')
const $list = document.getElementsByClassName('list')
const $nextBtn = document.querySelector('.next_btn')

function test1 () {
    console.log('실행됨')
    $logoBar.className = 'logo_bar act'
}

setTimeout(test1, 1000)
//
//console.log($list.length)
//function activeList () {
//    for (let i = 1; i < $list.length; i++) {
//        $list[i].className = 'list active'
//        console.log('실행됨')
//    }
//}
//
//setTimeout(activeList, 1500)
let count = 0;
function clickAction () {
    if (count < $list.length) {
        $list[count].className = 'list active'
        count++
    } else if (count == $list.length) {
        $nextBtn.className = 'next_btn active'
    }
}

window.addEventListener('click', clickAction)