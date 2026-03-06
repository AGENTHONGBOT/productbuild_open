const elementLabels = {
  wood: "목",
  fire: "화",
  earth: "토",
  metal: "금",
  water: "수",
};

const heavenlyStems = [
  { label: "갑", element: "wood" },
  { label: "을", element: "wood" },
  { label: "병", element: "fire" },
  { label: "정", element: "fire" },
  { label: "무", element: "earth" },
  { label: "기", element: "earth" },
  { label: "경", element: "metal" },
  { label: "신", element: "metal" },
  { label: "임", element: "water" },
  { label: "계", element: "water" },
];

const earthlyBranches = [
  { label: "자", zodiac: "쥐", element: "water" },
  { label: "축", zodiac: "소", element: "earth" },
  { label: "인", zodiac: "호랑이", element: "wood" },
  { label: "묘", zodiac: "토끼", element: "wood" },
  { label: "진", zodiac: "용", element: "earth" },
  { label: "사", zodiac: "뱀", element: "fire" },
  { label: "오", zodiac: "말", element: "fire" },
  { label: "미", zodiac: "양", element: "earth" },
  { label: "신", zodiac: "원숭이", element: "metal" },
  { label: "유", zodiac: "닭", element: "metal" },
  { label: "술", zodiac: "개", element: "earth" },
  { label: "해", zodiac: "돼지", element: "water" },
];

const religionTags = {
  none: "가정의 바람을 중심으로",
  christian: "축복과 은혜의 의미를 더해",
  buddhist: "평온과 자비의 뜻을 담아",
  catholic: "사랑과 보호의 상징성을 살려",
  traditional: "한자 의미와 음양의 균형을 우선해",
};

const toneLabels = {
  bright: "밝고 사랑스러운 결",
  elegant: "정갈하고 우아한 결",
  modern: "세련되고 현대적인 결",
  strong: "단단하고 힘 있는 결",
};

const religionProfiles = {
  none: {
    preferredTemplateTags: ["balance", "warmth", "joy", "clarity"],
    preferredSyllables: ["온", "하", "윤", "서", "유", "수"],
    preferredHanjaElements: ["water", "earth"],
  },
  christian: {
    preferredTemplateTags: ["grace", "blessing", "light", "peace", "hope"],
    preferredSyllables: ["은", "찬", "빛", "온", "하", "주"],
    preferredHanjaElements: ["fire", "water"],
  },
  buddhist: {
    preferredTemplateTags: ["wisdom", "serenity", "lotus", "compassion", "clarity"],
    preferredSyllables: ["연", "담", "해", "지", "선", "수"],
    preferredHanjaElements: ["water", "wood"],
  },
  catholic: {
    preferredTemplateTags: ["grace", "love", "protection", "faith", "peace"],
    preferredSyllables: ["은", "안", "서", "하", "주", "연"],
    preferredHanjaElements: ["earth", "water"],
  },
  traditional: {
    preferredTemplateTags: ["balance", "virtue", "dignity", "heritage", "strength"],
    preferredSyllables: ["도", "지", "호", "선", "율", "규"],
    preferredHanjaElements: ["earth", "metal"],
  },
};

const templateTagMap = {
  "하-윤": ["light", "blessing", "warmth"],
  "서-아": ["love", "joy", "warmth"],
  "유-나": ["warmth", "balance", "compassion"],
  "연-수": ["clarity", "wisdom", "lotus"],
  "별-아": ["light", "joy", "hope"],
  "지-안": ["wisdom", "peace", "balance"],
  "서-윤": ["grace", "peace", "love"],
  "하-린": ["clarity", "grace", "light"],
  "은-서": ["grace", "blessing", "dignity"],
  "연-지": ["wisdom", "serenity", "grace"],
  "리-아": ["clarity", "joy", "light"],
  "이-든": ["balance", "hope", "warmth"],
  "시-아": ["clarity", "light", "joy"],
  "주-연": ["love", "grace", "serenity"],
  "민-아": ["clarity", "warmth", "joy"],
  "채-원": ["strength", "dignity", "balance"],
  "다-온": ["blessing", "warmth", "hope"],
  "윤-슬": ["light", "strength", "clarity"],
  "민-서": ["virtue", "balance", "grace"],
  "솔-아": ["strength", "heritage", "light"],
  "도-윤": ["virtue", "balance", "warmth"],
  "시-우": ["clarity", "grace", "peace"],
  "하-준": ["light", "hope", "strength"],
  "민-준": ["clarity", "virtue", "strength"],
  "연-우": ["compassion", "joy", "warmth"],
  "지-호": ["wisdom", "dignity", "strength"],
  "선-율": ["virtue", "balance", "heritage"],
  "서-준": ["grace", "dignity", "strength"],
  "은-호": ["grace", "protection", "dignity"],
  "주-한": ["faith", "dignity", "strength"],
  "로-운": ["clarity", "balance", "joy"],
  "이-안": ["peace", "love", "balance"],
  "유-찬": ["blessing", "light", "hope"],
  "규-민": ["heritage", "wisdom", "clarity"],
  "진-우": ["strength", "clarity", "virtue"],
  "건-우": ["strength", "protection", "balance"],
  "태-오": ["strength", "light", "dignity"],
  "도-현": ["wisdom", "virtue", "strength"],
  "진-한": ["dignity", "strength", "heritage"],
  "규-태": ["heritage", "strength", "virtue"],
  "라-온": ["joy", "blessing", "warmth"],
  "하-람": ["compassion", "balance", "warmth"],
  "별-온": ["light", "hope", "peace"],
  "수-아": ["clarity", "lotus", "joy"],
  "시-온": ["peace", "faith", "serenity"],
  "지-율": ["wisdom", "balance", "virtue"],
  "해-온": ["warmth", "peace", "clarity"],
  "은-결": ["grace", "clarity", "dignity"],
  "연-솔": ["lotus", "heritage", "serenity"],
  "루-아": ["clarity", "joy", "light"],
  "리-안": ["peace", "balance", "love"],
  "세-온": ["hope", "peace", "clarity"],
  "민-결": ["virtue", "clarity", "balance"],
  "주-빈": ["faith", "grace", "clarity"],
  "태-린": ["strength", "light", "dignity"],
  "도-겸": ["virtue", "heritage", "balance"],
  "하-겸": ["grace", "balance", "virtue"],
  "솔-담": ["heritage", "serenity", "strength"],
  "진-결": ["strength", "clarity", "virtue"],
};

