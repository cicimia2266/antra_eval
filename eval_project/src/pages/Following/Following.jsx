import React from "react";
import "./Following.scss";

const Following = ({ userFollowing, handleLoadMore, userData, pageIndex }) => {
  return (
    <div className="card bg-light p-2 result-card center-content">
      {userFollowing.map((user, idx) => {
        return (
          <div className="flex-row" key={idx}>
            <div>
              <img
                className="card-img-top avatar img-one ml-3 mr-3 mb-1"
                src={user.avatar_url}
                alt="profile_pic"
              />{" "}
              <span>{user.login}</span>
            </div>
          </div>
        );
      })}
      <div className="d-flex flex-row align-items-center justify-content-between m-3">
        <div>{pageIndex * 10}/{userData.user.following}</div>
        <div onClick={()=>{handleLoadMore()}}> Load More</div>
      </div>
    </div>
  );
};

export default Following;

