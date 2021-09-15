'use strict'

const $mainTitle = document.querySelector('.main_title')
const $box = document.querySelector('.box')

let img = new Image
img.src = ''
//img.className = 'none'

function test1 () {
    img.className = 'img1_a'
}
function test2 () {
    img.className = 'img2_a'
}
function test3 () {
    img.className = 'img3_a'
}

function changeImg () {
    if (img.className == 'img3_a' || !img.className) {
        img.className = 'img1'
        img.src = 'https://github.com/dingPie/DingPie/blob/main/a1.jpg?raw=true'
        setTimeout(test1, 1)
    } else if (img.className == 'img1_a') {
        img.className = 'img2'
        img.src = 'https://github.com/dingPie/DingPie/blob/main/a2.jpg?raw=true'
        setTimeout(test2, 1)
    } else if (img.className == 'img2_a') {
        img.className = 'img3'
        img.src = 'https://github.com/dingPie/DingPie/blob/main/a3.jpg?raw=true'
        setTimeout(test3, 1)
    }
}
$box.append(img)

function test () {
    console.log('클릭됨')
    $mainTitle.className = 'main_title active'
    $box.className = 'box active_box'
    setInterval(changeImg, 2000)
}

window.addEventListener('click',test)

