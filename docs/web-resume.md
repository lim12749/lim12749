# 웹 이력서

이 저장소의 루트는 Vercel에 연결할 수 있는 React · TypeScript · Vite 프로젝트입니다. GitHub 프로필 README는 그대로 유지합니다.

## 실행과 빌드

```sh
npm ci
npm run dev
npm run build
npm run preview
```

빌드는 TypeScript 검사 후 `dist/`를 생성합니다. 환경 변수나 별도 서버는 필요하지 않습니다.

## Vercel 연결

Vercel에서 `lim12749/lim12749` 저장소를 프로젝트로 가져오고 루트 디렉터리를 저장소 루트로 지정합니다. `vercel.json`에 다음 설정을 포함했습니다.

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

GitHub에 코드를 올리는 것과 Vercel 배포는 별개입니다. 최초 연결 후에는 해당 프로젝트의 배포 설정에 따라 변경 사항이 배포됩니다. 실제 공개 주소가 발급되면 루트 README에 추가합니다.

## 수정 위치

- `src/data/resume.ts`: 자기소개, 프로젝트, 경력, 기술, 교육
- `src/App.tsx`: 화면 구성, 소개 문구, 연락처
- `src/index.css`: 반응형 및 인쇄 스타일
- `자기소개-기본형.md`: 다른 지원서에도 활용 가능한 자기소개 원문
- `DESIGN.md`: 디자인·콘텐츠 기준

자기소개를 바꾸면 데이터 파일과 Markdown 원문을 함께 수정합니다. 웹 이력서는 제공된 2026.08.05 PDF를 기준으로 구성했고, 공개 이메일은 기존 GitHub 프로필에서 반영했습니다. 기존 README에만 있는 별도 사이드 프로젝트 소개는 유지했습니다.

상단 ‘인쇄 / PDF 저장’ 버튼으로 브라우저의 인쇄 대화상자를 열 수 있습니다. 이메일 링크는 사용자의 기본 메일 앱으로 연결됩니다.
