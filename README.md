# ComponentHub


https://ui-component-hub3.vercel.app/

현대적인 UI 컴포넌트 라이브러리 문서 사이트입니다.

## 🎨 주요 기능

- ✨ **다크/라이트 테마** - 완벽한 테마 전환 시스템
- 🧩 **재사용 가능한 컴포넌트** - Button, Input, Card 등
- 📱 **반응형 디자인** - 모바일부터 데스크톱까지
- 💻 **TypeScript 지원** - 완전한 타입 안정성
- 🎯 **라이브 미리보기** - 실시간 컴포넌트 확인
- 📋 **코드 복사** - 원클릭 코드 복사 기능



## 📁 프로젝트 구조

```
src/
├── components/
│   ├── layout/          # Header, Sidebar, MainContent
│   ├── ui/              # Button, Input, Card 등 UI 컴포넌트
│   └── docs/            # 문서 관련 컴포넌트
├── pages/               # 각 페이지 컴포넌트
├── styles/              # CSS 파일
├── hooks/               # React Hooks
├── utils/               # 유틸리티 함수
└── data/                # 네비게이션 데이터
```

## 🎯 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링
- **React Router** - 라우팅
- **Lucide React** - 아이콘

## 📚 컴포넌트

### Button
- Variants: primary, secondary, ghost
- Sizes: sm, md, lg
- States: default, hover, active, disabled

### Input
- Label 지원
- Error 상태
- Helper text
- Disabled 상태

### Card
- Hover 효과
- Shadow 스타일
- 유연한 콘텐츠

## 🎨 디자인 시스템

모든 색상은 CSS 변수를 통해 관리되며, 다크/라이트 테마를 자동으로 지원합니다.

### 색상 변수

```css
--bg-primary
--bg-secondary
--text-primary
--text-secondary
--border-primary
--brand-primary
```

## 📖 문서

각 컴포넌트 페이지에서 다음을 확인할 수 있습니다:

- 라이브 미리보기
- 코드 예제 (React, HTML)
- Props API 문서
- 베스트 프랙티스

## 🤝 기여

이 프로젝트는 교육 목적으로 만들어졌습니다.

## 📄 라이선스

ISC License

---

**Made with ❤️ using React + TypeScript + Vite**

