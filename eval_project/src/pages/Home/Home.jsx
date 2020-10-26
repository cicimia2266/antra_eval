import React from "react";
import "./Home.scss"


const Home = ({userData}) => {
    console.log(userData);
    return !userData.user.login ? (<div>Please search for a github user</div>):
   userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>Cannot find user</h2>
  ) : (
    <div className="card bg-light p-2 align-items-center text-center">
      <div className="img-container m-2">
        <img
          className="card-img-top avatar"
          src={userData.user.avatar_url}
          alt="profile_pic"
        />
      </div>
      <div className="card-body">
        <p className="card-text">{userData.user.login}</p>
        <p className="card-text">Github User</p>
        <p className="card-text">{userData.user.followers} followers</p>
      </div>
    </div>
  );
};



export default Home;

