import React, { useState, useEffect } from 'react';
import { getProfile } from "../api";

const Profile = (props) => {
  let token = "";
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    token = localStorage.getItem("token");
    async function getMyInfo() {
      const myReturnedInfo = await getProfile(token);
      console.log(myReturnedInfo, "returned info from api call");
      setMyInfo(myReturnedInfo);
    }
    getMyInfo();
  }, []);

  const myMessages = myInfo.messages ? (
    myInfo.messages.length ? (
      myInfo.messages.map((message) => {
        return (
          <div className="message">
            <div>Message Title</div>

            <div>From</div>

            <div>Someone</div>

            <div>Thing </div>

            <div>Was </div>

            <div>Messaged</div>
          </div>
        );
      })
    ) : (
      <div>You have no messages at this time.</div>
    )
  ) : (
    <div>Loading Messages...</div>
  );

  return (
    <div className="box">
      {`This is your Profile Component`}
      {myMessages}
    </div>
  );
};

export default Profile;
