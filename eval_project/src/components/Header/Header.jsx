import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";

const Header = ({fetchUserInfo, fetchUserFollowing}) => {
  const [input, setInput] = useState("");
  const history = useHistory();
  const handleInput = (e)=>{
    setInput(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (input !== "") {
      fetchUserInfo(input);
      fetchUserFollowing(input, 1);
      history.push(`/`)
    } else {
      alert("Please enter a username.")
    }
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="navbar-brand">
        GitHub Searcher
      </div>

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
        <button className="btn btn-outline-success my-2" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Header;