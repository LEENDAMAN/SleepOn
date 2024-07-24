// 네이버 지도 api
let mapOptions = {
    center: new naver.maps.LatLng(37.716557, 126.761358),
    zoom: 10
};

let map = new naver.maps.Map('map', mapOptions);

let marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.716557, 126.761358),
    map: map
});



const address = ''
// 결제창 호출
function showPayment() {
    window.open("SleepOnReservation.html", "예약 및 결제", "width=800, height=900, left=500, top=100");
}

// 숙박데이터 api
function XMLParsing( data ) {
    let XMLParser = new DOMParser();
    let XMLDoc = XMLParser.parseFromString( data, "text/xml" )
    let XMLItems = XMLDoc.getElementsByTagName( 'item' )

    console.log( data )
    for( let i = 0; i < XMLItems.length; i++)
    {
        console.log( XMLItems[i].getEle)
    }
}

let endPoint = 'https://apis.data.go.kr/B551011/KorService1/searchStay1?'
let params = {
    serviceKey : ''
}


axios.get( `${ endPoint }serviceKey=Tz4pEua1s%2Fss1GwvvTZ6z3t3j1tZjR2E3Y9VDzIF2WXjOk9kuFOaqehg2ziipNO3g54cgug2%2Br3k92L4YrHs8g%3D%3D&numOfRows=1&pageNo=1&MobileOS=ETC&MobileApp=AppTest&listYN=Y&arrange=A` )
    .then( res => {
        if ( res.status === 200 )
        {
            XMLParsing( res.data )
        }
    } )
