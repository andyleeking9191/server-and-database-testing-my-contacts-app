import React from "react";
import Button from "../UI/Button/Button"
import styles from "./DetailedProfile.module.css";

const DetailedProfile = (props) => {
  const profile = props.profileData;
  console.log(profile);

  return (
    <div className={styles["detailed-profile"]}>
      <Button
        className={"btn--close"}
        onClick={props.closeDetailedProfileHandler}
      >
        X
      </Button>
      <div className={styles["detailed-profile__top-info-container"]}>
        
          <img
            alt="profile"
            className={styles["detailed-profile__image"]}
            src={profile.image}
          ></img>
    

        <p className={styles["detailed-profile__name"]}>
          {profile.firstName} {profile.lastName}
        </p>
        <p>Cell: {profile.cell}</p>
        <p>Email: {profile.email}</p>
      </div>
      <p>
        Mailing Address: {profile.addressNum} {profile.street} {profile.city}, {profile.state} {profile.postcode}
      </p>
      <div className={styles["detailed-profile__btn-container"]}>
        <Button className="btn--small">Edit Profile</Button>
        <Button className="btn--small">Delete Profile</Button>
      </div>
    </div>
  );
};

export default DetailedProfile;
