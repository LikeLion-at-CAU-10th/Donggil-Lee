import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./css/Inner.module.css";
const Inner = ({ data }) => {
  const [like, setlike] = useState(false);
  const [color, setcolor] = useState("white");
  useEffect(() => (like ? setcolor("pink") : setcolor("white")), [like]);
  const d = {
    img: ["./img/one.png", "./img/two.png", "./img/three.png"],
    text: [
      "10분 컷 과카몰리 만드는 법 공개...",
      "여름엔 입맛 살리는 오이 냉국 어때...",
      "비오는 장마철엔 부추 전 만들어 먹....",
    ],
  };
  let index = 0;
  for (let x = 0; x < d.img.length; x++) {
    if (d.img[x] === data) {
      index = x;
      break;
    }
  }
  return (
    <div className={styles.container}>
      <div>{d.text[index]} ❤️</div>
      <div className={styles.fake}>
        <button
          className={styles.like}
          onClick={() => {
            like ? setlike(false) : setlike(true);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            height: "50px",
            backgroundColor: `${color}`,
            color: "black",
            borderStyle: "none",
          }}
        >
          ❤️like
        </button>
      </div>
    </div>
  );
};

export default Inner;
