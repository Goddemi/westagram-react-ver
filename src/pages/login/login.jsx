import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./login.scss";

const Login = () => {
  const regEx_email =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const [loginId, setLoginId] = useState("");
  const [loginPwd, setLoginPwd] = useState("");
  const navigate = useNavigate();
  const [imgFadeInOutBtn, setImgFadeInOutBtn] = useState(true);

  function imgFadeInOut() {
    imgFadeInOutBtn === true
      ? setImgFadeInOutBtn(() => {
          return false;
        })
      : setImgFadeInOutBtn(() => {
          return true;
        });
  }

  useInterval(() => {
    imgFadeInOut();
  }, 3000);

  return (
    <>
      <div className="login__page">
        <main className="login__main">
          <section className="main__section">
            <section className="left__section">
              <div className="img__backside"></div>
              <div
                className={`img__willChange ${
                  imgFadeInOutBtn === true ? "hidden" : " "
                } `}
              ></div>
              <div
                className={`img__willChange2 ${
                  imgFadeInOutBtn === true ? " " : "hidden"
                }`}
              ></div>
              <div className="img__frontFrame"></div>
            </section>

            <section className="right__section">
              <div className="login__container">
                <div className="logo">Instagram</div>

                <form className="login__form">
                  <input
                    type="text"
                    className="id__input"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    onChange={(e) => {
                      setLoginId(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    className="pwd__input"
                    placeholder="비밀번호"
                    onChange={(e) => {
                      setLoginPwd(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    style={{
                      opacity: loginId.length > 3 && loginPwd.length > 3 && 1,
                    }}
                    className="login__btn"
                    onClick={() => {
                      regEx_email.test(loginId) && loginPwd.length > 5
                        ? navigate("/main")
                        : alert("로그인 정보 입력이 잘못되었습니다.");
                    }}
                  >
                    로그인
                  </button>
                </form>

                <div className="bar">
                  <hr color="#fafafa"></hr>
                  <span>또는</span>
                  <hr color="#fafafa"></hr>
                </div>
                <div className="login__option">
                  <div className="login__facebook">
                    <i className="fa-brands fa-facebook-square"></i>
                    Facebook으로 로그인
                  </div>
                  <div className="forget__password">비밀번호를 잊으셨나요?</div>
                </div>
              </div>

              <div className="box__signin">
                계정이 없으신가요?
                <a href="https://www.instagram.com/accounts/emailsignup/">
                  가입하기
                </a>
              </div>

              <div className="box__download">
                <span>앱을 다운로드 하세요</span>

                <div className="download__twoboxes">
                  <div className="download__apple">
                    <i className="fa-brands fa-apple"></i>
                    Apple 다운로드
                  </div>
                  <div className="download__android">
                    <i className="fa-brands fa-google-play"></i>
                    Androi 다운로드
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>

        <footer>
          <div className="information">
            <div className="line__first">
              <span>Meta</span>
              <span>소개</span>
              <span>블로그</span>
              <span>채용 정보</span>
              <span>도움말</span>
              <span>API</span>
              <span>개인정보처리방침</span>
              <span>약관</span>
            </div>
            <div className="line__second">
              <span>댄스</span>
              <span>식음료</span>
              <span>음악</span>
              <span>시각예쑬</span>
              <span>오예~</span>
            </div>
          </div>
          <div className="line__last">
            <span className="language">
              한국어
              <i className="fa-solid fa-angle-down"></i>
            </span>
            <span className="copyrights">@ 2022 westa! in wecode</span>
          </div>
        </footer>
      </div>
    </>
  );
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export default Login;
