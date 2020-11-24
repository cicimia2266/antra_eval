import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";

const Header = ({fetchUserInfo, fetchUserFollowing}) => {
    let history = useHistory();
    const [input, setInput] = useState("");
    const handleInput = (e)=>{
        setInput(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (input !== ""){
            fetchUserInfo(input);
            fetchUserFollowing(input, 1);
            history.push("/")
        }
    }
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">Github Searcher</div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/following" className="nav-link">Following</Link>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Github User..."
          aria-label="Search"
          onChange={handleInput}

        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Header;
