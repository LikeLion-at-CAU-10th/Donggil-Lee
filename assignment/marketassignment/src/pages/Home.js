import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../css/Home.module.css";
import { useNavigate, Outlet } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  const navigator = useNavigate();
  const navigateClick = (url, name) => {
    navigator(url, { state: findthis(name) });
  };
  const getData = async () => {
    const response = await axios.get(
      "https://fd18cb8f-d26e-4fc5-b07e-1e30362b9e8e.mock.pstmn.io/"
    );
    setData(response.data);
  };
  const findthis = (name) => {
    for (var i = 0; i < data.length; i++) {
      if (data[i].productname === name) {
        return data[i];
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className={styles.products}>
        {data.map((d) => (
          <div
            className={styles.product}
            onClick={() => {
              navigateClick(`/${d.productname}`, d.productname);
            }}
          >
            <img src={d.img} alt=""></img>
            <div>{d.productname}</div>
            <p>{d.price}</p>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Home;
