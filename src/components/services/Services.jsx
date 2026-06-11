import "./Services.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">

        <h2>What I Do</h2>

        <div className="service-grid">

          <div className="card">
            <h3>Web Design</h3>
            <p>Modern, responsive and user-focused designs.</p>
          </div>

          <div className="card">
            <h3>Web Development</h3>
            <p>Fast and scalable websites using modern tools.</p>
          </div>

          <div className="card">
            <h3>UI/UX Design</h3>
            <p>Clean interfaces with great user experience.</p>
          </div>

        </div>

      </div>
    </section>
  );
}