import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const linkList = ["/", "/sign-in"];
  const linkName = ["Home", "Sign In"];
  const location = useLocation();

  console.log("LOCATION: ", location);
  return (
    <div className="navigation-bar">
      {linkList.map((link, index) => {
        if (link !== location.pathname) {
          return <Link to={link}>{`${linkName[index]}`}</Link>;
        }
      })}
    </div>
  );
};

export default Navigation;
