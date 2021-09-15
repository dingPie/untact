'use strict'
const $dataRegionX = document.getElementById('dataMapX').innerText
const $dataRegionY = document.getElementById('dataMapY').innerText

localStorage.setItem('regionX', $dataRegionX)
localStorage.setItem('regionY', $dataRegionY)

if (localStorage.getItem('regionX')) {
    console.log(localStorage.getItem('regionX'))
}

function goBack () {
    window.history.back(1)
}
