# 안녕하세요, 임기원입니다 👋

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
![C%23](https://img.shields.io/badge/C%23-512BD4?style=flat&logo=dotnet&logoColor=white)
![Unity](https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white)

---

## 🌐 만들고 운영 중인 서비스

전부 기획부터 배포까지 단독 개발한 라이브 서비스입니다.

| 서비스 | 무엇 | 스택 |
|---|---|---|
| [운명서재](https://www.unmyeongseojae.com/) | AI 사주 리딩 플랫폼 (직접 창업·운영) | Next.js · Supabase · Claude API · PortOne |
| [미래라이프랩](https://miraelifelab.com/) | 맞춤 영양 구독 + AI 유전자 상담 | Next.js · Supabase · Gemini + Pinecone |
| [약사맘돌봄](https://www.pharmomcare.com/) | 육아 돌봄·과외 정보 플랫폼 | Next.js · Firebase |
| [하랑DNC](https://www.harangdnc.com/) | 기업 홈페이지 (외주) | Next.js · Supabase |
| [Last-Nine](https://last-nine.co.kr/) | 기업 사이트 + 내장 백오피스 (외주) | Next.js · AWS |

### 운명서재 — AI 사주 리딩 서비스

- Claude API(Haiku/Sonnet)로 14챕터 개인화 풀이 생성. 만세력·오행·대운 계산은
  `lunar-javascript` 기반 결정론 코드가 전담하고 **LLM에는 해석만 위임** — 계산 환각 원천 차단
- **2단 품질 검수 파이프라인 자체 구축**: 정규식 정량 QC 게이트(한자 밀도·한글 비율
  임계값) → Sonnet 루브릭 재검수 → 지적사항 주입 재생성 → 실패는 DB 태그로 관측
- 프롬프트 캐싱(`cache_control`)으로 반복 호출 입력 비용 약 90% 절감
- HMAC-SHA256 서명 세션 쿠키(`timingSafeEqual`), 서버측 결제 금액 재검증,
  결제-콘텐츠 이행(entitlement) 서버 확인
- 실사용자 배포 완료 · 한국 결제 라이선스 카드사 심사 최종 단계

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

## 💼 경력

| 기간 | 회사 | 역할 |
|---|---|---|
| 2026.06 – 현재 | 에피젠 (디지털 헬스 스타트업) | 개발 리드 — 미래라이프랩·약사맘돌봄 풀스택 |
| 2024.11 – 현재 | 엘데브 L'dev (개인사업) | CEO — 외주 개발 수주·운영 |
| 2020.11 – 2024.01 | 가우스랩 | Unity 클라이언트 (팀장) — 전투·UI·Photon 멀티플레이어 |
| 2019.10 – 2020.05 | 라이크코퍼레이션 | VR/AR 클라이언트 지원 |

## ⚡ 그 외

- **HoloLens 2 온도 모니터링 PoC** — FLIR 열화상 연동 실시간 시각화 + 자동 리포트·메일 발송을 **3일 만에** 현장 투입 수준으로 완성, 외주 납품
- **[Polymarket 스타일 예측시장 데모](https://github.com/lim12749/polymarket-demo)** — SIWE(EIP-4361) 지갑 인증 전 과정(nonce → MetaMask 서명 → 서버 검증 → JWT 세션) 직접 구현, wagmi·viem, 오더북·차트 트레이딩 UX
- **[keyword-auto-clicker](https://github.com/lim12749/keyword-auto-clicker)** — 부모님의 반복 웹 작업을 줄이려고 만든 크롬 확장 (요소 피커로 선택자 자동 생성, 엣지 트리거 클릭)
- **WebMecro** — 다중 탭 감시·자동 입력 데스크톱 유틸리티 (C#·Selenium, 비동기 폴링 + 취소 가능 감시 루프)

## 📫 Contact

- Email: **lim12749@gmail.com**
