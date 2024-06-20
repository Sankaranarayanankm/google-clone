import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./Search.css";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (event) => {
    event.preventDefault();
    // navigate to search page here
    history.push(`/${input}`);
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button type="button" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search__buttons search__buttonsHidden">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button type="button" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
