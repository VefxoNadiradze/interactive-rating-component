import "./thxCard.css";
import illustrationImg from "/images/illustration-thank-you.svg";

export default function ThxCard({ isRate }) {
  return (
    <div className="thxCard">
      <div className="ilustrationImgPar">
        <img src={illustrationImg} alt="ilustration image" />
      </div>
      <p className="selectedScore">
        You selected <span className="selectedScore">{isRate}</span> out of 5
      </p>

      <h2 className="thxTitle">Thank you!</h2>
      <p className="thxParagraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
