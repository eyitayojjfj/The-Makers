
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>About Us</h2>

        <p className="about-description">
          THE MAKERS is a culture-driven entertainment, media and creative
          company built around one simple idea: the most impactful brands,
          talents and experiences are the ones that understand culture, move
          with it and help shape what comes next.

          {"\n\n"}We operate at the intersection of entertainment, media,
          marketing, sports, youth culture and creative expression, building
          campaigns, platforms and experiences that connect people, ideas and
          opportunities. Our work is designed not simply to create visibility,
          but to build relevance, generate conversation and turn attention
          into lasting impact.

          {"\n\n"}From artist and brand promotion to digital marketing,
          experiential activations, media, talent development, community
          engagement and original intellectual property, THE MAKERS brings
          together strategy, creativity and execution under one ecosystem.
          We work with artists, creatives, brands, businesses, organisations
          and cultural players to transform ideas into experiences that
          audiences can engage with and remember.

          {"\n\n"}What sets THE MAKERS apart is our understanding of the
          communities we operate within. We pay attention to where culture is
          moving, who is driving it and what audiences genuinely respond to.
          Whether it is a campus community, a digital audience, a sports
          environment, an entertainment platform or a wider youth culture,
          we create opportunities for brands and talent to enter those spaces
          authentically and make an impression.

          {"\n\n"}We are equally focused on building our own platforms and
          intellectual property. Beyond providing services, THE MAKERS is
          developing original concepts, products, media properties and
          experiences that can live independently, grow communities and
          create long-term cultural value. We believe the future belongs to
          companies that can do more than execute campaigns — companies that
          can create the platforms, stories and experiences people want to
          be part of.

          {"\n\n"}Our approach is collaborative, entrepreneurial and built
          for movement. We bring people together, identify opportunities,
          develop ideas and turn them into tangible outcomes. For talent,
          that means creating pathways for visibility, growth and meaningful
          opportunities. For brands, it means creating culturally relevant
          ways to reach the right audiences. For communities, it means
          building experiences that feel genuine, exciting and worth
          participating in.

          {"\n\n"}THE MAKERS is not built to simply follow trends or promote
          what already exists. We are here to discover what has potential,
          give it structure, amplify it and build something bigger around it.

          {"\n\n"}We make brands more culturally relevant. We make talent
          more visible. We make ideas more actionable. We make experiences
          more memorable.

          {"\n\n"}At THE MAKERS, we don’t just promote what is happening.

          {"\n"}We help make what happens next.
        </p>

        {/* ABOUT VIDEO */}
        <div className="about-video-section">
          <div className="video-heading">
            <span className="video-eyebrow">INSIDE THE MAKERS</span>
            <h3>Culture in Motion.</h3>
            <p>
              Discover the creativity, people and ideas behind everything we do.
            </p>
          </div>

          <div className="about-video">
            
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  style={{
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
  }}
>
  <source src="/videos/the-makers.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

            <span className="video-caption">
              THE MAKERS — Create. Connect. Elevate.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
