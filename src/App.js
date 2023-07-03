import "./styles.css";
import { useState } from "react";
import Lightbox from "./components/Lightbox";
export default function App() {
  const [boxCount, setBoxCount] = useState([["grey", "grey", "grey"]]);

  const onNext = () => {
    let colorArray = [...boxCount];
    colorArray.push([
      `#${Math.floor(Math.random() * 1000000)}`,
      `#${Math.floor(Math.random() * 1000000)}`,
      `#${Math.floor(Math.random() * 1000000)}`
    ]);
    setBoxCount(colorArray);
  };

  const onPrev = () => {
    let colorArray = [...boxCount];
    console.log("colorArray", colorArray);
    colorArray.splice(-1);
    console.log("splice colorArray", colorArray);

    setBoxCount(colorArray);
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        {boxCount.map((boxList, boxListIndex) => {
          if (boxListIndex + 1 === boxCount.length) {
            return (
              <>
                {boxList.map((box, boxIndex) => {
                  return <Lightbox color={box} index={boxIndex} />;
                })}
              </>
            );
          }
        })}
      </div>
      {boxCount !== null && boxCount.length > 1 && (
        <button onClick={() => onPrev()}>Previous</button>
      )}
      <button onClick={() => onNext()}>Next</button>
    </div>
  );
}
