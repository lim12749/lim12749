export type ProjectCategory = 'AI · Web' | 'Web' | 'XR · Automation'

export interface Project {
  id: string
  title: string
  subtitle: string
  period: string
  category: ProjectCategory
  role: string
  summary: string
  highlights: string[]
  stack: string[]
  url?: string
  videoId?: string
}

export const projects: Project[] = [
  {
    id: 'saju',
    title: '사주톡',
    subtitle: '대표 서비스 · AI 사주 콘텐츠 웹서비스',
    period: '2026.07 — 현재',
    category: 'AI · Web',
    role: '개인 서비스 기획·개발·운영',
    summary: '8월 21일 정식 출시 후 약 3주 만에 일 방문자 약 50명 규모로 운영 중인 개인 서비스입니다. 사용자 행동 데이터를 바탕으로 콘텐츠와 서비스 이용 흐름을 지속 개선하고 있습니다.',
    highlights: [
      '기획부터 개발·출시·운영까지 단독 수행 — 무료 체험부터 인증·결제·유료 콘텐츠 열람까지 전체 서비스 구현',
      '무료 콘텐츠 11종으로 확장 — 캐릭터 결과·유형 비교·공유 카드·내 수집품 기능으로 콘텐츠 경험 확대',
      '사용자 여정·결제 퍼널 분석 도구 구현 — 단계별 이탈을 확인하고, 관리자·테스트 계정을 제외해 데이터 정확도 개선',
      '실제 운영 피드백을 제품 개선에 반영 — 문답 자동 전환, 공유 링크 오류 수정, 개인·공유 방문자별 행동 버튼 개선',
      '만세력 계산과 AI 해석을 분리 설계 — 코드 기반 계산과 생성 결과 검수·재생성 파이프라인 구현',
      '인증·결제·유료 콘텐츠 접근 제어 구현 — 서버 가격 검증, 중복 결제 이벤트 처리, 주문 상태·소유자 확인 적용',
    ],
    stack: ['TypeScript', 'Next.js', 'Claude API', 'Supabase', 'Kakao OAuth', 'PortOne', 'Vercel'],
    url: 'https://www.unmyeongseojae.com/',
  },
  {
    id: 'futurelifelab',
    title: '미래라이프랩',
    subtitle: '맞춤 영양 구독 · 유전자 분석 · AI 약사 상담',
    period: '2026.07 — 현재',
    category: 'AI · Web',
    role: '풀스택 개발 · 약 3주간 단독 개발',
    summary: '유전자 검사와 문진을 바탕으로 맞춤 영양제를 구독하는 서비스. 사용자 화면부터 회원·주문·키트 관리와 영업 백오피스까지 구성했습니다.',
    highlights: [
      'Gemini 기반 상담에 RAG 검색 근거를 전달하고, 출처 표기는 코드에서 부여하도록 설계했습니다.',
      '개인 유전자 데이터는 Supabase, 공용 유전자 지식은 Pinecone에 분리하고, LLM에는 질문에 필요한 요약만 전달했습니다.',
      '금지어·전문 의약품 상품명·필수 고지 문구를 소스 코드와 렌더된 HTML에서 검사하는 스크립트를 구현했습니다.',
      '포트원 V2 결제 상태와 금액을 서버에서 재조회해 주문을 확정하고, 구독 여부에 따른 AI 상담 접근 제어를 구현했습니다.',
    ],
    stack: ['TypeScript', 'Next.js', 'Supabase', 'Gemini', 'Pinecone', 'PortOne', 'Vercel'],
    url: 'https://miraelifelab.com/',
  },
  {
    id: 'pharmom',
    title: '약사맘돌봄',
    subtitle: '신규 서비스 웹 개발',
    period: '에피젠 재직 중 · 개발 기간 1주',
    category: 'Web',
    role: '웹 풀스택 개발',
    summary: '에피젠의 신규 서비스 약사맘돌봄을 1주간 웹 풀스택으로 개발했습니다.',
    highlights: ['신규 서비스의 웹 프론트엔드와 백엔드 개발을 담당했습니다.'],
    stack: [],
    url: 'https://www.pharmomcare.com/',
  },
  {
    id: 'insider-trail',
    title: '인사이더 트레일',
    subtitle: 'AX 인재전쟁 · 마이리얼트립 예선 과제',
    period: '2026.07',
    category: 'AI · Web',
    role: '문제 정의 · 제품 설계 · 플러그인 구현',
    summary: '실제 여행 사진과 메모를 친구에게 공유할 수 있는 코스로 정리하는 Codex 플러그인. 여행 추천과 예약 사이에서 반복되는 정보 검증 과정을 줄이고자 했습니다.',
    highlights: [
      '사진 EXIF의 위치·촬영 시각으로 동선을 구성하고, 메모에서 장소를 추천하는 이유와 문화 팁을 정리했습니다.',
      'JSON Schema로 입출력을 정의하고, 하나의 trail.json에서 코스 브리핑과 HTML 지도를 생성했습니다.',
      '여러 여행자의 방문 수와 사실 검증 상태를 분리하고, 확인하지 못한 정보는 needs_check로 표시했습니다.',
      '단일·그룹 사진과 실제 JPG·HEIC 경로를 검증하고, EXIF 누락·미확정 사실 예외를 확인했습니다.',
      '예약 가능한 장소를 상품 카드로 연결하는 구조를 설계했으며, 예선 구현에는 공개·샘플 데이터를 사용했습니다.',
    ],
    stack: ['TypeScript', 'Python', 'JSON Schema', 'Codex'],
  },
  {
    id: 'harang',
    title: '하랑산업개발',
    subtitle: '반응형 기업 홈페이지',
    period: '2026.06 — 2026.07',
    category: 'Web',
    role: '홈페이지 기획 · 풀스택 개발',
    summary: '기업 홈페이지를 기획하고 프론트엔드 화면과 백엔드 데이터 처리를 구현했습니다.',
    highlights: [
      'Next.js 15·React 19·TypeScript로 기업 홈페이지를 개발했습니다.',
      'Tailwind CSS·Framer Motion·React Icons로 화면과 인터랙션을 구성했습니다.',
      'Supabase를 활용해 백엔드 데이터를 처리했습니다.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    url: 'https://www.harangdnc.com/',
  },
  {
    id: 'myvr',
    title: 'MYVR',
    subtitle: '가우스랩 · XR 기반 점검·정비 관리 솔루션',
    period: '가우스랩 재직 중 · 2020.11 — 2024.01',
    category: 'XR · Automation',
    role: '점검·정비 관리 솔루션 메인 개발',
    summary: '현장 정비 작업자와 사무직 관리자 사이의 업무 전달·정비·결과 보고를 연결하는 시스템입니다. 작업자가 오늘의 업무 목록을 내려받고, XR 디바이스에서 정비 가이드를 확인하며 작업한 결과를 관리자 디바이스에 보고하는 흐름을 개발했습니다.',
    highlights: [
      '작업자가 당일 업무 목록을 내려받아 점검·정비를 수행하는 작업 흐름을 구현했습니다.',
      'XR 디바이스에서 작업 데이터를 실시간으로 동기화하도록 개발했습니다.',
      '작업 순서와 정비 가이드를 XR 화면에 시각화해 현장 작업을 지원했습니다.',
      '점검·정비 결과를 보고서로 정리하고 관리자 디바이스로 전달하는 보고 체계를 구현했습니다.',
    ],
    stack: ['Unity 5', 'C#', 'Firebase', 'MRTK'],
    videoId: 'MaduDOwtgIw',
  },
  {
    id: 'hololens',
    title: '설비 온도 모니터링',
    subtitle: 'HoloLens 2 · FLIR 산업 현장 PoC',
    period: '2026.04',
    category: 'XR · Automation',
    role: '외주 · 개발 리드와 2인 협업 · HoloLens 클라이언트·UI/UX 담당',
    summary: '현장 기술자가 HoloLens 2로 장비 번호 QR을 응시하면 해당 장비의 안드로이드 열화상 카메라 데이터를 확인할 수 있는 설비 점검 PoC입니다. 개발 리드와 역할을 나눠 3일 만에 완성했습니다.',
    highlights: [
      '개발 리드가 DB 구성을 담당하고, 저는 HoloLens 클라이언트와 현장 점검 UI/UX를 담당했습니다.',
      '장비 번호 QR을 응시해 인식하고 해당 장비의 열상 데이터를 화면에 표시하는 흐름을 구현했습니다.',
      '안드로이드 열화상 카메라에서 촬영 중인 데이터를 HoloLens에서 확인할 수 있도록 연동했습니다.',
      '현장 기술자가 장비 상태와 이상 여부를 점검할 수 있도록 XR 화면의 정보 표시와 조작 흐름을 구성했습니다.',
    ],
    stack: ['Unity', 'C#', 'HoloLens 2', 'FLIR'],
  },
  {
    id: 'prediction-demo',
    title: '예측시장 데모',
    subtitle: 'Polymarket 스타일 Web3 프론트엔드',
    period: '2026.04',
    category: 'Web',
    role: '개인 학습 프로젝트 · 설계·구현',
    summary: '지갑 인증부터 마켓 탐색·트레이딩 화면까지 재현한 학습용 데모입니다. 테스트넷에서 ERC-20 발행과 MetaMask 자산 연결을 검증했습니다.',
    highlights: [
      'SIWE 인증의 일회용 nonce 발급, 지갑 서명, 서버 검증, JWT 세션 발급 흐름을 구현했습니다.',
      '지갑 연결·체인 전환·서명·오류 상태를 나눠 사용자에게 각 단계의 진행 상황을 안내했습니다.',
      '마켓 검색·필터, 가격 차트, 오더북, 매수·매도 패널, 포트폴리오 화면을 구현했습니다.',
      'TanStack Query로 서버 상태를 관리하고 Tailwind CSS로 다크 테마 화면을 구성했습니다.',
    ],
    stack: ['Next.js', 'React', 'wagmi', 'viem', 'SIWE', 'TanStack Query', 'Recharts'],
  },
  {
    id: 'last-nine',
    title: 'Last-Nine',
    subtitle: '주식회사 더하다 · 기업 사이트와 관리자 화면',
    period: '2025.01',
    category: 'Web',
    role: '프론트엔드 단독 설계·개발 · 외주 납품',
    summary: '기업 홈페이지와 내장형 관리자 백오피스를 통합했습니다. 비개발자 고객이 직접 콘텐츠를 변경할 수 있도록 구성했습니다.',
    highlights: [
      '13개 이상의 사용자 페이지와 5개 탭의 관리자 화면을 구축했습니다.',
      '공용 내비게이션·슬라이드·이미지 UI를 분리하고 모바일·데스크톱 반응형 레이아웃을 구현했습니다.',
      '관리자가 저장한 JSON 설정으로 배너·영상·뉴스 등을 동적으로 렌더링해 재배포 없이 콘텐츠를 변경하도록 했습니다.',
      'AWS Amplify 자동 배포를 구성하고 운영 인수인계 문서를 작성해 납품했습니다.',
    ],
    stack: ['JavaScript', 'Next.js', 'Tailwind CSS', 'Swiper', 'AWS Amplify', 'AWS S3'],
    url: 'https://last-nine.co.kr/',
  },
  {
    id: 'webmecro',
    title: 'WebMecro',
    subtitle: '웹 데이터 감지 · 자동 입력 데스크톱 유틸리티',
    period: '2024.04',
    category: 'XR · Automation',
    role: '지인 요청 토이 프로젝트 · 개발',
    summary: '브라우저의 한 탭에서 데이터 변경을 감지하고, 다른 탭의 폼에 정해진 규칙으로 값을 입력·클릭하는 데스크톱 자동화 도구입니다.',
    highlights: [
      'Selenium의 Window Handle로 데이터 감시 탭과 입력 실행 탭을 전환·제어했습니다.',
      '비동기 폴링과 CancellationTokenSource로 UI 응답성을 유지하고 감시 작업을 취소할 수 있도록 했습니다.',
      '이전 데이터와 새 데이터를 비교해 값이 변경된 행에만 자동 입력을 실행했습니다.',
      '사용자가 XPath·ID를 화면에서 지정하도록 구성해 대상 요소 변경에 대응했습니다.',
    ],
    stack: ['C#', '.NET', 'Selenium'],
  },
]

export const experiences = [
  {
    company: '농업회사법인 에피젠',
    role: '개발 리드 · 계약직',
    period: '2026.06 — 현재',
    description: '디지털 헬스 서비스 웹 개발',
    highlights: [
      '기존 자사 서비스 미래라이프랩 리팩터링과 결제 시스템 API 연동을 담당했습니다.',
      '신규 서비스 약사맘돌봄의 웹 풀스택 개발을 1주간 진행했습니다.',
    ],
  },
  {
    company: "엘데브 (L’dev)",
    role: '대표 · 외주 프로젝트 운영·개발',
    period: '2024.11 — 현재',
    description: '고객 요구사항을 개발 범위와 실행 계획으로 연결',
    highlights: [
      '시니어 개발자와 2인 팀으로 일하며 영업·프로젝트 관리 70%, 개발 30%를 담당했습니다.',
      '요구사항 분석, 견적·계약, 기능 우선순위와 일정 조율, 테스트 및 고객 피드백 반영을 수행했습니다.',
      '고난도 프로젝트는 시니어 개발자가 개발을 리드하고, 웹 기능 개발·API 연동·오류 수정·배포를 지원했습니다.',
      '직접 수주한 유료 개발 프로젝트로 약 1,000만 원의 매출을 달성하고 이커머스 운영도 경험했습니다.',
    ],
  },
  {
    company: '가우스랩',
    role: 'Unity 클라이언트 개발 · 팀장',
    period: '2020.11 — 2024.01',
    description: '메타버스 콘텐츠 · 장비 조립 시뮬레이션 · XR 점검·정비 관리 솔루션 개발',
    highlights: [
      '메타버스 콘텐츠를 제작하고 장비 조립 시뮬레이션을 개발했습니다.',
      'MYVR 점검·정비 관리 솔루션의 메인 개발을 담당해 현장 작업자와 사무직 관리자의 업무·보고 흐름을 연결했습니다.',
      '당일 업무 목록 다운로드, XR 정비 가이드 시각화, 실시간 데이터 동기화, 관리자 디바이스로의 결과 보고를 구현했습니다.',
      '외주 프로젝트의 기술 방향과 일정을 관리하고 XR 과제 및 VR·AR 고등학교 강의를 수행했습니다.',
    ],
  },
  {
    company: '(주)라이크코퍼레이션',
    role: 'VR/AR 클라이언트 지원 · 계약직',
    period: '2019.10 — 2020.05',
    description: '빛마루방송지원센터 지원사업 운영·파견 지원',
    highlights: [
      '지원사업 참여자를 위한 방송 장비 대여·관리와 운영 지원을 담당했습니다.',
      '서비스 개발 관련 업무와 오프라인 교육 보조강사 업무를 수행했습니다.',
    ],
  },
]

export const skillGroups = [
  { title: 'Frontend', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { title: 'Backend · Data', items: ['Supabase', 'PostgreSQL', 'REST API', 'Firebase', 'Python'] },
  { title: 'AI · Integration', items: ['Claude API', 'Gemini API', 'RAG', 'Pinecone', 'PortOne', 'Kakao OAuth'] },
  { title: 'XR · Automation', items: ['C#', 'Unity', '.NET', 'HoloLens 2', 'Selenium'] },
  { title: 'Delivery', items: ['Git', 'GitHub', 'Vercel', 'AWS Amplify', 'AWS S3'] },
]

export const education = [
  {
    title: '한국IT전문대학교 · 게임프로그래밍학과',
    period: '2013 — 2021',
    description: '전문학사 · 졸업',
  },
  {
    title: '엘리스 부트캠프 SW 9기',
    period: '2024.04 — 2024.07',
    description: '웹 개발 교육 · 팀 프로젝트 2건 팀장. 마켓컬리 카피 홈페이지와 공공 API 기반 인천공항 편의서비스를 개발했습니다.',
  },
]

export const selfIntroduction = [
  "문제를 발견하면 실행 가능한 형태로 만들고, 실제 사용 과정에서 고치는 개발자 임기원입니다. 핵심 기능을 먼저 구현해 작동하는 상태를 만든 뒤, 사용자 입장에서 QA를 반복하며 완성도를 높입니다. 함께 일한 팀 리드도 제 강점으로 먼저 시작하는 추진력과 조언을 행동으로 옮기는 태도를 꼽았습니다. 저는 이 실행력을 결과물을 검증하고 개선하는 데까지 이어가려 합니다.",
  "현재 가장 집중하고 있는 서비스는 직접 기획·개발·운영하는 사주톡입니다. 무료 체험부터 인증·결제·유료 콘텐츠 열람까지 구현했고, 8월 21일 정식 출시 후 약 3주 만에 일 방문자 약 50명 규모로 운영하고 있습니다. 출시 이후 무료 콘텐츠를 11종으로 확장하고, 사용자 여정과 결제 퍼널을 분석해 문답 전환과 공유 흐름을 개선했습니다. 만세력 계산은 코드가 맡고 AI에는 해석을 위임하며, 생성 결과를 검수·재생성하는 파이프라인으로 품질을 관리합니다.",
  "에피젠에서는 유전자 검사·온라인 문진·맞춤 영양 구독·AI 상담 플랫폼을 맡았습니다. 합류 직후 사업 모델 변경에 맞춰 기존 구조를 재구축하고, 신규 서비스는 1주 만에 웹 풀스택으로 개발했습니다. AI 상담은 검색 근거와 모델의 해석을 분리하고, 개인 유전자 데이터는 공용 벡터 DB와 분리해 관리했습니다. LLM에는 질문에 필요한 요약만 전달하도록 설계하며 기능 구현과 데이터 처리 범위를 함께 고려했습니다.",
  "가우스랩에서는 3년 3개월간 메타버스 콘텐츠와 장비 조립 시뮬레이션을 개발하고, XR 점검·정비 관리 솔루션 MYVR의 메인 개발을 담당했습니다. 현장 작업자가 업무 목록과 정비 가이드를 XR에서 확인하고, 작업 결과를 관리자에게 보고하는 흐름을 구현했습니다. 특히 XR에 익숙하지 않은 실무자가 사용할 수 있도록 HUD 정보량과 조작 흐름을 반복해서 다듬었습니다. HoloLens 1부터 Meta Quest까지 디바이스가 달라질 때마다 사용성을 검증하며, 현장의 작업 절차를 소프트웨어로 옮기는 경험을 쌓았습니다.",
  "외주 개발에서는 고객 요구를 기능으로 구체화하고, 동료와 역할을 나눠 결과물을 완성했습니다. HoloLens 2 설비 점검 PoC는 개발 리드와 2인으로 협업한 프로젝트로, 리드가 DB 구성을 맡고 저는 HoloLens 클라이언트와 UI/UX에 집중했습니다. 작업자가 장비 번호 QR을 응시해 인식하면 해당 장비의 안드로이드 열화상 카메라 데이터를 XR 화면에 표시하고, 현장 기술자가 상태를 확인할 수 있는 점검 흐름을 구현했습니다. 역할을 분담해 3일 만에 PoC를 완성했으며, 제 담당 범위는 QR 인식과 데이터 표시, 현장 사용성이었습니다.",
  "Unity·C#에서 웹으로 영역을 넓히며 Next.js와 React를 익혀 기업 웹사이트와 관리자 화면도 개발했습니다. 비개발 고객이 직접 콘텐츠를 수정할 수 있도록 운영 흐름과 인수인계까지 챙겼습니다. 낯선 문제는 자료와 사례를 조사해 해결 방향을 정리한 뒤 시니어에게 검증받으며 풀었습니다. 사업과 쇼핑몰 운영을 통해 경험한 판매·고객 대응 역시 사용자의 불편과 운영 목적을 이해하는 바탕이 됐습니다. 앞으로도 먼저 실행하되 동료와 방향을 맞추고, 출시 이후의 피드백을 제품 개선으로 이어가는 개발자로 기여하겠습니다."
]
