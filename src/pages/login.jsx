import { auth } from "../firebase/firebase";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleFacebookLogin() {
    const provider = new FacebookAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    auth
      .signOut()
      .then(() => {
        setUserData(null); // Reset user data to null
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <span>구글 로그인</span>
      <button onClick={handleGoogleLogin}>Login</button>
      {userData ? userData.displayName : null}
      <hr />
      <span>페이스북 로그인</span>
      <button onClick={handleFacebookLogin}>Login</button>
      {userData ? userData.displayName : null}
      <hr />

      {userData ? (
        <div>
          <span>{userData.displayName}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