const hanjaTagMap = {
  grace: ["恩", "은혜", "고울", "우아"],
  blessing: ["복", "상서", "은혜", "기쁠"],
  light: ["빛", "햇빛", "밝을", "별", "하늘"],
  peace: ["편안", "평온", "고요", "안정"],
  hope: ["기쁠", "좋은 기운", "복", "즐거울"],
  wisdom: ["지혜", "알", "뜻", "문장"],
  serenity: ["맑을", "고요", "평온", "온화"],
  lotus: ["연꽃", "물", "맑을"],
  compassion: ["너그러울", "도울", "사랑", "자비"],
  protection: ["도울", "집", "보호", "언덕"],
  love: ["아름다울", "사랑", "우아", "따뜻할"],
  faith: ["믿음", "축복", "하늘", "우주"],
  balance: ["안정", "평온", "조화", "근원"],
  virtue: ["법도", "길", "겸손", "뜻"],
  dignity: ["옥", "기품", "으뜸", "하늘"],
  heritage: ["전통", "길", "법", "별 이름"],
  strength: ["큰", "넓을", "장수", "준마"],
  warmth: ["따뜻할", "여름", "햇빛", "온화"],
  joy: ["기쁠", "밝을", "즐거울"],
  clarity: ["맑을", "깨끗할", "빛날", "시"],
};

const nameTemplates = {
  girl: {
    bright: [
      { syllables: ["하", "윤"], meaning: "햇살처럼 환하고 복을 불러오는 인상", focus: ["water", "wood"] },
      { syllables: ["서", "아"], meaning: "다정하고 사랑받는 분위기가 자연스러운 이름", focus: ["wood", "fire"] },
      { syllables: ["유", "나"], meaning: "온화함과 친화력을 함께 담은 이름", focus: ["water", "earth"] },
      { syllables: ["연", "수"], meaning: "맑은 물결처럼 깨끗하고 반짝이는 이름", focus: ["water", "metal"] },
      { syllables: ["별", "아"], meaning: "사랑스러운 반짝임이 오래 남는 이름", focus: ["fire", "metal"] },
    ],
    elegant: [
      { syllables: ["지", "안"], meaning: "차분한 기품과 안정감을 살린 이름", focus: ["earth", "metal"] },
      { syllables: ["서", "윤"], meaning: "부드러운 품격과 정돈된 울림을 주는 이름", focus: ["wood", "water"] },
      { syllables: ["하", "린"], meaning: "맑고 고운 결이 오래 남는 이름", focus: ["water", "metal"] },
      { syllables: ["은", "서"], meaning: "은은한 기품과 단정함을 품은 이름", focus: ["metal", "wood"] },
      { syllables: ["연", "지"], meaning: "유연한 지성과 우아한 인상이 조화로운 이름", focus: ["water", "fire"] },
    ],
    modern: [
      { syllables: ["리", "아"], meaning: "짧고 선명한 리듬감이 돋보이는 이름", focus: ["metal", "fire"] },
      { syllables: ["이", "든"], meaning: "부드럽지만 개성이 또렷한 현대적 이름", focus: ["wood", "earth"] },
      { syllables: ["시", "아"], meaning: "세련되고 기억에 잘 남는 인상", focus: ["metal", "fire"] },
      { syllables: ["주", "연"], meaning: "감각적이면서도 부드러운 잔향을 남기는 이름", focus: ["metal", "water"] },
      { syllables: ["민", "아"], meaning: "가볍고 또렷한 발음이 돋보이는 현대적 이름", focus: ["water", "fire"] },
    ],
    strong: [
      { syllables: ["채", "원"], meaning: "넓은 포용력과 단단한 중심을 담은 이름", focus: ["wood", "earth"] },
      { syllables: ["다", "온"], meaning: "좋은 기운이 가득 들어오길 바라는 이름", focus: ["fire", "water"] },
      { syllables: ["윤", "슬"], meaning: "빛처럼 반짝이며 강인하게 자라길 바라는 이름", focus: ["water", "metal"] },
      { syllables: ["민", "서"], meaning: "부드러움 속에서도 중심이 분명한 이름", focus: ["water", "wood"] },
      { syllables: ["솔", "아"], meaning: "곧고 씩씩한 기운을 선명하게 담아낸 이름", focus: ["wood", "fire"] },
    ],
  },
  boy: {
    bright: [
      { syllables: ["도", "윤"], meaning: "반듯하고 온화한 성품을 떠올리게 하는 이름", focus: ["earth", "water"] },
      { syllables: ["시", "우"], meaning: "맑고 부드러운 첫인상이 강점인 이름", focus: ["metal", "water"] },
      { syllables: ["하", "준"], meaning: "건강한 성장과 밝은 기운을 상징하는 이름", focus: ["water", "metal"] },
      { syllables: ["민", "준"], meaning: "산뜻하고 총명한 인상을 주는 이름", focus: ["water", "metal"] },
      { syllables: ["연", "우"], meaning: "유연함과 밝은 에너지가 자연스럽게 어우러진 이름", focus: ["water", "earth"] },
    ],
    elegant: [
      { syllables: ["지", "호"], meaning: "넓은 뜻과 깊은 품격을 담아낸 이름", focus: ["earth", "water"] },
      { syllables: ["선", "율"], meaning: "조화롭고 유연한 리더십이 느껴지는 이름", focus: ["metal", "water"] },
      { syllables: ["서", "준"], meaning: "단정하고 신뢰감을 주는 인상", focus: ["wood", "metal"] },
      { syllables: ["은", "호"], meaning: "차분한 기품과 넓은 시야를 담은 이름", focus: ["metal", "water"] },
      { syllables: ["주", "한"], meaning: "정돈된 울림과 단단한 품격이 살아 있는 이름", focus: ["metal", "earth"] },
    ],
    modern: [
      { syllables: ["로", "운"], meaning: "세련된 감각과 부드러운 개성을 함께 담은 이름", focus: ["metal", "earth"] },
      { syllables: ["이", "안"], meaning: "국문과 영문 모두 자연스러운 이름", focus: ["wood", "earth"] },
      { syllables: ["유", "찬"], meaning: "생기와 감각을 균형 있게 살린 이름", focus: ["water", "fire"] },
      { syllables: ["규", "민"], meaning: "간결하면서도 지적인 인상을 남기는 이름", focus: ["metal", "water"] },
      { syllables: ["진", "우"], meaning: "또렷하고 세련된 이미지가 잘 살아나는 이름", focus: ["metal", "water"] },
    ],
    strong: [
      { syllables: ["건", "우"], meaning: "든든하고 믿음직한 중심을 표현하는 이름", focus: ["earth", "water"] },
      { syllables: ["태", "오"], meaning: "기세와 추진력이 선명한 이름", focus: ["fire", "earth"] },
      { syllables: ["도", "현"], meaning: "지성과 강단이 균형 잡힌 이름", focus: ["earth", "metal"] },
      { syllables: ["진", "한"], meaning: "곧은 원칙과 무게감을 함께 담은 이름", focus: ["metal", "earth"] },
      { syllables: ["규", "태"], meaning: "질서감과 힘 있는 추진력을 살린 이름", focus: ["metal", "fire"] },
    ],
  },
  neutral: {
    bright: [
      { syllables: ["다", "온"], meaning: "좋은 기운이 모두 다 오길 바라는 이름", focus: ["fire", "water"] },
      { syllables: ["라", "온"], meaning: "밝고 즐거운 에너지를 담은 이름", focus: ["fire", "water"] },
      { syllables: ["하", "람"], meaning: "넓은 품과 따뜻한 기운을 품은 이름", focus: ["water", "earth"] },
      { syllables: ["별", "온"], meaning: "밝게 빛나는 기운과 따뜻함을 담은 이름", focus: ["metal", "water"] },
      { syllables: ["수", "아"], meaning: "맑고 가벼운 리듬이 인상적인 이름", focus: ["water", "fire"] },
    ],
    elegant: [
      { syllables: ["시", "온"], meaning: "고요하고 정갈한 울림을 가진 이름", focus: ["metal", "water"] },
      { syllables: ["지", "율"], meaning: "균형과 조화가 잘 드러나는 이름", focus: ["earth", "water"] },
      { syllables: ["해", "온"], meaning: "은은하고 따뜻한 여운을 남기는 이름", focus: ["water", "water"] },
      { syllables: ["은", "결"], meaning: "매끈하고 정제된 인상을 전하는 이름", focus: ["metal", "water"] },
      { syllables: ["연", "솔"], meaning: "부드러운 흐름과 곧은 결을 함께 담은 이름", focus: ["water", "wood"] },
    ],
    modern: [
      { syllables: ["루", "아"], meaning: "감각적인 리듬과 부드러운 인상을 가진 이름", focus: ["metal", "fire"] },
      { syllables: ["리", "안"], meaning: "세련되면서도 안정감 있는 이름", focus: ["metal", "earth"] },
      { syllables: ["세", "온"], meaning: "미래지향적이고 맑은 인상을 주는 이름", focus: ["metal", "water"] },
      { syllables: ["민", "결"], meaning: "단정하고 감각적인 현대적 울림이 돋보이는 이름", focus: ["water", "metal"] },
      { syllables: ["주", "빈"], meaning: "짧고 세련된 리듬으로 기억에 남는 이름", focus: ["metal", "water"] },
    ],
    strong: [
      { syllables: ["태", "린"], meaning: "또렷한 존재감과 단단함을 담은 이름", focus: ["fire", "metal"] },
      { syllables: ["도", "겸"], meaning: "강단과 품격을 함께 살린 이름", focus: ["earth", "metal"] },
      { syllables: ["하", "겸"], meaning: "부드러움 속에 중심이 분명한 이름", focus: ["water", "metal"] },
      { syllables: ["솔", "담"], meaning: "곧은 기운과 깊은 무게감을 함께 담은 이름", focus: ["wood", "earth"] },
      { syllables: ["진", "결"], meaning: "선명한 결단력과 정돈된 힘이 느껴지는 이름", focus: ["metal", "water"] },
    ],
  },
};

