function Post({ photo, name, text, post, likes }) {
  return (
    <div className="post">
      <div className="profile">
        <div className="profile-img">
          <img src={photo} alt={name} className="img" />
        </div>
        <div className="user">
          <span className="name">{name}</span>
          <p className="time">5m</p>
        </div>
        <div>
          <button className="btn">
            <img
              src="https://cdn.icon-icons.com/icons2/2348/PNG/64/more_menu_icon_142985.png"
              alt="menu"
              className="menu"
            />
          </button>
        </div>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
      <div>
        <img src={post} alt="imagem" className="post-img" />
      </div>
      <div className="share">
        <div className="comments">
          <img
            src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/heart-icon.png"
            alt="heart"
            className="heart"
          />
          Comments
        </div>
        <button className="btn">Share</button>
      </div>
      <div className="likes">
        <p>
          Liked by: <span style={{fontWeight: "bold"}}>{[likes.join(" & ")]}</span>
        </p>
      </div>
    </div>
  );
}

export default Post;
