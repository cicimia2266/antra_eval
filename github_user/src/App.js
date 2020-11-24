import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";
import Header from "./components/Header"
import Following from './components/Following';
import Home from './components/Home';
import {userAPI} from './api'

const initialState = {
  user: {},
  error: "",
}

function App() {
  const [userData, setUserData] = useState(initialState);
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

  return (
    <Router>
      <Header fetchUserInfo={fetchUserInfo}></Header>
      <Switch>
        <Route exact path="following" component={()=><Following />} />
        <Route path="/" component={()=><Home userData={userData}/>} />
      </Switch>
    </Router>
  );
}

export default App;
