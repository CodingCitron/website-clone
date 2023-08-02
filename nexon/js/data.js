const slideImgs = 'qwam04142644720.jpg,mmPD26190400925.jpg,OgwX26132656493.png,zGLe19201342335.jpg,IFIh24201003979.png,9wMF27110625159.png,Mojq27144929137.png,a2Ca31133604697.jpg'.split(',')

const slideImages = {
    '테일즈 위버': {
        name: 'Mojq27144929137.png',
        author: '테일즈위버',
        content: '신규 캐릭터 업데이트 예프넨 진네만',
        backgroundColor: 'rgb(125, 155, 219)'
    },
    'NYPC': {
        name: 'qwam04142644720.jpg',
        author: '넥슨',
        content: 'NYPC 2023',
        backgroundColor: 'rgb(97, 0, 190)'
    },
    '넥플랜드': {
        name: 'zGLe19201342335.jpg',
        author: '넥슨',
        content: '넥슨컴퓨터박물관 10주년 이벤트',
        backgroundColor: 'rgb(212, 232, 255)'
    },
    'V4': {
        name: '9wMF27110625159.png',
        author: 'V4',
        content: 'V4 시즌8 업데이트!',
        backgroundColor: 'rgb(0, 0, 0)'
    },
    '카스온라인': {
        name: 'mmPD26190400925.jpg',
        author: '카운터-스트라이크 온라인',
        content: '카스온라인 대운동회 시즌2',
        backgroundColor: 'rgb(34, 39, 97)'
    },
    'HIT2': {
        name: 'IFIh24201003979.png',
        author: '히트2',
        content: '히트2 <무너지는 경계> 업데이트',
        backgroundColor: 'rgb(29, 6, 7)'
    },
    '던파모바일': {
        name: 'a2Ca31133604697.jpg',
        author: '던전앤파이터 모바일',
        content: '던파모바일x처갓집 양념치킨 콜라보!',
        backgroundColor: 'rgb(252, 230, 218)'
    },
    '넥슨컴퓨터': {
        name: 'OgwX26132656493.png',
        author: '넥슨',
        content: '넥슨컴퓨터박물관 10주년 이벤트',
        backgroundColor: 'rgb(0, 160, 224)'
    }
}

slideImgs.map(img => ({
    backgroundColor: 'rgb(0, 160, 224)',
    name: img
}))

const games = `FIFA 모바일,FIFA 온라인4,THE FINALS,V4,고질라 디펜스 포스,그랜드체이스 클래식,나이트 워커,넥슨타운: NEXONTOWN,던전앤파이터,던전앤파이터 듀얼,던전앤파이터 모바일,데이브 더 다이버,드래곤네스트,마비노기,마비노기 영웅전,메이플스토리,메이플스토리 월드,메이플스토리 2,메이플스토리M,바람의나라,바람의나라: 연,버블파이터,베일드 엑스퍼트,블루 아카이브,사이퍼즈,서든어택,아스가르드,아키에이지,어둠의전설,엘소드,워헤이븐,일랜시아,카운터-스트라이크 온라인,카트라이더 러쉬플러스,카트라이더: 드리프트,크레이지 아케이드,클로저스,테일즈런터,테일즈위버,파이널판타지14,퍼스트 디센던트,프라시아 전기,플리스타일2,히트2`.split(',')

const contentsSlideImages = [
    {
        name: '테일즈위버',
        imageName: '5rAF30101730353.png',
        contents: '',
        pick: true,
    },
    {
        name: '마탑오르기',
        imageName: '9817e73b-5dc6-4642-8467-ffacda8441b7.png',
        contents: '메이플스토리 월드',
        pick: false,
    },
    {
        name: '메이플스토리',
        imageName: 'gipQ15165719729.png',
        contents: '',
        pick: false,
    },
    {
        name: 'V4',
        imageName: 'kfEg30155628752.png',
        contents: '',
        pick: false,
    },
    {
        name: 'FIFA 온라인 4',
        imageName: 'kVuo25124856403.png',
        contents: '',
        pick: false,
    },
    {
        name: '사이퍼즈',
        imageName: 'nMxc13143700776.png',
        contents: '',
        pick: false,
    },
    {
        name: '블루 아카이브',
        imageName: 'oxgT20055317898.png',
        contents: '',
        pick: false,
    }
]