import React from "react";
import warhornTitleLeft from "./WarhornTitleLeft.jpg";
import warhornTitleRight from "./WarhornTitleRight.jpg";

function Header(){
  return (
    <body>
      <div class="title">
      <div class= "warhornTitleLeft"><img src={warhornTitleLeft} alt="WarhornTitleLeft" width="300px" height="110px"></img></div>
      <div class= "warhornTitleRight"><img src={warhornTitleRight} alt="WarhornTitleRight" width="300px" height="110px"></img></div>
    <div class="header"><h1>Warhorn!</h1> 
    <div class="setup"><h2>An Automated Initiative Roller</h2></div></div>
    
      </div>
    </body>
  );
}

export default Header;