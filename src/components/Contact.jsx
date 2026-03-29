import React from "react";
const contactText = [
  {
    link: "https://kr.pinterest.com/",
    title: "Continue the Journey",
  },
  {
    link: "https://ko.react.dev/",
    title: "Explore More Mountains",
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact_inner">
        <h2 className="contact_title">Contact</h2>
        <div className="contact_lines top">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="contact_text">
          <div className="text">
            {contactText.map((contact, key) => (
              <div key={key}>
                <a href={contact.link} target="_blank">
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="contact_lines bottom">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
