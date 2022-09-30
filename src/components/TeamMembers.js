require("dotenv").config();
import React, { useEffect, useState } from "react";
import axios from "axios";
import { defaultImage } from "../assets/default-image";

const TeamMembers = () => {
  const [teamData, setTeamData] = useState(null);
  useEffect(() => {
    async function getMembers() {
      try {
        const data = await axios.get(`${process.env.REACT_APP_URL}/team`);
        setTeamData(data);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    }

    getMembers();
  }, []);

  return (
    <div>
      <div>
        {teamData && `${teamData.data[19].base64_image}` ? (
          <img src={`${teamData.data[19].base64_image}`} />
        ) : (
          <div>
            <img src={defaultImage} />
            <a
              href="https://www.flaticon.com/free-icons/account"
              title="account icons"
            >
              Account icons created by srip - Flaticon
            </a>
          </div>
        )}
        <div>
          <h1></h1>
          <h4></h4>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
