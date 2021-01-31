import React from "react";
import "./styles.css";

const images = [
  "https://rb.gy/h7ukq1",
  "https://rb.gy/ddd5c4",
  "https://rb.gy/wijyzp",
  "https://rb.gy/sgf2m1"
];

export default function App() {
  const [img, setImg] = React.useState(images[0]);
  const cangeImage = () => {
    let index = images.indexOf(img);
    if (index === images.length - 1) {
      index = -1;
      setImg(images[index + 1]);
    } else {
      setImg(images[index + 1]);
    }
  };
  return (
    <div className="App">
      <img width="400px" src={img} alt="car" />
      <br />
      <button onClick={cangeImage}>Next Image</button>
    </div>
  );
}