const extensionSyllables = {
  wood: ["서", "유", "하", "솔", "주"],
  fire: ["아", "나", "태", "희", "별"],
  earth: ["온", "안", "도", "담", "한"],
  metal: ["린", "율", "시", "규", "은"],
  water: ["윤", "우", "해", "수", "연"],
};

const hanjaMap = {
  하: [
    { char: "河", meaning: "큰 강", element: "water", strokes: 8 },
    { char: "夏", meaning: "여름", element: "fire", strokes: 10 },
    { char: "荷", meaning: "연꽃", element: "wood", strokes: 13 },
  ],
  윤: [
    { char: "潤", meaning: "윤택할", element: "water", strokes: 15 },
    { char: "允", meaning: "진실로", element: "earth", strokes: 4 },
    { char: "昀", meaning: "햇빛", element: "fire", strokes: 8 },
  ],
  서: [
    { char: "瑞", meaning: "상서로울", element: "metal", strokes: 14 },
    { char: "書", meaning: "글", element: "wood", strokes: 10 },
    { char: "抒", meaning: "펼", element: "wood", strokes: 8 },
  ],
  아: [
    { char: "雅", meaning: "우아할", element: "metal", strokes: 12 },
    { char: "娥", meaning: "아름다울", element: "earth", strokes: 10 },
    { char: "我", meaning: "나", element: "earth", strokes: 7 },
  ],
  유: [
    { char: "柔", meaning: "부드러울", element: "wood", strokes: 9 },
    { char: "宥", meaning: "너그러울", element: "earth", strokes: 9 },
    { char: "流", meaning: "흐를", element: "water", strokes: 10 },
  ],
  나: [
    { char: "娜", meaning: "아리따울", element: "fire", strokes: 9 },
    { char: "那", meaning: "아름다울", element: "fire", strokes: 7 },
    { char: "拏", meaning: "붙잡을", element: "wood", strokes: 9 },
  ],
  지: [
    { char: "智", meaning: "지혜", element: "fire", strokes: 12 },
    { char: "志", meaning: "뜻", element: "fire", strokes: 7 },
    { char: "知", meaning: "알", element: "metal", strokes: 8 },
  ],
  안: [
    { char: "安", meaning: "편안할", element: "earth", strokes: 6 },
    { char: "晏", meaning: "늦을, 온화할", element: "fire", strokes: 10 },
    { char: "岸", meaning: "언덕", element: "earth", strokes: 8 },
  ],
  린: [
    { char: "璘", meaning: "옥빛", element: "metal", strokes: 16 },
    { char: "潾", meaning: "맑을", element: "water", strokes: 16 },
    { char: "麟", meaning: "기린", element: "earth", strokes: 23 },
  ],
  리: [
    { char: "莉", meaning: "말리꽃", element: "wood", strokes: 13 },
    { char: "俐", meaning: "영리할", element: "metal", strokes: 9 },
    { char: "理", meaning: "다스릴", element: "earth", strokes: 11 },
  ],
  이: [
    { char: "伊", meaning: "저", element: "earth", strokes: 6 },
    { char: "怡", meaning: "기쁠", element: "earth", strokes: 9 },
    { char: "梨", meaning: "배나무", element: "wood", strokes: 11 },
  ],
  든: [
    { char: "得", meaning: "얻을", element: "metal", strokes: 11 },
    { char: "昐", meaning: "클", element: "fire", strokes: 8 },
    { char: "垠", meaning: "땅끝", element: "earth", strokes: 9 },
  ],
  시: [
    { char: "時", meaning: "때", element: "metal", strokes: 10 },
    { char: "詩", meaning: "시", element: "metal", strokes: 13 },
    { char: "施", meaning: "베풀", element: "wood", strokes: 9 },
  ],
  채: [
    { char: "采", meaning: "채색", element: "wood", strokes: 8 },
    { char: "彩", meaning: "빛채", element: "fire", strokes: 11 },
    { char: "蔡", meaning: "풀", element: "wood", strokes: 17 },
  ],
  원: [
    { char: "媛", meaning: "아름다운 여인", element: "earth", strokes: 12 },
    { char: "元", meaning: "으뜸", element: "earth", strokes: 4 },
    { char: "源", meaning: "근원", element: "water", strokes: 14 },
  ],
  다: [
    { char: "多", meaning: "많을", element: "fire", strokes: 6 },
    { char: "茶", meaning: "차", element: "wood", strokes: 9 },
    { char: "垜", meaning: "담장", element: "earth", strokes: 9 },
  ],
  온: [
    { char: "溫", meaning: "따뜻할", element: "water", strokes: 13 },
    { char: "穩", meaning: "평온할", element: "wood", strokes: 19 },
    { char: "蘊", meaning: "쌓일", element: "wood", strokes: 22 },
  ],
  슬: [
    { char: "瑟", meaning: "큰 거문고", element: "metal", strokes: 14 },
    { char: "璱", meaning: "빛날", element: "metal", strokes: 18 },
    { char: "膝", meaning: "무릎", element: "earth", strokes: 17 },
  ],
  도: [
    { char: "道", meaning: "길", element: "earth", strokes: 13 },
    { char: "度", meaning: "법도", element: "earth", strokes: 9 },
    { char: "濤", meaning: "큰 물결", element: "water", strokes: 17 },
  ],
  우: [
    { char: "祐", meaning: "도울", element: "earth", strokes: 10 },
    { char: "宇", meaning: "집, 우주", element: "earth", strokes: 6 },
    { char: "雨", meaning: "비", element: "water", strokes: 8 },
  ],
  준: [
    { char: "俊", meaning: "준걸", element: "metal", strokes: 9 },
    { char: "駿", meaning: "준마", element: "metal", strokes: 17 },
    { char: "浚", meaning: "깊을", element: "water", strokes: 11 },
  ],
  호: [
    { char: "昊", meaning: "하늘", element: "fire", strokes: 8 },
    { char: "浩", meaning: "넓을", element: "water", strokes: 10 },
    { char: "鎬", meaning: "호경", element: "metal", strokes: 18 },
  ],
  선: [
    { char: "宣", meaning: "베풀", element: "earth", strokes: 9 },
    { char: "善", meaning: "착할", element: "earth", strokes: 12 },
    { char: "璿", meaning: "옥", element: "metal", strokes: 19 },
  ],
  율: [
    { char: "律", meaning: "법", element: "metal", strokes: 9 },
    { char: "栗", meaning: "밤", element: "wood", strokes: 10 },
    { char: "聿", meaning: "붓", element: "wood", strokes: 6 },
  ],
  로: [
    { char: "路", meaning: "길", element: "earth", strokes: 13 },
    { char: "露", meaning: "이슬", element: "water", strokes: 21 },
    { char: "魯", meaning: "클", element: "earth", strokes: 15 },
  ],
  운: [
    { char: "韻", meaning: "운치", element: "metal", strokes: 19 },
    { char: "雲", meaning: "구름", element: "water", strokes: 12 },
    { char: "運", meaning: "움직일", element: "earth", strokes: 13 },
  ],
  찬: [
    { char: "燦", meaning: "빛날", element: "fire", strokes: 17 },
    { char: "讚", meaning: "기릴", element: "metal", strokes: 26 },
    { char: "贊", meaning: "도울", element: "metal", strokes: 19 },
  ],
  건: [
    { char: "健", meaning: "건강할", element: "wood", strokes: 11 },
    { char: "建", meaning: "세울", element: "wood", strokes: 9 },
    { char: "乾", meaning: "하늘", element: "metal", strokes: 11 },
  ],
  태: [
    { char: "泰", meaning: "클", element: "earth", strokes: 10 },
    { char: "太", meaning: "클", element: "fire", strokes: 4 },
    { char: "兌", meaning: "기쁠", element: "metal", strokes: 7 },
  ],
  오: [
    { char: "旿", meaning: "밝을", element: "fire", strokes: 7 },
    { char: "悟", meaning: "깨달을", element: "fire", strokes: 11 },
    { char: "五", meaning: "다섯", element: "earth", strokes: 4 },
  ],
  현: [
    { char: "賢", meaning: "어질", element: "metal", strokes: 15 },
    { char: "炫", meaning: "빛날", element: "fire", strokes: 9 },
    { char: "鉉", meaning: "솥귀", element: "metal", strokes: 13 },
  ],
  라: [
    { char: "羅", meaning: "벌일", element: "wood", strokes: 19 },
    { char: "螺", meaning: "소라", element: "water", strokes: 17 },
    { char: "喇", meaning: "나팔", element: "fire", strokes: 12 },
  ],
  람: [
    { char: "嵐", meaning: "산바람", element: "earth", strokes: 12 },
    { char: "藍", meaning: "쪽빛", element: "wood", strokes: 20 },
    { char: "濫", meaning: "넘칠", element: "water", strokes: 18 },
  ],
  해: [
    { char: "海", meaning: "바다", element: "water", strokes: 10 },
    { char: "解", meaning: "풀", element: "wood", strokes: 13 },
    { char: "垓", meaning: "지경", element: "earth", strokes: 9 },
  ],
  루: [
    { char: "樓", meaning: "다락", element: "wood", strokes: 15 },
    { char: "淚", meaning: "눈물", element: "water", strokes: 11 },
    { char: "鏤", meaning: "새길", element: "metal", strokes: 19 },
  ],
  세: [
    { char: "世", meaning: "세상", element: "metal", strokes: 5 },
    { char: "洗", meaning: "씻을", element: "water", strokes: 10 },
    { char: "稅", meaning: "거둘", element: "wood", strokes: 12 },
  ],
  겸: [
    { char: "謙", meaning: "겸손할", element: "metal", strokes: 17 },
    { char: "兼", meaning: "겸할", element: "wood", strokes: 10 },
    { char: "鎌", meaning: "낫", element: "metal", strokes: 18 },
  ],
  민: [
    { char: "旻", meaning: "하늘", element: "fire", strokes: 8 },
    { char: "珉", meaning: "옥돌", element: "metal", strokes: 10 },
    { char: "敏", meaning: "민첩할", element: "water", strokes: 11 },
  ],
  수: [
    { char: "洙", meaning: "물 이름", element: "water", strokes: 10 },
    { char: "秀", meaning: "빼어날", element: "metal", strokes: 7 },
    { char: "樹", meaning: "나무", element: "wood", strokes: 16 },
  ],
  연: [
    { char: "然", meaning: "그럴", element: "fire", strokes: 12 },
    { char: "姸", meaning: "고울", element: "earth", strokes: 9 },
    { char: "淵", meaning: "깊을", element: "water", strokes: 12 },
  ],
  별: [
    { char: "星", meaning: "별", element: "metal", strokes: 9 },
    { char: "昺", meaning: "밝을", element: "fire", strokes: 9 },
    { char: "彆", meaning: "특별할", element: "wood", strokes: 14 },
  ],
  솔: [
    { char: "率", meaning: "거느릴", element: "metal", strokes: 11 },
    { char: "松", meaning: "소나무", element: "wood", strokes: 8 },
    { char: "帥", meaning: "장수", element: "earth", strokes: 9 },
  ],
  진: [
    { char: "鎭", meaning: "진정할", element: "metal", strokes: 18 },
    { char: "辰", meaning: "별", element: "earth", strokes: 7 },
    { char: "津", meaning: "나루", element: "water", strokes: 10 },
  ],
  규: [
    { char: "奎", meaning: "별 이름", element: "earth", strokes: 9 },
    { char: "圭", meaning: "홀", element: "earth", strokes: 6 },
    { char: "珪", meaning: "서옥", element: "metal", strokes: 10 },
  ],
  한: [
    { char: "瀚", meaning: "넓을", element: "water", strokes: 19 },
    { char: "翰", meaning: "날개, 문장", element: "wood", strokes: 16 },
    { char: "韓", meaning: "나라 이름", element: "metal", strokes: 17 },
  ],
  담: [
    { char: "潭", meaning: "깊은 물", element: "water", strokes: 15 },
    { char: "湛", meaning: "맑을", element: "water", strokes: 12 },
    { char: "談", meaning: "말씀", element: "metal", strokes: 15 },
  ],
  희: [
    { char: "熙", meaning: "빛날", element: "fire", strokes: 14 },
    { char: "喜", meaning: "기쁠", element: "fire", strokes: 12 },
    { char: "僖", meaning: "즐거울", element: "earth", strokes: 14 },
  ],
  은: [
    { char: "恩", meaning: "은혜", element: "earth", strokes: 10 },
    { char: "垠", meaning: "땅끝", element: "earth", strokes: 9 },
    { char: "銀", meaning: "은", element: "metal", strokes: 14 },
  ],
  결: [
    { char: "潔", meaning: "깨끗할", element: "water", strokes: 16 },
    { char: "結", meaning: "맺을", element: "wood", strokes: 12 },
    { char: "決", meaning: "결단할", element: "water", strokes: 7 },
  ],
  주: [
    { char: "宙", meaning: "우주", element: "earth", strokes: 8 },
    { char: "周", meaning: "두루", element: "metal", strokes: 8 },
    { char: "洲", meaning: "섬", element: "water", strokes: 9 },
  ],
  빈: [
    { char: "彬", meaning: "빛날", element: "wood", strokes: 11 },
    { char: "斌", meaning: "빛날", element: "fire", strokes: 12 },
    { char: "賓", meaning: "손님", element: "metal", strokes: 14 },
  ],
};

