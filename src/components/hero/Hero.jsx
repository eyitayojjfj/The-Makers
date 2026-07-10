import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Hero.css";

export default function Hero() {
  const fullText = "Create. Connect. Elevate";

  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setDone(true); // stop cursor when finished
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="hero" id="home">
        <div className="hero-container">

          {/* SUBTITLE (TYPEWRITER) */}
          <p className="subtitle">
            {text}
            {!done && <span className="cursor">|</span>}
          </p>

          {/* BUTTONS */}
         <div className="hero-buttons">
  <Link to="/contact" className="btn-primary">
    Contact Us
  </Link>
</div>

          {/* ROTATING CIRCLE TEXT */}
          <div className="creative-circle">
            <svg viewBox="0 0 300 300">
              <defs>
                <path
                  id="circlePath"
                  d="
                    M 150,150
                    m -95,0
                    a 95,95 0 1,1 190,0
                    a 95,95 0 1,1 -190,0
                  "
                />
              </defs>

              <text className="circle-text">
                <textPath
                  href="#circlePath"
                  startOffset="0%"
                  textLength="596"
                >
                  MUSIC • FASHION • EVENTS • COMMUNITY •
                </textPath>
              </text>
            </svg>
          </div>

        </div>
      </section>

      {/* VISION / MISSION */}
      <div className="vision-mission">

        <div className="card">
          <h1>Vision</h1>
          <p>
            To become Africa's leading creative ecosystem, empowering creatives with
            the platform, resources, and opportunities needed to thrive, connect,
            and shape culture globally.
          </p>
        </div>

        <div className="card">
          <h1>Mission</h1>
          <p>
            To discover, develop, and amplify creative talent through entertainment,
            media, events, fashion, art, and strategic collaborations that inspire
            growth and community.
          </p>
        </div>

        <div className="create"> <h1>Create. Connect. Elevate</h1></div>

      </div>
    </div>
  );
} 