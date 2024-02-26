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
            className={isTarget === index ? "rateBtn oranged" : "rateBtn"}
          >
            {nums}
          </button>
        );
      })}
    </div>
  );
}
