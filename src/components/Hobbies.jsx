import "./styles/Hobbies.css";

/* ─────────────────────────────────────────────────────────────
   ADD YOUR IMAGES HERE

   1. Drop six images into src/assets/ (e.g. curious.jpg, design.jpg …)
   2. Uncomment the imports below and set each `img:` field.
   Any hobby left without an `img` renders a neutral placeholder
   block, so the section looks fine before you add them.
   ───────────────────────────────────────────────────────────── */

// import curiousImg   from "../assets/curious.jpg";
// import designImg    from "../assets/design.jpg";
// import paintingImg  from "../assets/painting.jpg";
// import danceImg     from "../assets/dance.jpg";
// import travelImg    from "../assets/travel.jpg";
// import learningImg  from "../assets/learning.jpg";

const hobbies = [
  { title: "Forever a Curious Mind", sub: "Learning & Exploring Ideas", img: null /* curiousImg */ },
  { title: "Turning Imagination into Art", sub: "Designing & Creating", img: null /* designImg */ },
  { title: "Life in a Thousand Colors", sub: "Painting & Artistic Expression", img: null /* paintingImg */ },
  { title: "When Words Become Movement", sub: "Dancing & Music", img: null /* danceImg */ },
  { title: "Collecting Moments, Not Things", sub: "Travelling & Discovering Places", img: null /* travelImg */ },
  { title: "A Beginner at Everything", sub: "Experimenting & Learning New Skills", img: null /* learningImg */ },
];

// Evenly spaced across a 90° sweep. Only used at lg and up, where the
// CSS turns the grid into the fan; below that these values are ignored.
const ANGLES = [-45, -27, -9, 9, 27, 45];

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

        {/* Arc of cards */}
        <ul className="hobbies-deck">
          {hobbies.map((h, i) => (
            <li
              key={h.title}
              className="hobby-card"
              style={{
                "--angle": `${ANGLES[i]}deg`,
                // Centre cards sit above the outer ones so the fan reads
                // as a deck rather than a flat row.
                "--z": String(10 - Math.abs(ANGLES[i])),
              }}
            >
              <div className={`hobby-media${h.img ? "" : " hobby-media--empty"}`}>
                {h.img ? (
                  <img src={h.img} alt={h.title} loading="lazy" />
                ) : (
                  <span>{String(i + 1).padStart(2, "0")}</span>
                )}
              </div>
              <div className="hobby-body">
                <span className="hobby-index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="hobby-title">{h.title}</h3>
                <p className="hobby-sub">{h.sub}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Centred layered headline */}
        <div className="hobbies-headline">
          <div className="hobbies-stack">
            <span className="hobbies-accent" aria-hidden="true" />
            {/* The solid layer carries the accessible text; the outline
                layer is decorative and hidden so it isn't read twice. */}
            <h2 className="hobbies-word hobbies-word--solid">Hobbies</h2>
            <span className="hobbies-word hobbies-word--outline" aria-hidden="true">
              Hobbies
            </span>
          </div>
        </div>

        {/* Bottom micro row */}
        <div className="hobbies-microrow hobbies-microrow--bottom">
          <span>Aditi Panda</span>
          <span>Beyond the screen</span>
        </div>
      </div>
    </section>
  );
}