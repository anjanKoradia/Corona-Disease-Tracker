import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="copy_write">
        ©2021 All rights reseved | This templete is made with love by
        <Link
          className="github_link"
          to={{ pathname: "https://github.com/anjanKoradia" }}
          target="_blanck"
        >
        Anjan Koradia.
        </Link>
      </div>
    </div>
  );
}

export default Footer;
