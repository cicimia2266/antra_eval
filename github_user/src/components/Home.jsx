import React from 'react'

const Home = ({userData}) => {
    return ( userData.error ? 
        <h2 className="center-content">User not found!</h2> : !userData.user.login ? 
        <h2 className="center-content">Please enter a Github username</h2>:
        (
            <div className="card bg-light p-2 text-center user-card center-content">
                <div className="mt-3">
                    <img className="image-container" src={userData.user.avatar_url} alt="profile pic"/>
                </div>
                <div className="card-body">
                    <p className="card-text">{userData.user.login}</p>
                    <p className="card-text">Github User</p>
                    <p className="card-text">{userData.user.followers} Followers</p>
                </div>
            </div>
        )
        
    )
}

export default Home
