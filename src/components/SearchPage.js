import React from "react";
import "./SearchPage.css";
import { useParams } from "react-router-dom";
import useGoogleSearch from "../Custom Hooks/useGoogleSearch";
// import response from "../response";
import { Link } from "react-router-dom";
import logo from "../assets/google-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@mui/icons-material";

const SearchPage = () => {
  const params = useParams();
  const { searchId } = params;
  // LIVE API CALL
  const { data } = useGoogleSearch(searchId);
  // MOCK API CALL 
  // const data = response;

  // console.log(data.items.displayLink);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img className="searchPage__logo" src={logo} alt="google logo" />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <Description />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <Image />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOffer />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <Room />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVert />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage__optionRight">
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {searchId && (
        <div className="searchPage__results">
          {/* adding how many results are displayed para  */}
          <p className="searchPage__resultCount">
            {/* by using the below method we can make sure if the data is not there then it wont show and error instead it will return undefined */}
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for{" "}
            {searchId}
          </p>
          {/* adding the list of result links  */}

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0].src&&(
                  <img 
                  className="searchPage__resultImage"
                  src={item.pagemap?.cse_image[0].src}
                  alt={item.title}
                />
                )}
                
                {item.displayLink}</a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title} </h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
