import React, { useState } from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Following from "./pages/Following/Following";
import axios from "axios";

const initialState = {
  loading: false,
  user: {},
  error: "",
};

function App() {
  const [userData, setUserData] = useState(initialState);
  const [userFollowing, setUserFollowing] = useState([]);

  const fetchUserInfo = (username) => {
    const baseUrl = "https://api.github.com/users/";
    let path = baseUrl + username;
    console.log(path);
    setUserData({
      loading: true,
      user: {},
      error: "",
    });
    axios
      .get(path, {
        auth: {
          username: "cicimia2266",
          password: "5a4d29c4cc0745e35fb1d4dcd558df2ca967e23b",
        },
      })
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
  const fetchUserFollowing = (username)=>{
    const baseUrl = "https://api.github.com/users/";
    let path = baseUrl + username + "/following";
    axios
      .get(path, {
        auth: {
          username: "cicimia2266",
          password: "5a4d29c4cc0745e35fb1d4dcd558df2ca967e23b",
        },
      })
      .then((res) => {
        const userFollowing = res.data;
        setUserFollowing(userFollowing);
      })
  }


  return (
    <Router>
      <Header fetchUserInfo={fetchUserInfo} fetchUserFollowing={fetchUserFollowing}/>
      <Layout>
        <Switch>
          <Route
            path="/home"
            component={()=><Home userData={userData}/>} />
          <Route exact path="/following" component={()=><Following userFollowing={userFollowing}/>} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
