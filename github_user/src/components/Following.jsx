import React from 'react'

const Following = ({userFollowing, userData, handleLoadMore, pageIndex}) => {
    console.log(pageIndex);
    return (
        !userData.user.login ? null :
        <div className="card bg-light p-2 center-content user-card">
            {userFollowing.map((user, idx) =>{
                return (
                    <div key={idx}>
                        <img className="card-img-top avatar img-small m-1 " src={user.avatar_url} alt="profile pic"/>
                        <span className="ml-3">{user.login}</span>
                    </div>
                )
            })}
            <div className="d-flex flex-row align-items-center justify-content-between m-2">
                <div>{userFollowing.length}/{userData.user.following}</div>
                <div className="load-more" onClick={()=>handleLoadMore()}>Load More</div>
            </div>
        </div>
    )
}

export default Following
