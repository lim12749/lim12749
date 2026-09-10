# 안녕하세요, 임기원입니다 

**문제를 발견하면 빠르게 실행 가능한 형태로 만들고, 직접 써 보며 고치는 개발자입니다.**

Unity 클라이언트 3년(팀장)에서 출발해 웹 풀스택으로 영역을 넓혔고, 지금은 기획 →
설계 → 구현 → 배포 → 운영까지 혼자 완결합니다. AI를 개발 파트너로 적극 활용하되,
AI가 낸 결과를 그대로 믿지 않고 **정량 검사와 검증 파이프라인을 함께 설계**하는
방식으로 일합니다.

🏆 해커톤 수상 (AX 인재전쟁 · 마이리얼트립 과제) &nbsp;·&nbsp; 🚀 창업 경험 (개인사업 운영)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat&logo=supabase&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=flat&logo=firebase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Claude](https://img.shields.io/badge/Claude%20API-D97757?style=flat&logo=anthropic&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=flat&logo=googlegemini&logoColor=white)
![Pinecone](https://img.shields.io/badge/Pinecone-000000?style=flat&logo=pinecone&logoColor=white)
![C%23](https://img.shields.io/badge/C%23-512BD4?style=flat&logo=dotnet&logoColor=white)
![Unity](https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white)


## 이력서 · 자기소개

- [자기소개 전문](./자기소개-기본형.md): 개발 경험과 일하는 방식을 정리한 기본형 자기소개
- [웹 이력서 실행·배포 안내](./docs/web-resume.md): 이 저장소의 React 웹 이력서 실행 및 Vercel 연결 방법

웹 이력서는 자기소개, 프로젝트 10개, 경력 4개, 기술·교육으로 구성했습니다. 모바일 화면과 PDF 인쇄를 지원합니다.

---

## 🌐 만들고 운영 중인 서비스

전부 기획부터 배포까지 단독 개발한 라이브 서비스입니다.

| 서비스 | 무엇 | 스택 |
|---|---|---|
| [사주톡](https://www.unmyeongseojae.com/) | AI 사주 리딩 플랫폼 (직접 창업·운영) | Next.js · Supabase · Claude API · PortOne |
| [미래라이프랩](https://miraelifelab.com/) | 맞춤 영양 구독 + AI 유전자 상담 | Next.js · Supabase · Gemini + Pinecone |
| [약사맘돌봄](https://www.pharmomcare.com/) | 육아 돌봄·과외 정보 플랫폼 | Next.js · Firebase |
| [하랑DNC](https://www.harangdnc.com/) | 기업 홈페이지 (외주) | Next.js · Supabase |
| [Last-Nine](https://last-nine.co.kr/) | 기업 사이트 + 내장 백오피스 (외주) | Next.js · AWS |

### 사주톡 — 대표 서비스 · AI 사주 콘텐츠 웹서비스

개인 서비스 기획·개발·운영

8월 21일 정식 출시 후 약 3주 만에 일 방문자 약 50명 규모로 운영 중인 개인 서비스입니다. 사용자 행동 데이터를 바탕으로 콘텐츠와 서비스 이용 흐름을 지속 개선하고 있습니다.

- 기획부터 개발·출시·운영까지 단독 수행 — 무료 체험부터 인증·결제·유료 콘텐츠 열람까지 전체 서비스 구현
- 무료 콘텐츠 11종으로 확장 — 캐릭터 결과·유형 비교·공유 카드·내 수집품 기능으로 콘텐츠 경험 확대
- 사용자 여정·결제 퍼널 분석 도구 구현 — 단계별 이탈을 확인하고, 관리자·테스트 계정을 제외해 데이터 정확도 개선
- 실제 운영 피드백을 제품 개선에 반영 — 문답 자동 전환, 공유 링크 오류 수정, 개인·공유 방문자별 행동 버튼 개선
- 만세력 계산과 AI 해석을 분리 설계 — 코드 기반 계산과 생성 결과 검수·재생성 파이프라인 구현
- 인증·결제·유료 콘텐츠 접근 제어 구현 — 서버 가격 검증, 중복 결제 이벤트 처리, 주문 상태·소유자 확인 적용

### 미래라이프랩 — 맞춤 영양 구독 + AI 유전자 상담

- LLM에 사실 생성 권한을 주지 않는 RAG 설계 — 근거는 코드가 검색·선별하고 모델은
  문장화만, 출처는 코드가 부여해 환각 차단
- 민감한 유전자 데이터는 자체 DB에만, 공용 지식만 Pinecone에 — 개인정보를 외부
  벡터 DB에 올리지 않는 2계층 검색
- 검색 임계값을 실측으로 튜닝(재현율 25% → 100%), "LLM에 안 보냈다"까지 단언하는
  테스트 하네스, 표시광고법 금지어 자동 검사 스크립트
- 포트원 V2 서버측 재검증 결제, 건강보험공단 검진데이터 연동(CODEF)

### 약사맘돌봄 — 육아 돌봄·과외 정보 플랫폼

- 직업안정법·의료법 제약을 문서가 아니라 **스키마·보안 규칙·UI로 강제** (금지 문구
  자동 감지, 임의 투약 금지 UI, 3단계 위험도 에스컬레이션)
- 서버 없는 아키텍처에서 21KB Firestore 보안 규칙 + 결정적 문서 ID로 무결성 확보
- 기질 6축·재능 8영역 규칙 기반 스코어링 & 부모-교사 궁합 매칭 알고리즘 설계

---

## 🏆 AX 인재전쟁 해커톤 — 마이리얼트립 과제 · [코드](https://github.com/lim12749/mrt-insider-trail)

- "추천이 아니라 **검증 마찰 제거가 전환을 만든다**"는 문제 정의로, 실제 방문자의
  사진 EXIF(GPS·촬영시각)로 동선을 복원해 '검증된 여행 코스'를 자동 생성하는
  Codex 플러그인 「인사이더 트레일」 설계·구현
- 로직/데이터 분리 아키텍처(JSON Schema 고정), EXIF 없으면 추측하지 않고 되묻는
  "지어내지 않기" 원칙, HEIC 파싱 실패를 컨테이너 레벨에서 직접 해결

## 🔬 검증 가능하게 만든 사이드 프로젝트

문제를 푸는 것보다 **"이 결과를 믿어도 되는가"를 담보하는 데** 더 공을 들인 프로젝트들입니다.

### [tax-rag-mini](https://github.com/lim12749/tax-rag-mini) — RAG + Tool Calling 에이전트 루프

- LangChain 같은 프레임워크 없이 **에이전트 루프를 직접 구현** — 툴 호출 요청 감지 →
  실행 → 결과 재주입 → 재호출, 6턴 제한으로 무한루프 차단
- 세액 계산은 세율 구간표를 가진 코드가 전담하고 **모델에는 툴 호출만 위임** — 계산 환각 차단
- 출처와 에이전트 단계를 모델이 쓴 문자열이 아니라 **코드가 수집해서** 응답에 첨부
- Gemini function calling · Pinecone 통합 임베딩(한국어) · Next.js 16

### [holPick](https://github.com/lim12749/holPick) — 공공데이터 경마 복승 예측

경마 예측은 **틀렸는데 맞은 것처럼 보이기 쉬운 문제**라, 정확도보다 검증 설계에 시간을 썼습니다.

- **누수 차단** — 결과를 알아야 나오는 값(착순·주파기록) 배제. 각질도 그 경주 *이전* 이력으로만
  만든 시점별 스냅샷 사용 (신호는 줄지만 정직한 수치: 선행 27.5% vs 추입 12.9%)
- **축소추정** — 3전 2착 기수를 66%로 두면 예측이 끌려가므로 기저율(19.6%) 쪽으로 당김
- **시간분할 백테스트 + 대응비교 유의성 검정** — 검증 경주가 100여 개뿐이라 표준오차 없이
  "이겼다"고 말하면 과장. 같은 경주를 함께 맞히므로 paired z값으로 판정
- Harville 모델 복승 조합 확률, 디스크 캐시(일일 호출 한도 3,000 대응)
- **현재 배당 인기순(시장)을 넘지 못했고, README에 그렇게 적어 뒀습니다**

## 💼 경력

| 기간 | 회사 | 역할 |
|---|---|---|
| 2026.06 – 현재 | 에피젠 (디지털 헬스 스타트업) | 개발 리드 — 미래라이프랩·약사맘돌봄 풀스택 |
| 2024.11 – 현재 | 엘데브 L'dev (개인사업) | CEO — 외주 개발 수주·운영 |
| 2020.11 – 2024.01 | 가우스랩 | Unity·XR 개발 (팀장) — 메타버스·장비 조립 시뮬레이션·MYVR |
| 2019.10 – 2020.05 | 라이크코퍼레이션 | VR/AR 클라이언트 지원 |

## MYVR — XR 점검·정비 관리 솔루션

**기술 스택:** Unity 5 · C# · Firebase · MRTK

가우스랩에서 메타버스 콘텐츠 제작과 장비 조립 시뮬레이션 개발을 수행하고, MYVR 점검·정비 관리 솔루션의 메인 개발을 담당했습니다.

- 현장 정비 작업자와 사무직 관리자 사이의 업무 전달·정비·결과 보고를 연결
- 작업자의 당일 업무 목록 다운로드와 XR 디바이스 기반 실시간 데이터 동기화
- 작업 순서와 정비 가이드를 XR 화면에 시각화
- 작업 결과를 보고서로 정리해 관리자 디바이스에 전달

[![MYVR 소개 영상](https://i.ytimg.com/vi/MaduDOwtgIw/hqdefault.jpg)](https://www.youtube.com/watch?v=MaduDOwtgIw)

[YouTube에서 MYVR 영상 보기](https://www.youtube.com/watch?v=MaduDOwtgIw) · 웹 이력서에서는 페이지 안에서 재생할 수 있습니다.

## ⚡ 그 외

- **HoloLens 2 온도 모니터링 PoC** — FLIR 열화상 연동 실시간 시각화 + 자동 리포트·메일 발송을 **3일 만에** 현장 투입 수준으로 완성, 외주 납품
- **[Polymarket 스타일 예측시장 데모](https://github.com/lim12749/polymarket-demo)** — SIWE(EIP-4361) 지갑 인증 전 과정(nonce → MetaMask 서명 → 서버 검증 → JWT 세션) 직접 구현, wagmi·viem, 오더북·차트 트레이딩 UX
- **[keyword-auto-clicker](https://github.com/lim12749/keyword-auto-clicker)** — 부모님의 반복 웹 작업을 줄이려고 만든 크롬 확장 (요소 피커로 선택자 자동 생성, 엣지 트리거 클릭)
- **WebMecro** — 다중 탭 감시·자동 입력 데스크톱 유틸리티 (C#·Selenium, 비동기 폴링 + 취소 가능 감시 루프)

## 📫 Contact

- Email: **lim12749@gmail.com**