const state = {
  recommendations: [],
  selectedNameIndex: 0,
  selectedHanjaBySlot: {},
  sajuProfile: null,
  lastName: "",
};

const summary = document.querySelector("#summary");
const analysis = document.querySelector("#analysis");
const recommendations = document.querySelector("#recommendations");
const hanjaPanel = document.querySelector("#hanjaPanel");
const form = document.querySelector("#naming-form");
const themeToggle = document.querySelector("#theme-toggle");
const partnershipTrigger = document.querySelector("#partnership-trigger");
const adUnits = Array.from(document.querySelectorAll(".ad-unit"));
const commentsLoadButton = document.querySelector("#comments-load-button");
const disqusContainer = document.querySelector("#disqus_thread");

const THEME_STORAGE_KEY = "name-atelier-theme";

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";

  document.documentElement.dataset.theme = nextTheme;

  if (!themeToggle) {
    return;
  }

  themeToggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
  themeToggle.setAttribute("aria-label", nextTheme === "dark" ? "화이트 모드로 전환" : "다크 모드로 전환");
  themeToggle.innerHTML = `<span class="theme-toggle-icon" aria-hidden="true">${nextTheme === "dark" ? "☾" : "☀"}</span>`;
}

function initializeTheme() {
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  } catch (error) {
    savedTheme = null;
  }
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

  applyTheme(initialTheme);

  if (!themeToggle) {
    return;
  }

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (error) {
      // Ignore storage write failures (private mode or blocked storage).
    }
    applyTheme(nextTheme);
  });
}

