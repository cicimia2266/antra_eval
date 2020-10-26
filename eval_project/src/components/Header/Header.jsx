import React, {useState} from "react";
import { Link } from "react-router-dom";

const Header = ({fetchUserInfo, fetchUserFollowing}) => {
  const [input, setInput] = useState("");
  const handleInput = (e)=>{
    setInput(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (input !== "") {
      fetchUserInfo(input);
      fetchUserFollowing(input);
    } else {
      alert("Please enter a username.")
    }
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link className="navbar-brand" to="/">
        GitHub Searcher
      </Link>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/following">
            FOLLOWING
          </Link>
        </li>
      </ul>
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Github User..."
          onChange = {handleInput}
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Header;