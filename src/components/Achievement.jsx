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

// Images float at fixed positions on screen, sliding in/out independently
const floatingImages = [
  { src: img1, side: "left",  top: "15%", rotate: "-5deg", width: "320px", height: "240px" },
  { src: img2, side: "right", top: "38%", rotate:  "4deg", width: "300px", height: "220px" },
  { src: img3, side: "left",  top: "62%", rotate: "-3deg", width: "340px", height: "250px" },
];

export default function Achievements() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      setScrollProgress(Math.min(Math.max(scrolled / total, 0), 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Tall section so there's room to scroll through
    <section
      id="achievements"
      ref={sectionRef}
      style={{ background: "#0c0c0c", position: "relative" }}
    >
      {/* ── STICKY CONTAINER — everything inside stays fixed while scrolling ── */}
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
            background: "linear-gradient(to bottom, #0c0c0c 60%, transparent)",
          }}
        >
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
              fontSize: "clamp(3rem, 9vw, 7rem)",
              color: "#fff",
              letterSpacing: "0.05em",
              lineHeight: 1,
              margin: 0,
            }}
          >
            ACHIEVEMENTS
          </h2>
        </div>

        {/* Floating images — fixed on screen, slide in from sides based on scroll */}
        {floatingImages.map((img, i) => {
          // Each image appears and disappears at different scroll ranges
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

        {/* Scrolling achievement cards — move upward as scroll increases */}
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
            {achievements.map((ach, i) => (
              <AchievementCard key={i} ach={ach} idx={i} scrollProgress={scrollProgress} total={achievements.length} />
            ))}
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
            background: "linear-gradient(to top, #0c0c0c, transparent)",
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

function AchievementCard({ ach, idx, scrollProgress, total }) {
  // Each card fades in at a staggered scroll point
  const cardAppear = (idx / total) * 0.6;
  const p = Math.min(Math.max((scrollProgress - cardAppear) / 0.1, 0), 1);

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.055)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderRadius: "16px",
        padding: "1.5rem 1.75rem",
        opacity: p,
        transform: `translateY(${(1 - p) * 24}px)`,
        transition: "none",
        willChange: "transform, opacity",
      }}
    >
      <div
        style={{
          width: "28px", height: "2px",
          background: "#facc15",
          borderRadius: "2px",
          marginBottom: "12px",
        }}
      />
      <h3
        style={{
          color: "#fff",
          fontWeight: 600,
          fontSize: "1rem",
          marginBottom: "10px",
          lineHeight: 1.45,
          margin: "0 0 10px",
        }}
      >
        {ach.title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "7px" }}>
        {ach.bullets.map((b, bi) => (
          <li key={bi} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span
              style={{
                marginTop: "8px", flexShrink: 0,
                width: "5px", height: "5px",
                borderRadius: "50%", background: "#facc15",
              }}
            />
            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.75 }}>
              {b}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}