import React, { useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import DetailedProfile from "../DetailedProfile/DetailedProfile";
import styles from "./CardContainer.module.css";

const CardContainer = (props) => {
  const profileList = props.listOfProfiles;
  const [detailedProfile, setDetailedprofile] = useState(false);
  const [detailedData, setDetailedData] = useState([])

  const openDetailedProfileHandler = (userObj) => {
    setDetailedData(userObj)
    setDetailedprofile(true);
  };

  const closeDetailedProfileHandler = () => {
    setDetailedprofile(false);
  };


  return (
  <div className={!detailedProfile ? styles["card-container"] : styles["card-container--detailed-profile"]}>
      {!detailedProfile ? (
        profileList.map((profile) => (
          <ProfileCard
            key={profile.login.uuid}
            firstName={profile.name.first}
            lastName={profile.name.last}
            cell={profile.cell}
            email={profile.email}
            addressNum={profile.location.street.number}
            street={profile.location.street.name}
            image={profile.picture.large}
            city={profile.location.city}
            state={profile.location.state}
            postcode={profile.location.postcode}
            openDetailedProfileHandler={openDetailedProfileHandler}
          />
        ))
      ) : (
        <DetailedProfile
          profileData={detailedData}
          closeDetailedProfileHandler={closeDetailedProfileHandler}
        />
      )}
    </div>
  );
};

export default CardContainer;
