import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";
const Detail = () => {
  const { name } = useParams();
  const d = data.index.filter((what) => what.name === name)[0];
  return (
    <div className="container">
      <div>
        <div>{d.name}</div>
        <div className="imgbox">
          <img src={require(`../data/img/${d.img}`)} alt="d"></img>
        </div>
        <div className="description">{d.description}</div>
      </div>
    </div>
  );
};

export default Detail;