function initializeAds() {
  if (!adUnits.length) {
    return;
  }

  window.adsbygoogle = window.adsbygoogle || [];

  adUnits.forEach((unit) => {
    try {
      window.adsbygoogle.push({});
      unit.dataset.adInitialized = "true";
    } catch (error) {
      unit.dataset.adInitialized = "false";
    }
  });
}

function loadDisqus() {
  if (!disqusContainer || disqusContainer.dataset.loaded === "true") {
    return;
  }

  const d = document;
  const s = d.createElement("script");
  s.src = "https://productcreate.disqus.com/embed.js";
  s.setAttribute("data-timestamp", String(+new Date()));
  (d.head || d.body).appendChild(s);
  disqusContainer.dataset.loaded = "true";

  if (commentsLoadButton) {
    commentsLoadButton.disabled = true;
    commentsLoadButton.textContent = "댓글 로딩 중...";
  }
}

function initializeDisqusLazy() {
  if (!disqusContainer) {
    return;
  }

  if (commentsLoadButton) {
    commentsLoadButton.addEventListener("click", loadDisqus);
  }

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadDisqus();
        currentObserver.disconnect();
      });
    },
    { rootMargin: "280px 0px" }
  );

  observer.observe(disqusContainer);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => (
    {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char]
  ));
}

