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
            key={profile.profile_id}
            firstName={profile.first_name}
            lastName={profile.last_name}
            cell={profile.cell}
            email={profile.email}
            addressNum={profile.street_num}
            street={profile.street_name}
            image={profile.profile_img_large}
            city={profile.city_name}
            state={profile.state_name}
            postcode={profile.zip_code}
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
