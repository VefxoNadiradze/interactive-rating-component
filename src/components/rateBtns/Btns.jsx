import { useState } from "react";
import "./btns.css";

export default function Btns({ setIsRate }) {
  const [isTarget, setIsTarget] = useState(null);
  let Numbers = [1, 2, 3, 4, 5];

  return (
    <div className="rateBtnsParent">
      {Numbers.map((nums, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setIsTarget(index);

              setIsRate(nums);
            }}
            style={
              isTarget === index
                ? { backgroundColor: "rgb(252, 118, 20)" }
                : { backgroundColor: "rgb(38, 46, 56)" }
            }
            className="rateBtn"
          >
            {nums}
          </button>
        );
      })}
    </div>
  );
}
