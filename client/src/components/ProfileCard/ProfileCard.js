import React from "react";
import Button from "../UI/Button/Button";
import styles from "./ProfileCard.module.css";

const ProfileCard = (props) => {
  const coppiedTxtHandler = (event) => {
    let coppiedTxt = event.target.textContent;
    navigator.clipboard.writeText(coppiedTxt);
  };

  const user = { ...props };

  return (
    <div className={styles["profile-card"]}>
      <div className={styles["profile__image-container"]}>
        <img
          alt="profile"
          className={styles["profile__image"]}
          src={props.image}
        ></img>
      </div>
      <div className={styles["profile__info-container"]}>
        <p
          className={`${styles["profile__name"]} ${styles["profile__text--copy"]}`}
          onClick={coppiedTxtHandler}
        >
          {props.firstName} {props.lastName}
        </p>
        <p
          onClick={coppiedTxtHandler}
          className={styles["profile__text--copy"]}
        >
          {props.cell}
        </p>
        <p
          onClick={coppiedTxtHandler}
          className={styles["profile__text--copy"]}
        >
          {props.email}
        </p>
        <Button onClick={() => props.openDetailedProfileHandler(user)}>
          Detailed View
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
