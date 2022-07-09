import React from "react";
import { useNavigate } from "react-router-dom";
import "./main.scss";
import data from "../../assets/data/data";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="main__page">
      <nav>
        <div className="insta__logos">
          <span className="logo">Instagram</span>
        </div>

        <div className="search__bar">
          <input className="search"></input>
          <i className="fa-solid fa-magnifying-glass">검색</i>
          <div className="search__focus">검색</div>
        </div>

        <div className="nav__icons">
          <i className="fa-regular fa-compass"></i>
          <div className="heart">
            <i className="fa-regular fa-heart"></i>
            <div className="red__dot"></div>
          </div>
          <i className="fa-regular fa-user"></i>
        </div>
      </nav>

      {/* 구현해야함. Container */}

      <div className="search__list--container hidden">
        <div className="search__bar--list">
          <div className="search__list">
            <div className="search__img smaller__img"></div>
            <div className="search__content">
              <span className="search__id">kangchullee</span>
              <span>답글달기</span>
            </div>
          </div>
          <div className="search__list">
            <div className="search__img smaller__img"></div>
            <div className="search__content">
              <span className="search__id">wecode</span>
              <span>답글달기</span>
            </div>
          </div>
          <div className="search__list">
            <div className="search__img smaller__img"></div>
            <div className="search__content">
              <span className="search__id">test</span>
              <span>답글달기</span>
            </div>
          </div>
          <div className="search__list">
            <div className="search__img smaller__img"></div>
            <div className="search__content">
              <span className="search__id">okiedokie</span>
              <span>답글달기</span>
            </div>
          </div>
          <div className="search__list">
            <div className="search__img smaller__img"></div>
            <div className="search__content">
              <span className="search__id">monitor</span>
              <span>답글달기</span>
            </div>
          </div>
        </div>
      </div>

      {/* header */}

      <header>
        <div className="header__left">
          <div className="profile__img--border">
            <div className="profile__img--inside">
              <div className="profile__img"></div>
            </div>
          </div>
        </div>

        <div className="header__right">
          <div className="user__box">
            <div className="user__id">
              justinbieber
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <div className="function__boxes">
              <div className="message">메시지 보내기</div>
              <div className="follow">팔로우</div>
              <div className="check">
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <div className="user__capacity">
            <span>게시물 7,305</span>
            <span>팔로워 245M</span>
            <span>팔로우 712</span>
          </div>
          <div className="user__description">
            <span>Justin Bieber</span>
            <span>JUSTICE the album out now</span>
          </div>
        </div>
      </header>

      <div className="horizontal__line"></div>

      <div className="user__capacity--query">
        <UserCapacity type={"게시물"} number={(7, 305)} />
        <UserCapacity type={"팔로워"} number={"245M"} />
        <UserCapacity type={"팔로우"} number={712} />
      </div>

      <div className="horizontal__line"></div>

      <main className="main__main">
        <div className="menu">
          <span>
            <i className="fa-solid fa-table-cells-large"></i>
            게시물
          </span>
          <span>
            <i className="fa-regular fa-circle-play"></i>
            동영상
          </span>
          <span>
            <i className="fa-regular fa-hashtag"></i>
            태그됨
          </span>
        </div>

        <div className="postings">
          {data.map((element, i) => {
            return <ImgAdding navigate={navigate} i={i} id={element.id} />;
          })}
        </div>
      </main>

      <div className="horizontal__line"></div>
    </div>
  );
};

function ImgAdding(props) {
  return (
    <img
      className="post"
      alt="pictures"
      src={process.env.PUBLIC_URL + "imgs/" + props.i + ".jpg"}
      onClick={() => {
        props.navigate("./reply/" + props.id);
      }}
    />
  );
}

function UserCapacity(props) {
  return (
    <div className="user__capacity--list">
      <span>{props.type}</span>
      <span>{props.number}</span>
    </div>
  );
}

export default Main;
