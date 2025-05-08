import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <h1 className="why-heading">Why Choose Us</h1>

      {/* Main text area with minus button inside */}
      <div className="input-wrapper">
        <textarea className="why-textarea" placeholder="Mauris vehicula nisi congue?"></textarea>
        <button className="inline-button minus">−</button>
      </div>
      <p className="why-paragraph">
      Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam.
      </p>

      {/* Three text areas with plus buttons inside */}
      {[1, 2, 3].map((item) => (
        <div className="input-wrapper" key={item}>
          <textarea
            className="why-textarea"
            placeholder={`Mauris vehicula nisi congue? ${item}`}
          ></textarea>
          <button className="inline-button plus">+</button>
        </div>
      ))}
    </section>
  );
};

export default WhyChooseUs;
