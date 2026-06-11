import "./Process.css";

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">

        <h2>My Process</h2>

        <div className="steps">

          <div className="step">
            <span>01</span>
            <h3>Discovery</h3>
            <p>Understanding your goals and audience.</p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Design</h3>
            <p>Creating wireframes and UI concepts.</p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Development</h3>
            <p>Turning design into a real website.</p>
          </div>

        </div>

      </div>
    </section>
  );
}