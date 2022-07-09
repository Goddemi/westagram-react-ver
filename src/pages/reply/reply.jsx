import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./reply.scss";
import ProfileImg from "../../components/profile_img";

const Reply = () => {
  let id = useParams();
  const navigate = useNavigate();
  const [replyInputValue, setReplyInput] = useState("");
  const [replyInputArray, setReplyInputArray] = useState([]);

  const windowOutsideClickGoback = (e) => {
    e.target.className === "reply__page" && navigate(-1);
  };

  const addReplyInput = (e) => {
    e.preventDefault();
    const newReplyInputArray = [...replyInputArray];
    newReplyInputArray.push(replyInputValue);
    setReplyInputArray(newReplyInputArray);
    setReplyInput("");
  };

  return (
    <div
      className="reply__page"
      onClick={(e) => {
        windowOutsideClickGoback(e);
      }}
    >
      <div className="section">
        <section
          className="section__left"
          style={{
            backgroundImage: `url(/imgs/${id[0]}.jpg)`,
          }}
        ></section>

        <section className="section__right">
          <div className="user__bar">
            <ProfileImg content={"팔로우"} />
            <div className="horizontal__line"></div>
            <ProfileImg content={"Have a nice day"} />
          </div>

          {/* 여기 */}

          <ul className="reply__window">
            {replyInputArray.map((data, i) => {
              return <SetReply data={data} index={i} />;
            })}
          </ul>

          <div className="horizontal__line"></div>

          <div className="function__bar">
            <div className="functions">
              <div className="function__left">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-regular fa-paper-plane"></i>
              </div>

              <div className="function__right">
                <i className="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <div className="likes__count">좋아요 2개</div>
            <div className="date">오늘 날짜</div>
          </div>
          <div className="horizontal__line"></div>
          <form
            className="reply__form"
            onSubmit={(e) => {
              addReplyInput(e);
            }}
          >
            <i className="fa-regular fa-face-angry"></i>
            <input
              type="text"
              placeholder="댓글 달기..."
              value={replyInputValue}
              onChange={(e) => {
                setReplyInput(e.target.value);
              }}
            />
            <button>게시</button>
          </form>
        </section>
      </div>
    </div>
  );
};

function SetReply(props) {
  let [heartSwitch, heartSwitchChange] = useState(true);
  let [goodCountArray, setGoodCountArray] = useState([]);

  const goodCountArrayPushing = () => {
    const goodCountbase = [...goodCountArray];
    goodCountbase.push(0);
    setGoodCountArray(goodCountbase);
  };
  const goodCountArrayPoping = () => {
    const goodCountbase = [...goodCountArray];
    goodCountbase.pop();
    setGoodCountArray(goodCountbase);
  };
  const goodCountPlusMinus = (number) => {
    const newGoodCount = [...goodCountArray];
    newGoodCount[props.index] = goodCountArray[props.index] + number;
    setGoodCountArray(newGoodCount);
  };
  const removeReply = (e) => {
    e.target.parentElement.remove();
  };

  useEffect(() => {
    goodCountArrayPushing();
    return () => {
      goodCountArrayPoping();
    };
  });

  return (
    <>
      <li className="reply__list">
        <div className="my__img smaller__border"></div>
        <div className="my__content">
          <div className="my__info">
            <span className="my__id">kangchullee</span>
            <span className="my__talk"> {props.data} </span>
          </div>
          <div className="my__status">
            <span className="my__likes">
              좋아요
              <span className="likes__count--up">
                &nbsp;{goodCountArray[props.index]}
              </span>
              개
            </span>
            <span>답글달기</span>
          </div>
        </div>
        <i
          className="heart__button fa-regular fa-heart"
          onClick={() => {
            goodCountPlusMinus(1);
            heartSwitchChange(false);
          }}
          style={{ display: heartSwitch === true ? "inline" : "none" }}
        ></i>
        <i
          className="heart__button--active fa-solid fa-heart"
          onClick={() => {
            goodCountPlusMinus(-1);
            heartSwitchChange(true);
          }}
          style={{ display: heartSwitch === true ? "none" : "inline" }}
        ></i>
        <i
          className="xmark fa-solid fa-xmark"
          onClick={(e) => {
            removeReply(e);
          }}
        ></i>
      </li>
    </>
  );
}

export default Reply;