function setDefaultBirthInputs() {
  const now = new Date();
  const dateInput = document.querySelector("#birthDate");
  const timeInput = document.querySelector("#birthTime");

  if (!dateInput || !timeInput) {
    return;
  }

  if (!dateInput.value) {
    dateInput.value = now.toISOString().slice(0, 10);
  }

  if (!timeInput.value) {
    timeInput.value = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  }
}

function getTimeKeyword(hours) {
  if (hours < 6) return "새벽의 맑은 기운";
  if (hours < 12) return "아침의 산뜻한 기운";
  if (hours < 18) return "낮의 생동감";
  return "밤의 차분한 기운";
}

function getSeasonKeyword(month) {
  if (month >= 3 && month <= 5) return "봄처럼 부드럽고 생기 있는";
  if (month >= 6 && month <= 8) return "여름처럼 선명하고 에너지 있는";
  if (month >= 9 && month <= 11) return "가을처럼 깊고 정갈한";
  return "겨울처럼 맑고 단단한";
}

function getHourBranchIndex(hour) {
  return Math.floor(((hour + 1) % 24) / 2);
}

function sortElementsByCount(counts) {
  return Object.entries(counts).sort((left, right) => left[1] - right[1]);
}

function deriveSajuProfile(dateValue, timeValue) {
  const hours = Number((timeValue || "12:00").split(":")[0]);
  const minutes = Number((timeValue || "12:00").split(":")[1] || 0);
  const baseDate = new Date(`${dateValue || new Date().toISOString().slice(0, 10)}T${timeValue || "12:00"}:00`);
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth() + 1;
  const day = baseDate.getDate();

  const yearStemIndex = ((year - 4) % 10 + 10) % 10;
  const yearBranchIndex = ((year - 4) % 12 + 12) % 12;
  const monthBranchIndex = ((month + 1) % 12 + 12) % 12;
  const daySerial = Math.floor(Date.UTC(year, month - 1, day) / 86400000);
  const dayStemIndex = ((daySerial + 6) % 10 + 10) % 10;
  const dayBranchIndex = ((daySerial + 8) % 12 + 12) % 12;
  const hourBranchIndex = getHourBranchIndex(hours);

  const counts = {
    wood: 0,
    fire: 0,
    earth: 0,
    metal: 0,
    water: 0,
  };

  const parts = [
    heavenlyStems[yearStemIndex],
    earthlyBranches[yearBranchIndex],
    earthlyBranches[monthBranchIndex],
    heavenlyStems[dayStemIndex],
    earthlyBranches[dayBranchIndex],
    earthlyBranches[hourBranchIndex],
  ];

  parts.forEach((part) => {
    counts[part.element] += 1;
  });

  const sorted = sortElementsByCount(counts);
  const weakestElement = sorted[0][0];
  const supportElement = sorted[1][0];
  const dominantElement = sorted[sorted.length - 1][0];

  return {
    counts,
    weakestElement,
    supportElement,
    dominantElement,
    yearPillar: `${heavenlyStems[yearStemIndex].label}${earthlyBranches[yearBranchIndex].label}`,
    dayPillar: `${heavenlyStems[dayStemIndex].label}${earthlyBranches[dayBranchIndex].label}`,
    zodiac: earthlyBranches[yearBranchIndex].zodiac,
    seasonKeyword: getSeasonKeyword(month),
    timeKeyword: getTimeKeyword(hours),
    signature: (year + month + day + hours + minutes) % 9,
  };
}

function buildExtendedName(baseSyllables, syllables, profile, tone, variantSeed) {
  if (syllables === "2") return [...baseSyllables];

  const candidates = [
    ...(extensionSyllables[profile.weakestElement] || []),
    ...(extensionSyllables[profile.supportElement] || []),
  ];
  const uniqueCandidates = [...new Set(candidates)].filter((syllable) => !baseSyllables.includes(syllable));
  const fallbackCandidates = uniqueCandidates.length ? uniqueCandidates : [...new Set(candidates)];
  const extension = fallbackCandidates[variantSeed % fallbackCandidates.length];

  if (tone === "strong" || tone === "modern") {
    return [baseSyllables[0], extension, baseSyllables[1]];
  }

  return [...baseSyllables, extension];
}

