import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./Search.css";
import { Button } from "@mui/material";
// import { Input } from "@mui/material";
const Search = () => {
  const [input, setInput] = useState("");
  const search = (event) => {
    event.preventDefault();
    console.log(input);
  };
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(event) => setInput(event.target.value)} />
        <MicIcon />
      </div>
      <div className="search__buttons">
        <Button onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
};

export default Search;
