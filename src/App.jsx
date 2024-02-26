import { useState } from "react";
import RateCard from "./components/rateCard/RateCard";
import ThxCard from "./components/ThanksCard/ThxCard";
import "./App.css";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  return (
    <>{isSubmited ? <ThxCard /> : <RateCard setIsSubmited={setIsSubmited} />}</>
  );
}

export default App;
