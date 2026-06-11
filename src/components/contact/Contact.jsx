import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <h2>Contact Me</h2>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}