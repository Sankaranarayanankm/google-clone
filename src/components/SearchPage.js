import React from "react";
import "./SearchPage.css";
import { useParams } from "react-router-dom";
import useGoogleSearch from "../Custom Hooks/useGoogleSearch";
import response from "../response";
import { Link } from "react-router-dom";
import logo from "../assets/google-logo.png";
import Search from "./Search";

const SearchPage = () => {
  const params = useParams();
  const { searchId } = params;
  // LIVE API CALL
  // const { data } = useGoogleSearch(searchId);
  const data = response;
  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img className="searchPage__logo" src={logo} alt="google logo" />
        </Link>
        <div className="searchPage__headerBody">
        <Search hideButtons />
      </div>
      </div>
      
      <div className="searchPage__results"></div>
    </div>
  );
};

export default SearchPage;
