# NOJI캘린더

가족 기념일·부동산 세금·주요 지출·회사 일정을 카테고리별·종합으로 보고 매월 체크하는 개인 캘린더.

- 화면: `index.html` (GitHub Pages)
- 로그인·저장: 구글 로그인(Firebase Authentication) + Cloud Firestore (`users/{DATA_UID}/events·checks·reviews`)
- 보안 규칙: `firestore.rules` — 소유자 구글 계정만 읽고 씀
- 음력 계산: korean-lunar-calendar (한국천문연구원 기준 데이터)
