# 안녕하세요, 임기원입니다 👋

**문제를 발견하면 빠르게 실행 가능한 형태로 만들고, 직접 써 보며 고치는 풀스택 개발자입니다.**

Unity 클라이언트 개발 3년(팀장 경험)에서 출발해, 지금은 기획 → 설계 → 구현 → 배포 →
운영 검증까지 혼자 완결하는 웹 풀스택으로 영역을 넓혔습니다. AI를 개발 파트너로
적극 활용하되, AI가 낸 결과를 그대로 믿지 않고 **정량 검사와 검증 파이프라인을 함께
설계**하는 방식으로 일합니다.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat&logo=supabase&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=flat&logo=firebase&logoColor=white)
![C%23](https://img.shields.io/badge/C%23-512BD4?style=flat&logo=dotnet&logoColor=white)
![Unity](https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white)

---

## 🚀 만든 것들

### 미래라이프랩 — 맞춤 영양 구독 + AI 유전자 상담 플랫폼 · [miraelifelab.com](https://miraelifelab.com)

약사가 설계하고 약국에서 소분하는 맞춤 영양 구독 서비스. 문진 → 유전자 검사 →
맞춤 추천 → 구독 결제 → AI 상담 코칭 → 백오피스까지 **약 4주간 단독 개발** (76 페이지 · 89 API · 6만 줄).

- LLM에 사실 생성 권한을 주지 않는 RAG 구조로 환각 차단 — 근거는 코드가 검색·선별, 모델은 문장화만
- 검색 임계값을 실측 데이터로 튜닝 (재현율 25% → 100%), "LLM에 안 보냈다"까지 단언하는 테스트 하네스
- 건강기능식품 표시광고법 금지어·필수 고지를 배포 전 자동 검사하는 스크립트 구축
- `Next.js 15` `Supabase` `Gemini + Pinecone` `PortOne V2` `건강보험공단 연동`

### AI 사주 플랫폼 — 대화형 운세 리딩 서비스 (운영 중)

Claude API 기반 14챕터 개인화 사주 풀이. 기획·AI 파이프라인·결제·보안·배포 전 과정 단독 개발,
실사용자 배포 완료 (결제 라이선스 심사 최종 단계).

- 만세력·오행·대운 계산은 결정론 코드, LLM은 해석만 — 계산 환각 원천 차단
- 정규식 정량 QC 게이트 → LLM 루브릭 재검수 → 재생성 루프의 2단 품질 파이프라인, 실패는 DB 태그로 관측
- 프롬프트 캐싱으로 반복 호출 입력 비용 약 90% 절감, HMAC 서명 세션·서버측 결제 검증
- `Next.js` `Supabase` `Claude API` `PortOne` `Stripe`

### 약사맘돌봄 — 육아 돌봄·과외 정보 플랫폼 · [pharmomcare.com](https://www.pharmomcare.com)

부모/선생님/관리자 3-role 플랫폼 전체를 **약 20일간 단독 개발** (51 페이지 · 2만 줄 · 163 커밋).
대표의 기능 요청을 기획 → 배포까지 약 1주 사이클로 딜리버리.

- 직업안정법·의료법 제약을 문서가 아니라 스키마·보안 규칙·UI로 강제
- 서버 없는 아키텍처에서 21KB Firestore 보안 규칙 + 결정적 문서 ID로 데이터 무결성 확보
- 기질 6축·재능 8영역 규칙 기반 스코어링 & 부모-교사 궁합 매칭 알고리즘 설계
- `Next.js 14` `Firebase` `TypeScript strict`

### Polymarket 스타일 예측시장 데모 — Web3 학습 재현

급성장 중인 해외 서비스를 리버스 엔지니어링해 재현한 Web3 프론트엔드.
코인 트레이딩 경험을 프로덕트 감각으로 연결.

- SIWE(EIP-4361) 지갑 인증 전 과정 직접 구현 — nonce 발급 → MetaMask 서명 → 서버 검증 → JWT 세션
- 체인 자동 전환·미설치 폴백 등 5단계 연결 상태 머신, 오더북·차트·포트폴리오 트레이딩 UX
- `wagmi` `viem` `SIWE` `TanStack Query` `Tailwind v4`

---

## 💪 일하는 방식

- **속도**: 핵심 기능을 먼저 돌아가는 상태로 만들고, 사용자 입장 QA를 반복하며 완성도를 올립니다. HoloLens 2 열화상 모니터링 PoC를 3일 만에 현장 투입한 경험이 있습니다.
- **검증**: "된다"가 아니라 "안 되는 걸 안 한다"까지 증명합니다 — 데이터 누출 방지 단언, 규제 카피 자동 검사, 정량 임계값 튜닝.
- **도메인**: 개인사업·쇼핑몰 운영으로 생산·마케팅·판매·고객 대응을 직접 경험해, 기술과 사업 목적을 함께 봅니다.

## 📫 Contact

- Email: **lim12749@gmail.com**

<!--
※ 사주 플랫폼 라이브 URL이 공개 가능해지면 위 섹션 제목에 링크를 추가하세요.
※ 회사 리포(thenatureheal)는 비공개라 프로필에 고정할 수 없어, 라이브 서비스 링크로 대신 증명하는 구조입니다.
-->
