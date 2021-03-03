import React, { useState } from "react";
import "./post.css";

function Post({
  username,
  location,
  imagethumb,
  gender,
  phone,
  email,
  imagelarge
}) {
  const [imageStatus, setImageStatus] = useState(true);

  return (
    <div className="details">
      <div className="card">
            <img
        src={imageStatus ? imagethumb : imagelarge}
        alt=""
        onClick={() => setImageStatus(!imageStatus)}
      />
      <div className="info">
      <p>{username}</p>
      <p>{gender}</p>

      <p>{location}</p>
      <p>{email}</p>
      <p>{phone}</p>
      </div>
    </div>
    </div>
  );
}

export default Post;
