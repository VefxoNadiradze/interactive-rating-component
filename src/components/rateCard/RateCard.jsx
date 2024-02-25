import "./rateCard.css";
import starIcon from "/images/icon-star.svg";
import Btns from "../rateBtns/Btns";

export default function RateCard() {
  return (
    <div className="rateCard">
      <div className="starDiv">
        <img src={starIcon} alt="star icon" />
      </div>
      <h1 className="title">How did we do?</h1>
      <p className="paragraph">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Btns />

      <button className="submit">submit</button>
    </div>
  );
}
