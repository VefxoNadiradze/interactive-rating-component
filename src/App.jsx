import { useState } from "react";
import RateCard from "./components/rateCard/RateCard";
import ThxCard from "./components/ThanksCard/ThxCard";
import "./App.css";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [isRate, setIsRate] = useState(0);
  return (
    <>
      {isSubmited ? (
        <ThxCard setIsRate={setIsRate} isRate={isRate} />
      ) : (
        <RateCard
          setIsSubmited={setIsSubmited}
          isRate={isRate}
          setIsRate={setIsRate}
        />
      )}
    </>
  );
}

export default App;
