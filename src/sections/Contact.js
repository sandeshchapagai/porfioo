import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { SectionHeading } from "./Terminal";
import { contactConfig, socialprofils } from "../content_option";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ sending: false, msg: "", type: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // EmailJS is "ready" once real keys replace the placeholders in content_option.
  const emailjsReady =
    contactConfig.YOUR_SERVICE_ID &&
    contactConfig.YOUR_SERVICE_ID !== "service_id" &&
    contactConfig.YOUR_TEMPLATE_ID !== "template_id" &&
    contactConfig.YOUR_USER_ID !== "user_id";

  const onSubmit = (e) => {
    e.preventDefault();

    if (!emailjsReady) {
      // No email service configured yet — open the visitor's mail client, prefilled.
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "someone"}`);
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name}${form.email ? ` <${form.email}>` : ""}`
      );
      window.location.href = `mailto:${contactConfig.YOUR_EMAIL}?subject=${subject}&body=${body}`;
      setStatus({ sending: false, msg: "Opening your email app…", type: "ok" });
      return;
    }

    setStatus({ sending: true, msg: "", type: "" });
    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          to_name: contactConfig.YOUR_EMAIL,
          message: form.message,
        },
        contactConfig.YOUR_USER_ID
      )
      .then(
        () => {
          setStatus({ sending: false, msg: "Message sent — I'll reply soon.", type: "ok" });
          setForm({ name: "", email: "", message: "" });
        },
        () =>
          setStatus({
            sending: false,
            msg: `Send failed — email me directly at ${contactConfig.YOUR_EMAIL}`,
            type: "err",
          })
      );
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading index="06" title="Get in touch" />

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">{contactConfig.description}</p>

            <div className="contact-details">
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="contact-row">
                <span className="contact-key">Email</span>
                <span className="contact-val">{contactConfig.YOUR_EMAIL}</span>
              </a>
              <div className="contact-row">
                <span className="contact-key">Phone</span>
                <span className="contact-val">{contactConfig.YOUR_FONE}</span>
              </div>
              <div className="contact-row">
                <span className="contact-key">Location</span>
                <span className="contact-val">Kathmandu, Nepal</span>
              </div>
            </div>

            <div className="contact-social">
              <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={socialprofils.website} target="_blank" rel="noopener noreferrer">Website</a>
            </div>
          </div>

          <form className="contact-form card" onSubmit={onSubmit}>
            <label className="field">
              <span className="field-label">Name</span>
              <input name="name" value={form.name} onChange={onChange} required autoComplete="off" />
            </label>
            <label className="field">
              <span className="field-label">Email</span>
              <input name="email" type="email" value={form.email} onChange={onChange} required autoComplete="off" />
            </label>
            <label className="field">
              <span className="field-label">Message</span>
              <textarea name="message" rows="5" value={form.message} onChange={onChange} required />
            </label>
            <button className="btn btn-primary" type="submit" disabled={status.sending}>
              {status.sending ? "Sending…" : "Send message"}
            </button>
            {status.msg && (
              <p className={`form-status ${status.type}`}>{status.msg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