function getPreferredElements(template, profile) {
  const merged = [profile.weakestElement, profile.supportElement, ...template.focus];
  return [...new Set(merged)];
}

function sortHanjaOptions(options, preferredElements) {
  return [...options].sort((left, right) => {
    const leftRank = preferredElements.indexOf(left.element);
    const rightRank = preferredElements.indexOf(right.element);
    const normalizedLeft = leftRank === -1 ? 99 : leftRank;
    const normalizedRight = rightRank === -1 ? 99 : rightRank;

    if (normalizedLeft !== normalizedRight) return normalizedLeft - normalizedRight;
    return left.strokes - right.strokes;
  });
}

function getTemplateKey(template) {
  return template.syllables.join("-");
}

function getTemplateTags(template) {
  return templateTagMap[getTemplateKey(template)] || [];
}

function scoreTemplateTags(tags, religion) {
  const profile = religionProfiles[religion] || religionProfiles.none;

  return tags.reduce(
    (score, tag, index) => score + (profile.preferredTemplateTags.includes(tag) ? 8 - Math.min(index, 4) : 0),
    0
  );
}

function scoreSyllableAffinity(syllables, religion) {
  const profile = religionProfiles[religion] || religionProfiles.none;

  return syllables.reduce(
    (score, syllable) => score + (profile.preferredSyllables.includes(syllable) ? 3 : 0),
    0
  );
}

function scoreHanjaThemes(optionsBySlot, religion) {
  const profile = religionProfiles[religion] || religionProfiles.none;
  let score = 0;

  optionsBySlot.forEach((slot) => {
    const topOption = slot.options[0];

    if (!topOption) return;
    if (profile.preferredHanjaElements.includes(topOption.element)) {
      score += 2;
    }

    profile.preferredTemplateTags.forEach((tag) => {
      const keywords = hanjaTagMap[tag] || [];
      const matchesKeyword = keywords.some(
        (keyword) => topOption.meaning.includes(keyword) || topOption.char.includes(keyword)
      );

      if (matchesKeyword) {
        score += 1;
      }
    });
  });

  return score;
}

function calculateReligionScore(template, displaySyllables, slots, religion) {
  const templateTags = getTemplateTags(template);

  return (
    scoreTemplateTags(templateTags, religion) +
    scoreSyllableAffinity(displaySyllables, religion) +
    scoreHanjaThemes(slots, religion)
  );
}

function buildRecommendations(formData, profile) {
  const gender = formData.get("gender");
  const tone = formData.get("tone");
  const syllables = formData.get("syllables");
  const religion = formData.get("religion");
  const lastName = formData.get("lastName").trim();
  const wish = formData.get("wish").trim();

  const templates = nameTemplates[gender][tone];
  const rotation = profile.signature % templates.length;
  const rotated = templates.map((_, index) => templates[(index + rotation) % templates.length]);

  const rawRecommendations = rotated.map((template, index) => {
    const variantSeed = profile.signature + index;
    const displaySyllables = buildExtendedName(template.syllables, syllables, profile, tone, variantSeed);
    const preferredElements = getPreferredElements(template, profile);
    const slots = displaySyllables.map((syllable) => ({
      syllable,
      options: sortHanjaOptions(hanjaMap[syllable] || [], preferredElements),
    }));
    const religionScore = calculateReligionScore(template, displaySyllables, slots, religion);
    const selectedOptions = slots.map((slot) => slot.options[0]).filter(Boolean);
    const balanceScore = selectedOptions.reduce(
      (score, option) => score + (option.element === profile.weakestElement ? 2 : option.element === profile.supportElement ? 1 : 0),
      0
    );
    const totalScore = balanceScore + religionScore;
    const note = wish
      ? `"${wish}"이라는 바람과 ${toneLabels[tone]}을 연결해 ${elementLabels[profile.weakestElement]} 기운을 보완하도록 맞췄습니다.`
      : `${toneLabels[tone]}을 유지하면서 부족한 ${elementLabels[profile.weakestElement]} 기운을 보완하도록 맞췄습니다.`;

    return {
      index,
      lastName,
      displayName: `${lastName}${displaySyllables.join("")}`,
      meaning: template.meaning,
      note,
      slots,
      balanceScore,
      religionScore,
      totalScore,
      recommendationLabel: index + 1,
    };
  }).sort((left, right) => {
    if (right.totalScore !== left.totalScore) return right.totalScore - left.totalScore;
    return right.balanceScore - left.balanceScore;
  });

  const seenNames = new Set();

  return rawRecommendations.filter((item) => {
    if (seenNames.has(item.displayName)) {
      return false;
    }

    seenNames.add(item.displayName);
    return true;
  });
}

function renderSummary(formData, profile) {
  const tone = formData.get("tone");
  const religion = formData.get("religion");
  const lastName = formData.get("lastName").trim();
  const wish = formData.get("wish").trim();
  const wishLine = wish
    ? `부모님의 바람인 "${escapeHtml(wish)}"을 이름 의미에 반영했습니다.`
    : "건강과 복, 안정감을 중심에 두고 조합했습니다.";

  summary.innerHTML = `
    <h3>${lastName ? `${escapeHtml(lastName)} 성과 잘 어울리는` : "입력 조건에 잘 어울리는"} 이름 조합입니다</h3>
    <p>${profile.seasonKeyword} 인상에 ${profile.timeKeyword}을 더하고, ${religionTags[religion]} ${toneLabels[tone]}을 살렸습니다. ${wishLine}</p>
  `;
}

