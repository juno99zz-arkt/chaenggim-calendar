// Firebase 웹 앱 설정 (공개돼도 되는 값. 데이터는 firestore.rules로 보호)
export const firebaseConfig = {
  apiKey: "AIzaSyBMGbpRX95UQ4u0f17IkVmQSLO_rtcWACo",
  authDomain: "chaenggim-calendar.firebaseapp.com",
  projectId: "chaenggim-calendar",
  appId: "1:949310719030:web:52e0d2d559f307b0a70497"
};

// 로그인 계정 (Firebase Authentication에 만든 사용자). 화면에서는 비밀번호만 묻는다.
export const LOGIN_EMAIL = "owner@chaenggim.app";
