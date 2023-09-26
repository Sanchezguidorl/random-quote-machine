import "./styles/App.css";
import QuoteContainer from "./components/QuoteContainer";
import { useEffect, useState } from "react";
import { backgroundColors, quotesArray } from "./styles/dataArrays";

function App() {
  const randomIndex = (arrayLength: number): number => {
    return Math.floor(Math.random() * arrayLength);
  };
  const [quote, setQuote] = useState(
    quotesArray[randomIndex(quotesArray.length)]
  );
  const [bgColor, setBgColor] = useState(
    backgroundColors[randomIndex(backgroundColors.length)]
  );

  useEffect(() => {
    let stopLoop = false;
    while (!stopLoop) {
      const color = backgroundColors[randomIndex(backgroundColors.length)];
      if (color !== bgColor) {
        setBgColor(color);
        stopLoop = true;
      }
    }
  }, [quote]);

  const transitionQuote=(index:number)=>{
    setTimeout(() => {
      setQuote(quotesArray[index])
    }, 500);
      };

  const nextQuote=()=>{
  const currentIndex= quotesArray.indexOf(quote);
    if(currentIndex<quotesArray.length-1){
      transitionQuote(currentIndex+1);
    }else{
      transitionQuote(0);
    }
  };



  return (
    <div id="App" style={{ backgroundColor: bgColor }}>
      <QuoteContainer bgColor={bgColor} quote={quote} next={nextQuote}/>
    </div>
  );
}

export default App;
