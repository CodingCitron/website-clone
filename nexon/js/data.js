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

const allGames = [
    {
        name: '던전앤파이터',
        event: true,
        update: false,
        category: 'ACTION RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/bannerusr/23/8/MIUA02200412826.jpg'
    },
    {
        name: 'FIFA 온라인 4',
        event: false,
        update: false,
        category: '스포츠',
        device: ['PC', 'MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/23/5/I7WL25124856247.png'
    },
    {
        name: '프라시아 전기',
        event: false,
        update: false,
        category: 'MMORPG',
        device: ['PC', 'MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/23/4/oFBg11164401036.png'
    },
    {
        name: '메이플스토리',
        event: false,
        update: false,
        category: 'RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/23/6/LlEB15165719242.png'
    },
    {
        name: '히트2',
        event: false,
        update: false,
        category: 'MMORPG',
        device: ['PC', 'MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/23/4/1XNQ05184552989.png'
    },
    {
        name: 'FIFA 모바일',
        event: false,
        update: true,
        category: '스포츠',
        device: ['MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/22/10/fbV920055444665.png'
    },
    {
        name: '던전앤파이터 모바일',
        event: false,
        update: false,
        category: 'ACTION RPG',
        device: ['PC', 'MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/22/3/p43H15115226010.jpg'
    },
    {
        name: '메이플스토리M',
        event: false,
        update: false,
        category: 'RPG',
        device: ['PC', 'MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/23/6/GRYN08090204867.png'
    },
    {
        name: '블루아카이브',
        event: false,
        update: false,
        category: '수집형RPG',
        device: ['MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/22/10/S3Pv20055317789.jpg'
    },
    {
        name: '서든어택',
        event: true,
        update: false,
        category: 'FPS',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/bannerusr/23/8/lzzz03105022343.jpg'
    },
    {
        name: '바람의나라: 연',
        event: true,
        update: false,
        category: 'MMORPG',
        device: ['PC', 'MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/bannerusr/23/7/04b327135951368.jpg'
    },
    {
        name: '마비노기',
        event: false,
        update: false,
        category: 'RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/19/7/QYiB29175929811.png'
    },
    {
        name: '마비노기 영웅전',
        event: false,
        update: false,
        category: 'ACTION RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/23/7/SYx513132051906.png'
    },
    {
        name: '카트라이더 러쉬플러스',
        event: false,
        update: false,
        category: '레이싱',
        device: ['MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/22/10/Fupi20055414785.png'
    },
    {
        name: '카운터-스트라이크 온라인',
        event: true,
        update: false,
        category: 'FPS',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/bannerusr/23/7/QTng26190402567.jpg'
    },
    {
        name: 'V4',
        event: false,
        update: false,
        category: 'MMO RPG',
        device: ['PC', 'MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/19/12/vsoy11174835262.png'
    },
    {
        name: '나이트 워커',
        event: false,
        update: false,
        category: '액션 MORPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/23/1/l6uN04093632092.png'
    },
    {
        name: '엘소드',
        event: true,
        update: false,
        category: 'ACTION RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/bannerusr/23/8/p9Eg03102224734.png'
    },
    {
        name: '테일즈위버',
        event: true,
        update: false,
        category: 'RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/bannerusr/23/7/VGF327144930226.jpg'
    },
    {
        name: '크레이지 아케이드',
        event: false,
        update: false,
        category: '캐주얼',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/22/11/q4X317170441452.png'
    },
    {
        name: '바람의나라',
        event: false,
        update: false,
        category: 'RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/19/7/kV4G29180108505.png'
    },
    {
        name: '어둠의전설',
        event: false,
        update: false,
        category: 'RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/23/1/Rwms13150756960.png'
    },
    {
        name: '클로저스',
        event: true,
        update: false,
        category: 'ACTION RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/bannerusr/23/7/h4rH26110031292.png'
    },
    {
        name: '사이퍼즈',
        event: true,
        update: true,
        category: 'AOS/MOBA',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/bannerusr/23/7/G2g212163823210.png'
    },
    {
        name: '카트라이더: 드리프트',
        event: true,
        update: false,
        category: 'AOS/MOBA',
        device: ['PC', 'MOBILE', 'PAD'],
        imgURL: 'https://rs.nxfs.nexon.com/bannerusr/23/7/45JX20150022177.jpg'
    },
    {
        name: '아스가르드',
        event: true,
        update: false,
        category: 'RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/bannerusr/23/8/AFX602120148552.jpg'
    },
    {
        name: '메이플스토리2',
        event: false,
        update: false,
        category: 'RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/19/7/tOkY29180043932.png'
    },
    {
        name: '일랜시아',
        event: false,
        update: false,
        category: 'RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/19/7/qUOI29180520148.png'
    },
    {
        name: '메이플스토리 월드',
        event: false,
        update: false,
        category: '샌드박스',
        device: ['PC', 'MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/23/3/mkUu30164005305.png'
    },
    {
        name: '버블파이터',
        event: false,
        update: false,
        category: '캐주얼',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/21/9/uxWJ28144011619.gif'
    },
    {
        name: '고질라 디펜스 포스',
        event: false,
        update: false,
        category: '전략',
        device: ['MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/22/10/doj820055540843.png'
    },
    {
        name: '던전앤 파이터 듀얼',
        event: false,
        update: false,
        category: '대전격투',
        device: ['MOBILE', 'PAD'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/22/11/odrl21145238079.png'
    },
    {
        name: 'THE FINALS',
        event: false,
        update: false,
        category: '팀 기반 FPS',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/23/1/7gZa18134131178.png'
    },
    {
        name: '넥슨타운: NEXONTOWN',
        event: false,
        update: false,
        category: '소셜',
        device: ['MOBILE'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/22/10/MQ6k20055219094.png'
    },
    {
        name: '데이브 더 다이버',
        event: false,
        update: false,
        category: '어드벤처 RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/22/9/UpmG06122150734.png'
    },
    {
        name: '베일드 엑스퍼트',
        event: false,
        update: false,
        category: 'TPS',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/23/4/AzNa03110452739.png'
    },
    {
        name: '워헤이븐',
        event: false,
        update: false,
        category: 'PVP 액션',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/22/9/4SJp14100528383.png'
    },
    {
        name: '퍼스트 디센던트',
        event: false,
        update: false,
        category: '루트슈터',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/22/7/Lr6N26165010039.png'
    },
    {
        name: '그랜드체이스 클래식',
        event: true,
        update: false,
        category: 'ACTION RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/bannerusr/23/7/qeby26144236973.jpg'
    },
    {
        name: '테일즈런너',
        event: false,
        update: false,
        category: '캐주얼',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/20/5/8z7U08114212767.png'
    },
    {
        name: '파이널판타지14',
        event: false,
        update: false,
        category: 'RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/22/5/JTaX10175613726.jpg'
    },
    {
        name: '프리스타일2',
        event: false,
        update: false,
        category: '스포츠',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/20/4/FaDz14211009656.png'
    },
    {
        name: '아키에이지',
        event: false,
        update: false,
        category: 'RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/19/7/46Ih29180403943.png'
    },
    {
        name: '드래곤네스트',
        event: false,
        update: false,
        category: 'ACITON RPG',
        device: ['PC'],
        imgURL: 'https://rs.nxfs.nexon.com/gameusr/19/7/lbrB29175644852.png'
    },
]