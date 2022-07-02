import Inner from "./Inner";
import Outer from "./Outer";
import styles from "./App.module.css";
function App() {
  const data = {
    img: ["./img/one.png", "./img/two.png", "./img/three.png"],
    text: [
      "10분 컷 과카몰리 만드는 법 공개...",
      "여름엔 입맛 살리는 오이 냉국 어때...",
      "비오는 장마철엔 부추 전 만들어 먹....",
    ],
  };
  return (
    <div className={styles.App}>
      {data.img.map((i, x) => (
        <div className={styles.box}>
          <Outer img={i} key={x}></Outer>
          <div className={styles.inner}>
            <Inner data={i} key={i} className={styles.inner}></Inner>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
