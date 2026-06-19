import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio" id="work">
      <div className="container">

        <h2>Our Work</h2>

        <div className="projects">

          <div
            className="project"
            style={{ backgroundImage: "url('/images/project1.jpg')" }}
          >
            <div className="overlay">
              <h3>Music Promotion</h3>
            </div>
          </div>

          <div
            className="project"
            style={{ backgroundImage: "url('/images/project2.jpg')" }}
          >
            <div className="overlay">
              <h3>Event Management</h3>
            </div>
          </div>

          <div
            className="project"
            style={{ backgroundImage: "url('/images/project3.jpg')" }}
          >
            <div className="overlay">
              <h3>Brand Campaigns</h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}