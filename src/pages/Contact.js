import React from "react";
import TopMenu from "../components/TopMenu";

const Contact = () => {
  return (
    <div id="contact">
      <TopMenu data={true} />
      <div className="content">
        <form action="">
          <h3>Leave us your info</h3>
          <div className="inputItem">
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="inputItem">
            <input type="text" placeholder="Your Email" />
          </div>
          <div className="inputItem">
            <textarea name="" id="" placeholder="Your Message"></textarea>
          </div>
          <button type="button">SUBMIT</button>
        </form>
        <div className="address">
          <div className="addressItem">
            <h3>ADDRESS</h3>
            <p>
              710/6 Phan Van Tri Street, Ward 10, Go Vap District, Ho Chi Minh
              City, Vietnam
            </p>
          </div>
          <div className="addressItem">
            <h3>PHONE</h3>
            <p>+84 961 426 689</p>
          </div>
          <div className="addressItem">
            <h3>EMAIL</h3>
            <p>niaconcept.contact@gmail.com</p>
          </div>
          <div className="addressItem">
            <h3>LOCATION</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.462979601659!2d106.67678037605428!3d10.775808489372915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f94067cb1ff%3A0xe9caabe9a1e623c8!2zT3JjaGlkIDEgSMOgIMSQw7QgQ2VudHJvc2E!5e0!3m2!1sen!2s!4v1753411364149!5m2!1sen!2s"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
