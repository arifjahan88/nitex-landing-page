import "./HomeTean.css";
import BigGrayStar from "../../assets/big_gray_star.svg";

const HomeTeam = () => {
  return (
    <section className="container">
      <div className="team_container">
        <img src={BigGrayStar} className="team_img" />
        <p className="team_text">
          Our team of experienced developers and designers will work with you to design, develop,
          market and deliver software that meets your unique needs and goals.
        </p>
      </div>
    </section>
  );
};

export default HomeTeam;
