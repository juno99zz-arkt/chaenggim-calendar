# 챙김 캘린더

가족 기념일·부동산 세금·주요 지출·회사 일정을 카테고리별·종합으로 보고 매월 체크하는 개인 캘린더.

- 화면: `index.html` (GitHub Pages)
- 로그인·저장: Firebase Authentication + Cloud Firestore (`users/{uid}/events·checks·reviews`)
- 보안 규칙: `firestore.rules` — 로그인한 본인만 자기 데이터를 읽고 씀
- 음력 계산: korean-lunar-calendar (한국천문연구원 기준 데이터)
