import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Following from "./pages/Following/Following";
import { userApi, followingApi } from "./api";

const initialState = {
  loading: false,
  user: {},
  error: "",
};

function App() {
  const [userData, setUserData] = useState(initialState);
  const [userFollowing, setUserFollowing] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  const fetchUserInfo = (username) => {
    setUserData({
      loading: true,
      user: {},
      error: "",
    });
    userApi(username)
      .then((res) => {
        const user = res.data;
        setUserData({
          loading: false,
          user: user,
          error: "",
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setUserData({
          loading: false,
          user: {},
          error: errorMsg,
        });
      });
  };
  const fetchUserFollowing = (username, pageIndex)=>{
    followingApi(username, pageIndex, 10)
      .then((res) => {
        const nextUsers = res.data;
        setUserFollowing(prevState=>[...prevState, ...nextUsers]);
      })
  }

  useEffect(() => {
    console.log(pageIndex);
    fetchUserFollowing(userData.user.login, pageIndex);
  }, [pageIndex])

  const handleLoadMore = () => {
    setPageIndex(prevState=>prevState+=1);
  }


  return (
    <Router>
      <Header fetchUserInfo={fetchUserInfo} fetchUserFollowing={fetchUserFollowing}/>
      <Layout>
        <Switch>
          <Route exact path="/following" component={()=><Following userFollowing={userFollowing} handleLoadMore={handleLoadMore} userData={userData} pageIndex={pageIndex}/>} />
          <Route path="/" component={()=><Home userData={userData} />} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
