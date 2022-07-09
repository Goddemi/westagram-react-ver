import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./reply.scss";
import ProfileImg from "../../components/profile_img";

const Reply = () => {
  let id = useParams();
  const navigate = useNavigate();
  const [replyInputValue, replyInputChange] = useState("");
  const [replyInputArray, replyInputArrayChange] = useState([]);

  const windowOutsideClickGoback = (e) => {
    e.target.className === "reply__page" && navigate(-1);
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
              e.preventDefault();
              const newReplyInputArray = [...replyInputArray];
              newReplyInputArray.push(replyInputValue);
              replyInputArrayChange(newReplyInputArray);
              replyInputChange("");
            }}
          >
            <i className="fa-regular fa-face-angry"></i>
            <input
              type="text"
              placeholder="댓글 달기..."
              value={replyInputValue}
              onChange={(e) => {
                replyInputChange(e.target.value);
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
  let [goodCount, goodCountChange] = useState([]);

  useEffect(() => {
    const goodCountbase = [...goodCount];
    goodCountbase.push(0);
    goodCountChange(goodCountbase);

    return () => {
      const goodCountbase = [...goodCount];
      goodCountbase.pop();
      goodCountChange(goodCountbase);
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
              <span className="likes__count--up">{goodCount[props.index]}</span>
              개
              {/* 이 컴포넌트가 생성될때마다 goodCount[0], goodCount[1]이 생겨난다. 라고 생각햇는데 직접 콘솔로그로 찍어보니 안나온다..
              이게 아니지만 이걸로 일단 외우자.  */}
            </span>
            <span>답글달기</span>
          </div>
        </div>
        <i
          className="fa-regular fa-heart heart__likes"
          onClick={() => {
            const newGoodCount = [...goodCount];
            newGoodCount[props.index] = goodCount[props.index] + 1;
            goodCountChange(newGoodCount);
            heartSwitchChange(false);
          }}
          style={{ display: heartSwitch === true ? "inline" : "none" }}
        ></i>
        <i
          className="fa-solid fa-heart heart__likes--active"
          onClick={() => {
            const newGoodCount = [...goodCount];
            newGoodCount[props.index] = goodCount[props.index] - 1;
            goodCountChange(newGoodCount);
            heartSwitchChange(true);
          }}
          style={{ display: heartSwitch === true ? "none" : "inline" }}
        ></i>
        <i
          className="fa-solid fa-xmark xmark"
          onClick={(e) => {
            e.target.parentElement.remove();
          }}
        ></i>
      </li>
    </>
  );
}

export default Reply;
