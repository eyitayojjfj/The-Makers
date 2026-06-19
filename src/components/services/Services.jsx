import "./Services.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">

        {/* Moving Background Text */}
     <div className="services-marquee">
  <div className="services-track">
    <span>Services • Services • Services • Services • Services •</span>
    <span>Services • Services • Services • Services • Services •</span>
  </div>
</div>

       

        <div className="service-section">

          {/* Events */}
          <div className="service-block">
            <h3>Events & Experiences</h3>

            <p>
              We create, manage, and amplify unforgettable experiences. From
              corporate conferences and brand activations to concerts,
              festivals, campus tours, private celebrations, and cultural
              events, THE MAKERS specializes in turning ideas into impactful
              experiences that connect with the right audience.
            </p>

            <p>
              We don't just organize events—we build communities around them.
              Through strategic planning, promotion, audience targeting,
              partnerships, and seamless execution, we ensure every event
              achieves its purpose and leaves a lasting impression.
            </p>
          </div>

          {/* Music */}
          <div className="service-block">
            <h3>Music & Talent</h3>

            <p>
              We discover, develop, and promote artists and creatives. Through
              A&R, talent management, music promotion, branding, publicity, and
              platform opportunities, we help talents grow their audience,
              build their careers, and maximize their potential.
            </p>

            <p>
              Our services cover artist development, A&R, music promotion,
              talent management, branding, content creation, distribution
              support, publicity, and audience growth. We connect artists with
              the right platforms, partnerships, and communities to increase
              visibility and create lasting impact.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}