function renderAnalysis(profile) {
  analysis.innerHTML = `
    <h3>간이 사주/오행 분석</h3>
    <p>연주 추정은 ${profile.yearPillar}, 일주 추정은 ${profile.dayPillar}이며 띠는 ${profile.zodiac}입니다. 오행 분포상 ${elementLabels[profile.weakestElement]} 기운이 가장 약하고 ${elementLabels[profile.dominantElement]} 기운이 강해, 이름에서는 ${elementLabels[profile.weakestElement]} 계열 한자를 우선 추천합니다.</p>
    <div class="element-meter">
      ${Object.entries(profile.counts)
        .map(
          ([key, value]) => `
            <div class="element-pill">
              <strong>${elementLabels[key]}</strong>
              <span>${value} 포인트</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderRecommendations() {
  recommendations.innerHTML = state.recommendations
    .map(
      (item, index) => `
        <article
          class="name-card${index === state.selectedNameIndex ? " is-selected" : ""}"
          data-name-index="${index}"
          tabindex="0"
        >
          <div class="name-row">
            <h3>${escapeHtml(item.displayName)}</h3>
            <span class="badge">추천 ${index + 1}</span>
          </div>
          <p>${escapeHtml(item.meaning)}</p>
          <p>${escapeHtml(item.note)}</p>
        </article>
      `
    )
    .join("");
}

function getSelectedRecommendation() {
  return state.recommendations[state.selectedNameIndex];
}

function initializeHanjaSelection(recommendation) {
  state.selectedHanjaBySlot = {};
  recommendation.slots.forEach((slot, index) => {
    state.selectedHanjaBySlot[index] = 0;
    if (!slot.options.length) {
      state.selectedHanjaBySlot[index] = -1;
    }
  });
}

function buildHanjaPreview(recommendation) {
  const selectedChars = recommendation.slots.map((slot, index) => slot.options[state.selectedHanjaBySlot[index]]);
  const validChoices = selectedChars.filter(Boolean);
  const hanjaName = `${state.lastName}${validChoices.map((choice) => choice.char).join("")}`;
  const totalStrokes = validChoices.reduce((sum, choice) => sum + choice.strokes, 0);

  return {
    hanjaName,
    totalStrokes,
    choices: validChoices,
  };
}

function renderHanjaPanel() {
  const recommendation = getSelectedRecommendation();

  if (!recommendation) {
    hanjaPanel.innerHTML = "";
    return;
  }

  if (Object.keys(state.selectedHanjaBySlot).length !== recommendation.slots.length) {
    initializeHanjaSelection(recommendation);
  }

  const preview = buildHanjaPreview(recommendation);

  hanjaPanel.innerHTML = `
    <div class="hanja-head">
      <h3>한자 선택</h3>
      <p>원하는 이름을 고른 뒤, 음절마다 부족한 ${elementLabels[state.sajuProfile.weakestElement]} 기운을 보완하는 한자를 선택해 조합할 수 있습니다.</p>
    </div>
    <div class="hanja-grid">
      ${recommendation.slots
        .map(
          (slot, slotIndex) => `
            <div class="hanja-column">
              <h4>${slotIndex + 1}음절: ${slot.syllable}</h4>
              <div class="hanja-options">
                ${slot.options
                  .map(
                    (option, optionIndex) => `
                      <button
                        type="button"
                        class="hanja-option${state.selectedHanjaBySlot[slotIndex] === optionIndex ? " is-active" : ""}"
                        data-slot-index="${slotIndex}"
                        data-option-index="${optionIndex}"
                      >
                        <strong>${option.char}</strong>
                        <small>${elementLabels[option.element]} / ${option.strokes}획</small>
                        <p>${option.meaning}</p>
                      </button>
                    `
                  )
                  .join("")}
              </div>
            </div>
          `
        )
        .join("")}
    </div>
    <div class="hanja-preview">
      <h3>선택된 한자 이름</h3>
      <div class="hanja-preview-name">${escapeHtml(preview.hanjaName)}</div>
      <p>총 획수는 ${preview.totalStrokes}획이며, 선택한 한자는 ${preview.choices.map((choice) => `${choice.char}(${elementLabels[choice.element]})`).join(", ")} 조합입니다.</p>
      <div class="hanja-detail-list">
        ${preview.choices
          .map(
            (choice, index) => `
              <div class="hanja-detail">
                ${index + 1}음절 ${recommendation.slots[index].syllable}: ${choice.char}는 "${choice.meaning}"의 뜻을 가지며 ${elementLabels[choice.element]} 기운을 더합니다.
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderAll(formData) {
  if (!summary || !analysis || !recommendations || !hanjaPanel) {
    return;
  }

  state.lastName = formData.get("lastName").trim();
  state.sajuProfile = deriveSajuProfile(formData.get("birthDate"), formData.get("birthTime"));
  state.recommendations = buildRecommendations(formData, state.sajuProfile);
  state.selectedNameIndex = 0;
  initializeHanjaSelection(state.recommendations[0]);

  renderSummary(formData, state.sajuProfile);
  renderAnalysis(state.sajuProfile);
  renderRecommendations();
  renderHanjaPanel();
}

function initializePartnershipPopup() {
  if (!partnershipTrigger) {
    return;
  }

  partnershipTrigger.addEventListener("click", () => {
    const popup = window.open(
      "partnership.html",
      "partnershipInquiry",
      "popup=yes,width=720,height=860,resizable=yes,scrollbars=yes"
    );

    if (popup) {
      popup.focus();
      return;
    }

    window.location.href = "partnership.html";
  });
}

initializeTheme();
initializeAds();
initializeDisqusLazy();
initializePartnershipPopup();

if (form && summary && analysis && recommendations && hanjaPanel) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderAll(new FormData(form));
  });

  recommendations.addEventListener("click", (event) => {
    const card = event.target.closest("[data-name-index]");

    if (!card) return;

    state.selectedNameIndex = Number(card.dataset.nameIndex);
    initializeHanjaSelection(getSelectedRecommendation());
    renderRecommendations();
    renderHanjaPanel();
  });

  recommendations.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const card = event.target.closest("[data-name-index]");

    if (!card) return;

    event.preventDefault();
    state.selectedNameIndex = Number(card.dataset.nameIndex);
    initializeHanjaSelection(getSelectedRecommendation());
    renderRecommendations();
    renderHanjaPanel();
  });

  hanjaPanel.addEventListener("click", (event) => {
    const option = event.target.closest("[data-slot-index]");

    if (!option) return;

    const slotIndex = Number(option.dataset.slotIndex);
    const optionIndex = Number(option.dataset.optionIndex);

    state.selectedHanjaBySlot[slotIndex] = optionIndex;
    renderHanjaPanel();
  });

  setDefaultBirthInputs();
  renderAll(new FormData(form));
}
