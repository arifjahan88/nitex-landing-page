import "./Quote.css";
import startop from "../../assets/right-top.png";
import stardown from "../../assets/left-down.png";

const Quote = () => {
  return (
    <section className="container">
      <div className="quote_container">
        <div className="mainpart">
          <h3>Let&apos;s create a measurable impact on your business.</h3>
          <div className="button_parts">
            <a className="button_quote">Request A Quote</a>
          </div>
          <img className="topstar" src={startop}></img>
          <img className="downstar" src={stardown}></img>
        </div>
      </div>
    </section>
  );
};

export default Quote;
