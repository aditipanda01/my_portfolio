import "./styles/Hobbies.css";

const hobbies = [
  { title: "Forever a Curious Mind", sub: "Learning & Exploring Ideas" },
  { title: "Turning Imagination into Art", sub: "Designing & Creating" },
  { title: "Life in a Thousand Colors", sub: "Painting & Artistic Expression" },
  { title: "When Words Become Movement", sub: "Dancing & Music" },
  { title: "Collecting Moments, Not Things", sub: "Travelling & Discovering Places" },
  { title: "A Beginner at Everything", sub: "Experimenting & Learning New Skills" },
];

/* Small crosshair mark used as a corner accent */
const Mark = () => (
  <svg className="hobbies-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    <path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function Hobbies() {
  return (
    <section id="hobbies" className="hobbies-section">
      <div className="hobbies-inner">
        {/* Top micro row */}
        <div className="hobbies-microrow">
          <p className="hobbies-eyebrow">
            Outside
            <br />
            the code
          </p>
          <Mark />
        </div>

        {/* Layered headline */}
        <div className="hobbies-headline">
          <span className="hobbies-accent" aria-hidden="true" />
          {/* The visible, accessible text is the solid layer. The outlined
              layer is decorative and hidden from assistive tech so the word
              isn't announced twice. */}
          <h2 className="hobbies-word hobbies-word--solid">Hobbies</h2>
          <span className="hobbies-word hobbies-word--outline" aria-hidden="true">
            Hobbies
          </span>
        </div>

        {/* Bottom micro row */}
        <div className="hobbies-microrow hobbies-microrow--bottom">
          <span>Aditi Panda</span>
          <span>Beyond the screen</span>
        </div>

        {/* Cards */}
        <ul className="hobbies-grid list-none p-0 m-0">
          {hobbies.map((h, i) => (
            <li key={h.title} className="hobby-card">
              <span className="hobby-index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="hobby-title">{h.title}</h3>
              <p className="hobby-sub">{h.sub}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}