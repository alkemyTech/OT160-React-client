import React, { useEffect, useState } from 'react';
import { getTestimonials } from '../../Services/testimonialsService';
import './testimonials.css';

function testimonial(info) {
  const { name, image, description } = info;

  return (
    <div className="testimonial-card">
      <img className="testimonial-image" alt="speaker" src={image} />
      <p className="testimonial-name">{name}</p>
      <p className="testimonial-description">{description}</p>
    </div>
  );
}

function TestimonialsDisplay() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getAllTestimonials();
  }, []);

  async function getAllTestimonials() {
    const { data } = await getTestimonials();
    const content = data.filter(
      (t) => t.group_id !== null && t.group_id !== 49
    );
    setTestimonials(content);
  }
  return (
    <div className="testimonials-grid">
      {testimonials?.map((tes) => testimonial(tes))}
    </div>
  );
}

export default TestimonialsDisplay;
