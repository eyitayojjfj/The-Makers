import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio" id="work">
      <div className="container">

        <h2>Our Work</h2>
        <div className="wk-images">
           <div className="work-image work-large">
            <img src="/images/201.jpeg" alt="The Makers project 1" />
          </div>

          <div className="work-image">
            <img src="/images/202.jpeg" alt="The Makers project 2" />
          </div>

          <div className="work-image">
            <img src="/images/203.jpeg" alt="The Makers project 3" />
          </div>

          <div className="work-image work-tall">
            <img src="/images/204.jpeg" alt="The Makers project 4" />
          </div>

          <div className="work-image">
            <img src="/images/205.jpeg" alt="The Makers project 5" />
          </div>

          <div className="work-image work-wide">
            <img src="/images/206.jpeg" alt="The Makers project 6" />
          </div>

          <div className="work-image">
            <img src="/images/207.jpeg" alt="The Makers project 7" />
          </div>

          <div className="work-image work-tall">
            <img src="/images/208.jpeg" alt="The Makers project 8" />
          </div>

          <div className="work-image">
            <img src="/images/209.jpeg" alt="The Makers project 9" />
          </div>

          <div className="work-image">
            <img src="/images/210.jpeg" alt="The Makers project 10" />
          </div>

          <div className="work-image work-wide">
            <img src="/images/211.jpeg" alt="The Makers project 11" />
          </div>

        </div>

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