import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const linkList = ["/", "/sign-in", "/team"];
  const linkName = ["Home", "Sign In", "Team"];
  const location = useLocation();

  return (
    <div className="navigation-bar">
      {linkList.map((link, index) => {
        if (link !== location.pathname) {
          return <Link key={index} to={link}>{`${linkName[index]}`}</Link>;
        }
      })}
    </div>
  );
};

export default Navigation;
