import React from "react";
import "./Home.scss"


const Home = ({userData}) => {

    return userData.error ? (
      <h2 className="center-content">Cannot find user</h2>
    ) : !userData.user.login ? (<h2 className="center-content">Please search for a github user</h2>):
   userData.loading ? (
    <h2 className="center-content">Loading</h2>
  ) :  (
    <div className="card bg-light p-2 align-items-center text-center result-card center-content">
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

