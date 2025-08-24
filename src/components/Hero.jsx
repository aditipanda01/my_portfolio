import profileImg from "../assets/profile.png";
import blobImg from "../assets/blob.svg";
import "./styles/Hero.css"; // Create and link the CSS file for layered styles

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <p className="intro">Hi! I'm</p>
          <h1 className="heading">
            Aditi Panda - <span className="highlight">Full Stack Developer and ML enthusiast </span>
          </h1>
          <p className="subtext">
          Building scalable web apps and smart ML solutions with a focus on clean code and great user experiences.
          </p>
          <div className="buttons">
            <a href="/aditipanda.pdf" download className="btn yellow">Download Resume </a>
          </div>
        </div>
       <div className="grid w-full max-w-md mx-auto lg:mx-0 place-items-center">
  <img
    src={blobImg}
    alt="Blob"
    className="w-[140%] max-w-none col-start-1 row-start-1 -translate-x-10 z-0"
  />
  <img
    src={profileImg}
    alt="Profile"
    className="rounded-[2rem] w-full max-w-md col-start-1 row-start-1 z-10"
  />
</div>

      </div>
    </section>
  );
}
