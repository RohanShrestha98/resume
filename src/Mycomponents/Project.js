import React, { useEffect, useState } from "react";
import description from "./description.json";
import loadingImg from "../assets/loading.gif";

export default function Project(props) {
  const [liked, setliked] = useState(false);
  const clickLike = () => {
    if (liked === false) {
      setliked(true);
    } else {
      setliked(false);
    }
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div>
          {description.project.map((project, i) => (
            <div
              className="twittedTweet"
              style={
                props.lightStyle === "white"
                  ? props.contentlight
                  : props.contentdark
              }
            >
              <div className="NamePictureDate">
                <div className="NamePicture">
                  <div className="profilePicUser">
                    <p>R</p>
                  </div>
                  <div>
                    <p>Rohan Shrestha</p>
                    <p
                      style={{ fontSize: "12px", fontWeight: "400" }}
                    >{`${project.time}`}</p>
                  </div>
                </div>
                <p>{`${project.date}`}</p>
              </div>
              <div className="tweetContent ">
                <p>{`${project.desc}`}</p>
                <a href={`${project.link}`} target="_blank" rel="noreferrer">
                  <img src={`${project.image}`} alt="" />
                </a>
              </div>
              <hr />
              <div className="likeComment">
                <div className="liked" onClick={clickLike}>
                  <i
                    style={
                      props.lightStyle === "white"
                        ? props.contentlight
                        : props.contentdark
                    }
                    class="fa-solid fa-thumbs-up"
                  ></i>
                  <p
                    style={
                      props.lightStyle === "white"
                        ? props.contentlight
                        : props.contentdark
                    }
                  >
                    {liked === true ? "Liked" : "Like"}
                  </p>
                </div>
                <div className="liked">
                  <i class="fa-regular fa-comment-dots"></i>
                  <p>Comment</p>
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="page_loader">
          <img className="loader" src={loadingImg} alt="" />
        </div>
      )}
    </>
  );
}
