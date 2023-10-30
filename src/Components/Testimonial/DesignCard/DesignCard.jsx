/* eslint-disable react/prop-types */
import "./DesignCard.css";
import QuoteIcon from "../../../assets/quote.svg";
import PinkQuoteIcon from "../../../assets/pink_quote.svg";
import GreenQuoteIcon from "../../../assets/green_quote.svg";
import GreenStar from "../../../assets/big_green_star.svg";
import BlueStar from "../../../assets/big_blue_star.svg";
import PinkStar from "../../../assets/big_pink_star.svg";

const DesignCard = ({ color, quoteText, quoteAuthor, authorTitle }) => {
  let quote_icon_color;
  let star_icon_color;

  if (color === "green") {
    quote_icon_color = GreenQuoteIcon;
    star_icon_color = GreenStar;
  } else if (color === "pink") {
    quote_icon_color = PinkQuoteIcon;
    star_icon_color = PinkStar;
  } else {
    quote_icon_color = QuoteIcon;
    star_icon_color = BlueStar;
  }
  return (
    <section className="testimonial_container">
      <div className="quote_container">
        <img src={quote_icon_color} className="quote_icon" />

        <div className="quote_content_container">
          <img className="quote_star" src={star_icon_color} />
          <p className="quote">“{quoteText}”</p>
          <p className="quote_author">{quoteAuthor}</p>
          <p className="quote_author_title">{authorTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default DesignCard;
