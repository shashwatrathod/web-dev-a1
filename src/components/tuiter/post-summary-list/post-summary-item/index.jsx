import React from "react";
import "./post-summary-item.css";

//TODO: Fix links
const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "../../images/react.png",
  },
}) => {
  return (
    <>
      <a
        href="#"
        className="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center"
      >
        <div className="d-flex flex-column">
          <div className="text-muted">{post.topic}</div>
          <div>
            <span className="fw-bold">{post.userName} </span>
            <i className="fa-solid fa-circle-check"></i>
            {post.time ? (
              <>
                <span className="text-muted"> ~ </span>
                <span className="text-muted">{post.time}</span>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="fw-bold">{post.title}</div>
          {post.tweets ? (
            <>
              <div className="text-muted">{post.tweets} Tuits</div>
            </>
          ) : (
            <></>
          )}
        </div>
        <img
          className="post-img rounded"
          src={post.image}
          alt={post.userName}
        />
      </a>
    </>
  );
};

export default PostSummaryItem;
