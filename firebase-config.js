// Firebase 웹 앱 설정 (공개돼도 되는 값. 데이터는 firestore.rules로 보호)
export const firebaseConfig = {
  apiKey: "AIzaSyBMGbpRX95UQ4u0f17IkVmQSLO_rtcWACo",
  authDomain: "chaenggim-calendar.firebaseapp.com",
  projectId: "chaenggim-calendar",
  appId: "1:949310719030:web:52e0d2d559f307b0a70497"
};

// 들어올 수 있는 구글 계정 (firestore.rules와 같은 값)
export const OWNER_EMAIL = "juno99zz@gmail.com";
// 일정 데이터가 저장된 경로 users/{DATA_UID}
export const DATA_UID = "hsglp2oy1jexIRllxsOeC8Fb2582";
