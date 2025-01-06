import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Rashid Khan",
      title: "Professional Photographer",
      text: "Capturing Moments Beautifully",
      image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Sarah Ali",
      title: "Event Photographer",
      text: "Moments that Matter",
      image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Arif Hossain",
      title: "Freelance Photographer",
      text: "Stories Through Lenses",
      image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Nadia Rahman",
      title: "Portrait Artist",
      text: "Art Through Photography",
      image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "John Doe",
      title: "Wedding Photographer",
      text: "Memories that Last a Lifetime",
      image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    setActiveTestimonial(testimonials[currentIndex]);
  }, [currentIndex]);

  const getVisibleTestimonials = () => {
    const displayedTestimonials = [];
    for (let i = 0; i < 3; i++) {
      displayedTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return displayedTestimonials;
  };

  const renderCarousel = () => {
    return getVisibleTestimonials().map((testimonial, index) => {
      const isMiddle = index === 1;
      return (
        <img
          key={index}
          src={testimonial.image}
          alt={testimonial.name}
          className={`${
            isMiddle
              ? "w-24 h-24 rounded-full border-4 border-yellow-500 transition-all duration-300"
              : "w-16 h-16 rounded-full border-2 border-gray-300 transition-all duration-300"
          }`}
          onClick={() => {
            setActiveTestimonial(testimonial);
          }}
        />
      );
    });
  };

  return (
    <section>
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">What Our Community Says About Us</h2>

        {/* Headshot Slider */}
        <div className="flex justify-center items-center space-x-4 relative overflow-hidden">
          <div id="carousel" className="flex items-center space-x-4">
            {renderCarousel()}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">{`${activeTestimonial.name}, ${activeTestimonial.title}`}</h3>
          <p className="text-gray-600 mt-2">{activeTestimonial.text}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
