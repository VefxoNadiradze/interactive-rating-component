import "./btns.css";

export default function Btns() {
  let Numbers = [1, 2, 3, 4, 5];

  return (
    <div className="rateBtnsParent">
      {Numbers.map((nums, index) => {
        return (
          <button key={index} className="rateBtn">
            {nums}
          </button>
        );
      })}
    </div>
  );
}
