import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import "./Contact.css";

function encode(data) {
  return new URLSearchParams(data).toString();
}

export const Contact = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    const form = formRef.current;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // IMPORTANTE: o "form-name" precisa bater com o do index.html ("contato")
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contato", ...data }),
      });

      Swal.fire({
        title: "Message was sent!",
        icon: "success",
        timer: 2500,
        showConfirmButton: false,
      });

      form.reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">
        Get in <span>Touch</span>
      </h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            <strong>Email:</strong> juliabecho@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (778) 246-5707
          </p>
          <p>
            <strong>Location:</strong> Vancouver, BC, Canada
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitch"></i></a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form"
          name="contato"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          {/* Necessário pro Netlify associar a submissão a este form */}
          <input type="hidden" name="form-name" value="contato" />

          {/* Honeypot anti-spam (oculto via CSS) */}
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <h3>Send a Message</h3>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />

          {/* opcional: marque / desmarque newsletter */}
          {/* <label className="checkbox">
            <input type="checkbox" name="receiveNews" defaultChecked />
            I want to receive news
          </label> */}

          <button type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;