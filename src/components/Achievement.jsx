import { useEffect, useRef, useState } from "react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

const achievements = [
  {
    title: "JPMorgan Chase & Co. — Code for Good 2025",
    bullets: [
      "Selected among top 0.17% (from 65,000+ applicants) — one of 108 invited to the Mumbai office.",
      "Engineered a working prototype in 24 hours assisting Purnata NGO by visualizing human trafficking patterns and prioritizing resource allocation in high-risk districts.",
    ],
  },
  {
    title: "Myntra HackerRamp: WeForShe 2024",
    bullets: [
      "Advanced to Phase 2 by designing features for an inclusive fashion e-commerce platform.",
      "Ranked in the top 4.1% of participants, demonstrating scalable solution development.",
    ],
  },
  {
    title: "The Hyperloop Effect — IIT Madras",
    bullets: [
      "Finalist among top 3% of teams with a detailed project plan, design analysis, and resource coordination.",
    ],
  },
  {
    title: "Ideathon — IIT Bhubaneswar & BIS",
    bullets: [
      "Won 1st Prize for an innovative solution on 'Integrating Reimagining Core Branches with AI'.",
      "Delivered a working solution under strict timelines with coordinated team execution.",
    ],
  },
  {
    title: "More Wins",
    bullets: [
      "Tata Imagination Challenge: Semi-Finalist — progressed through two competitive rounds.",
      "2nd Prize in RoboSumo at Innovision 2024, NIT Rourkela's tech fest, as part of Team Dheera.",
    ],
  },
];

// Images float at fixed positions on screen, sliding in/out independently.
// Desktop only — see the mobile branch below.
const floatingImages = [
  { src: img1, side: "left", top: "15%", rotate: "-5deg", width: "320px", height: "240px" },
  { src: img2, side: "right", top: "38%", rotate: "4deg", width: "300px", height: "220px" },
  { src: img3, side: "left", top: "62%", rotate: "-3deg", width: "340px", height: "250px" },
];

const DARK = "#0c0c0c";

/**
 * The scroll-driven sticky presentation needs roughly a tablet's worth of
 * width and height to work: the floating images are 300-340px wide and slide
 * 120px horizontally, which on a 360px phone means they sit on top of the
 * text. Below 768px we render a plain stacked list instead, which also avoids
 * scroll-jacking and the 100vh/mobile-browser-chrome problem.
 */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < breakpoint
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

function SectionHeading({ compact = false }) {
  return (
    <>
      <p
        style={{
          color: "#facc15",
          fontSize: "0.65rem",
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
          fontFamily: "sans-serif",
        }}
      >
        Highlights
      </p>
      <h2
        style={{
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          fontSize: compact ? "clamp(2.25rem, 12vw, 4rem)" : "clamp(3rem, 9vw, 7rem)",
          color: "#fff",
          letterSpacing: "0.05em",
          lineHeight: 1,
          margin: 0,
          overflowWrap: "break-word",
        }}
      >
        ACHIEVEMENTS
      </h2>
    </>
  );
}

function Card({ ach, style }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.055)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderRadius: "16px",
        padding: "1.25rem 1.25rem",
        ...style,
      }}
    >
      <div
        style={{
          width: "28px",
          height: "2px",
          background: "#facc15",
          borderRadius: "2px",
          marginBottom: "12px",
        }}
      />
      <h3
        style={{
          color: "#fff",
          fontWeight: 600,
          fontSize: "0.95rem",
          lineHeight: 1.45,
          margin: "0 0 10px",
          overflowWrap: "break-word",
        }}
      >
        {ach.title}
      </h3>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "7px",
        }}
      >
        {ach.bullets.map((b, bi) => (
          <li key={bi} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span
              style={{
                marginTop: "8px",
                flexShrink: 0,
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#facc15",
              }}
            />
            <span
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.62)",
                lineHeight: 1.75,
                minWidth: 0,
                overflowWrap: "break-word",
              }}
            >
              {b}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Achievements() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return; // no scroll maths needed for the static layout
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const scrolled = -rect.top;
      setScrollProgress(Math.min(Math.max(scrolled / total, 0), 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // ── Mobile: plain stacked list, no sticky, no scroll-jacking ──
  if (isMobile) {
    return (
      <section
        id="achievements"
        style={{ background: DARK, padding: "3.5rem 1rem 4rem" }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <SectionHeading compact />
        </div>

        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {achievements.map((ach, i) => (
            <Card key={i} ach={ach} />
          ))}
        </div>

        <div
          style={{
            maxWidth: "560px",
            margin: "2rem auto 0",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0.75rem",
          }}
        >
          {floatingImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt=""
              loading="lazy"
              style={{
                width: "100%",
                height: "190px",
                objectFit: "cover",
                display: "block",
                borderRadius: "14px",
                border: "2px solid rgba(255,255,255,0.18)",
              }}
            />
          ))}
        </div>
      </section>
    );
  }

  // ── Desktop: original scroll-driven sticky presentation ──
  return (
    <section id="achievements" ref={sectionRef} style={{ background: DARK, position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Fixed heading — never moves */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            textAlign: "center",
            padding: "3rem 1rem 1rem",
            zIndex: 10,
            background: `linear-gradient(to bottom, ${DARK} 60%, transparent)`,
          }}
        >
          <SectionHeading />
        </div>

        {/* Floating images */}
        {floatingImages.map((img, i) => {
          const appear = i * 0.28;
          const disappear = appear + 0.45;
          const p = Math.min(Math.max((scrollProgress - appear) / 0.12, 0), 1);
          const q = 1 - Math.min(Math.max((scrollProgress - disappear) / 0.1, 0), 1);
          const opacity = p * q;
          const fromX = img.side === "left" ? -120 : 120;
          const translateX = (1 - Math.min(p, q)) * fromX;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: img.top,
                ...(img.side === "left" ? { left: "0px" } : { right: "0px" }),
                width: img.width,
                maxWidth: "38vw",
                zIndex: 5,
                opacity,
                transform: `rotate(${img.rotate}) translateX(${translateX}px)`,
                transition: "none",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "2px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.8)",
                  clipPath:
                    img.side === "left"
                      ? "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)"
                      : "polygon(22px 0, 100% 0, 100% 100%, 0 100%, 0 22px)",
                }}
              >
                <img
                  src={img.src}
                  alt=""
                  style={{
                    width: "100%",
                    height: img.height,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          );
        })}

        {/* Scrolling achievement cards */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            paddingTop: "260px",
            transform: `translateY(${-scrollProgress * (achievements.length * 200)}px)`,
            transition: "none",
            willChange: "transform",
          }}
        >
          <div
            style={{
              maxWidth: "560px",
              margin: "0 auto",
              padding: "0 1.5rem 4rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {achievements.map((ach, i) => {
              const cardAppear = (i / achievements.length) * 0.6;
              const p = Math.min(Math.max((scrollProgress - cardAppear) / 0.1, 0), 1);
              return (
                <Card
                  key={i}
                  ach={ach}
                  style={{
                    padding: "1.5rem 1.75rem",
                    opacity: p,
                    transform: `translateY(${(1 - p) * 24}px)`,
                    transition: "none",
                    willChange: "transform, opacity",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: `linear-gradient(to top, ${DARK}, transparent)`,
            zIndex: 8,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Spacer that controls how long the sticky section lasts */}
      <div style={{ height: "400vh" }} />
    </section>
  );
}
