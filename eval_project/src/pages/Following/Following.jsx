import React from "react";
import "./Following.scss"

const Following = ({ userFollowing }) => {
  console.log(userFollowing);
  return (
    <div className="card bg-light p-2">
      {userFollowing.map((user) => {
        return (
          <div className="flex-row">
            <div>
              <img
                className="card-img-top avatar img-one"
                src={user.avatar_url}
                alt="profile_pic"
              /> <span>{user.login}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Following;
