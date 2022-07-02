import React from "react";
const Inner = ({ data }) => {
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
  return <div>{d.text[index]} ❤️</div>;
};

export default Inner;
