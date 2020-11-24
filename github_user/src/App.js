import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";
import Header from "./components/Header"
import Following from './components/Following';
import Home from './components/Home';
import {userAPI, followingAPI} from './api'

const initialState = {
  user: {},
  error: "",
}

function App() {
  const [userData, setUserData] = useState(initialState);
  const [userFollowing, setUserFollowing] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  const fetchUserInfo = (username) =>{
    userAPI(username)
    .then(res=>{
      const user = res.data;
      console.log(user);
      setUserData({
        user: user,
        error: "",
      })
    })
    .catch(err=>{
      const errMessage = err.message;
      setUserData({
        user: {},
        error: errMessage,
      })
    })
  }

  const fetchUserFollowing = (username, pageIndex) => {
    followingAPI(username, pageIndex, 10)
    .then(res=>{
      const nextUsers = res.data;
      console.log(nextUsers);
      setUserFollowing(prevState=>[...prevState, ...nextUsers])
    })
  }

  const handleLoadMore = () => {
    setPageIndex(prevState=> prevState+=1);
  }
  
  useEffect(()=>{
    console.log(pageIndex);
    fetchUserFollowing(userData.user.login, pageIndex)
  },[pageIndex])


  return (
    <Router>
      <Header fetchUserInfo={fetchUserInfo} fetchUserFollowing={fetchUserFollowing}></Header>
      <Switch>
        <Route exact path="/following" component={()=><Following userFollowing={userFollowing} userData={userData} handleLoadMore={handleLoadMore} pageIndex={pageIndex} />}  />
        <Route path="/" component={()=><Home userData={userData}/>} />
      </Switch>
    </Router>
  );
}

export default App;
