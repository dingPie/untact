'use strict'

const $dataTitle = document.getElementById('dataTitle').innerText.split(',')
const $dataFirstImage = document.getElementById('dataFirstImage').innerText.split(',')
const $dataAddr = document.getElementById('dataAddr').innerText.split(',')
const $dataMapX = document.getElementById('dataMapX').innerText.split(',')
const $dataMapY = document.getElementById('dataMapY').innerText.split(',')
const $dataDetail = document.getElementById('dataDetail').innerText.split(',')
const $dataViews = document.getElementById('dataViews').innerText.split(',')
console.log($dataViews[1])


let mapContainer = document.getElementById('map') // 지도를 표시할 div
let mapOption;
if (!localStorage.getItem('regionX')) {
    mapOption = {
        center: new kakao.maps.LatLng(37.56719, 126.97976), // 지도의 중심좌표, 지역별로 변수 받아오기.
        level: 12, // 지도의 확대 레벨
        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
};
} else {
    mapOption = {
        center: new kakao.maps.LatLng(parseFloat(localStorage.getItem('regionX')), parseFloat(localStorage.getItem('regionY'))), // 지도의 중심좌표, 지역별로 변수 받아오기.
        level: 9, // 지도의 확대 레벨
        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
}
};
// 지도를 생성한다
let map = new kakao.maps.Map(mapContainer, mapOption);


let positions = []
for (let i = 0; i < $dataTitle.length; i ++) {
    let value =
        {
        content:
        '<div class="wrap">' +
            '   <div class="info">' +
            '      <div class="title">' +
            `           ${$dataTitle[i]}`  + // 관광지 이름
//          `           ${$dataViews[i]}`  +
            '          <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
            '      </div>' +
            '      <div class="body">' +
            '          <div class="img">' +
            `              <img src = ${$dataFirstImage[i]} width="88" height="71">` + //썸네일 이미지
            '          </div>' +
            '          <div class="desc">' +
            `              <div class="ellipsis">${$dataAddr[i]}</div>` +  //주소
            `              <div class="link-box"><a href="/map/detail?id=${$dataDetail[i]}" class="link">자세히 보기</a></div>` + // 자세히보기 링크
            '          </div>' +
            '      </div>' +
            '   </div>' +
            '</div>',
            mapX: $dataMapX[i],
            mapY: $dataMapY[i], //위도 경도.
            ViewCount: $dataViews[i]
        }
    positions.push(value)
}

let selectOverlay; // 반복문 밖에 지정해줘야 작동을 함.
function closeOverlay() {
    selectOverlay.setMap(null)
}

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다



for (let i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
//console.log(positions[i].ViewCount.trim())
let imageSrc;
let imageSize = new kakao.maps.Size(44, 46) // 마커이미지의 크기입니다
let imageOption = {offset: new kakao.maps.Point(24, 40)} // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

if ( i >= 35) { //빨간색 positions[i].ViewCount >= 100
    imageSrc = 'https://github.com/dingPie/DingPie/blob/main/red.png?raw=true'
} else if ( i >= 20 ) { //노란색
    imageSrc = 'https://github.com/dingPie/DingPie/blob/main/yellow.png?raw=true'
} else { //초록색
    imageSrc = 'https://github.com/dingPie/DingPie/blob/main/green.png?raw=true'
}

let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

    let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(positions[i].mapX, positions[i].mapY), // 마커의 위치
        image: markerImage
    });

    // 오버레이 정보표시
    let overlay = new kakao.maps.CustomOverlay({
        content: positions[i].content,
        // map: map,
        position: new kakao.maps.LatLng(positions[i].mapX, positions[i].mapY) // 오버레이 정보의 위치??
    });

    kakao.maps.event.addListener(marker, 'click', () => {
        if (selectOverlay) {
            selectOverlay.setMap(null)
        }
        selectOverlay = overlay
        selectOverlay.setMap(map)
    });

}
