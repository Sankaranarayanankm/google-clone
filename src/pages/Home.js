import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";

const Home = () => {
  return (
    <div className="hom">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>{" "}
        <div className="home__headerRight">
          <Link to="/gmail.com">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2012x1341/828x552/filters:focal(1006x670:1007x671):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/15483559/google2.0.0.1441125613.jpg"
          alt="google logo"
        />
      </div>
    </div>
  );
};

export default Home;
