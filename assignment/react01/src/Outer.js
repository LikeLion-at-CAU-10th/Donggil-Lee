import React from "react";
import styles from "./css/outer.module.css";
const Outer = ({ img }) => {
  console.log(img);
  return (
    <div className={styles.img}>
      <img src={require(`${img}`)} alt="alt"></img>
    </div>
  );
};

export default Outer;
