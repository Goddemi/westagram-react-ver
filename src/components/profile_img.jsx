const ProfileImg = (props) => {
  return (
    <div className="user__id">
      <div className="profile__img--border smaller__border">
        <div className="profile__img--inside smaller__inside">
          <div className="profile__img smaller__img"></div>
        </div>
      </div>
      <span>justinbieber</span>
      <i className="fa-solid fa-circle-check"></i>
      <span>{props.content}</span>
    </div>
  );
};

export default ProfileImg;
