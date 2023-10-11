import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import "../styles/QuoteContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

interface PropsInter {
  bgColor: string;
  quote: {
    text: string;
    author: string;
  };
  next: () => void;
}

function QuoteContainer(props: PropsInter) {
  const [quoteTransition, setQuoteTransition] = useState(false);

  useEffect(() => {
    if (quoteTransition === true) {
      props.next();
      console.log(quoteTransition);
      setTimeout(() => {
        setQuoteTransition(false);
      }, 1000);
    }
  }, [quoteTransition]);

  const handleTransition = () => {
    setQuoteTransition(true);
  };

  return (
    <div id="quote-box" style={{ color: props.bgColor }}>
      <blockquote className={`${quoteTransition && "fadeOut"}`} id="text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        {props.quote.text}
      </blockquote>
      <div id="author" className={`${quoteTransition && "fadeOut"}`}>
        <span>- {props.quote.author}</span>
      </div>
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${props.quote.text}%22%20${props.quote.author}`}
        target="_blank"
        id="tweet-quote"
        className="button"
        style={{ backgroundColor: props.bgColor }}
      >
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a
        href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${props.quote.author}&content=${props.quote.text}www.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
        target="_blank"
        className="button"
        style={{ backgroundColor: props.bgColor }}
      >
        <FontAwesomeIcon icon={faTumblr} />
      </a>
      <button
        id="new-quote"
        className="button"
        style={{ backgroundColor: props.bgColor }}
        onClick={handleTransition}
      >
        Next Quote
      </button>
    </div>
  );
}

export default QuoteContainer;
