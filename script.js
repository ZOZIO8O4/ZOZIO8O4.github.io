
// képadat

let picsData = [
    {
        pic: './images/21__01__pexels-brian-60093.jpg',
        Tpic: './thumbnails/T21__01__pexels-brian-60093.jpg',
        title: 'Kaktusz 01',
        description: 'Az indiánok már legalább 9000 éve eszik a fügekaktuszok termését (forrás: wikipédia). Ez nem az.',
        Tdescription: 'Az indiánok...'
    },
    {
        pic: './images/21__02__pexels-bruno-bueno-3837317.jpg',
        Tpic: './thumbnails/T21__02__pexels-bruno-bueno-3837317.jpg',
        title: 'Kaktusz 02',
        description: 'Mivel a wikin a szócikk ezen része már több, mint három éve nem módosult, van az már legalább 9003 éve is.',
        Tdescription: 'A wiki...'
    },
    {
        pic: './images/21__03__pexels-dawn-lio-3655625.jpg',
        Tpic: './thumbnails/T21__03__pexels-dawn-lio-3655625.jpg',
        title: 'Kaktusz 03',
        description: 'A kaktuszok ősei tövises cserjék lehettek.',
        Tdescription: 'A tövises cserjék...'
    },
    {
        pic: './images/21__04__pexels-dids-3656544.jpg',
        Tpic: './thumbnails/T21__04__pexels-dids-3656544.jpg',
        title: 'Kaktusz 04',
        description: 'A tövisek amolyan egyszerűsödött levélmaradványok.',
        Tdescription: 'A tövisek...'
    },
    {
        pic: './images/21__05__pexels-josh-willink-69098.jpg',
        Tpic: './thumbnails/T21__05__pexels-josh-willink-69098.jpg',
        title: 'Kaktusz 05',
        description: 'A kaktuszok tüskéi, akárcsak az emberi szőrszálak, védik az élő szervezet felületét...',
        Tdescription: 'A felület...'
    },
    {
        pic: './images/21__06__pexels-mike-109827.jpg',
        Tpic: './thumbnails/T21__06__pexels-mike-109827.jpg',
        title: 'Kaktusz 06',
        description: '... adnak némi árnyékot, csökkentik a szélmozgást, ezzel amolyan felületi mikroklímát teremtenek...',
        Tdescription: 'A mikroklímaváltozás :)'
    },
    {
        pic: './images/21__07__pexels-mikhail-nilov-6707626.jpg',
        Tpic: './thumbnails/T21__07__pexels-mikhail-nilov-6707626.jpg',
        title: 'Kaktusz 07',
        description: '...és a levelekhez hasonlóan segítenek a hajnali pára felfogásában.',
        Tdescription: 'víz kell...'
    },
    {
        pic: './images/21__08__pexels-pixabay-206701.jpg',
        Tpic: './thumbnails/T21__08__pexels-pixabay-206701.jpg',
        title: 'Kaktusz 08',
        description: 'Van a képen kaktusz',
        Tdescription: 'Van...'
    },
    {
        pic: './images/21__09__pexels-rodnae-productions-7894964.jpg',
        Tpic: './thumbnails/T21__09__pexels-rodnae-productions-7894964.jpg',
        title: 'Kaktusz 09',
        description: 'Nincs a képen kaktusz',
        Tdescription: 'Nincs...'
    },
    {
        pic: './images/21__10__pexels-warren-blake-1483848.jpg',
        Tpic: './thumbnails/T21__10__pexels-warren-blake-1483848.jpg',
        title: 'Kaktusz 10',
        description: 'Egy régi dakota közmondás szerint: Ha a kaktusz megszúr, nem ő kezdte...',
        Tdescription: 'Nem ő kezdte...'
    }
]

// képek száma
let picsNum = picsData.length;

// thumbnail-ek létrehozása
picsData.forEach((elem, index) => {
    $('nav').append(`<div class="navPicHolder" data-index="${index}">
    <img class="navPic" src=${elem["Tpic"]} alt='${elem["title"]}' data-index="${index}">
    <div class="popupBox">${elem["Tdescription"]}</div>
    </div>`);
})

// aktuális kép száma
let currentPic = 0 ;

// függvény: tetszőleges kép betöltése currentPic alapján
function LoadPic(currentPic) {
    // csak 'src' attribútummal
    // $('#pic').attr('src', picsData[currentPic].pic);
    // 'src' és 'alt' attribútummal
    $('#pic').attr({'src':picsData[currentPic].pic , 'alt':picsData[currentPic].title});
    $('#picTitle').text(picsData[currentPic].title);
    $('#picDescription').text(picsData[currentPic].description);
    // Thumbnail aktív -> inaktív   jelölés
    $('.navPicHolder').removeClass('navPicHolderCurrent');
    // aktív Thumbnail jelölése
    //  currentPic+1 -edik navPicHolder-en
    $( `.navPicHolder:nth-of-type(${currentPic+1})`).addClass('navPicHolderCurrent');
}

// első képbetöltés
LoadPic(currentPic);

// nyilakra kattintás
$('#arrLdiv').click(function () {
    currentPic-- ;
    if ( currentPic === -1 ) {
        currentPic = picsNum-1 ;
    }
    LoadPic(currentPic);
})
$('#arrRdiv').click(function () {
    currentPic++ ;
    if ( currentPic === picsNum ) {
        currentPic = 0 ;
    }
    LoadPic(currentPic);
})

// thumbnailekre kattintás
$('.navPicHolder').click((event) => {
    let currentPicStr = $(event.target).attr('data-index');
    // str -> num
    currentPic = parseInt(currentPicStr);
    // load
    LoadPic(currentPic);
})
$('.navPic').click((event) => {
    let currentPicStr = $(event.target).attr('data-index');
    // str -> num
    currentPic = parseInt(currentPicStr);
    // load
    LoadPic(currentPic);
})

/* thumbnailek infobox-ai
    lásd: 'thumbnail-ek létrehozása' : div class="popupBox"
*/
