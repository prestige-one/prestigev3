"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "@/components/homes/home/testimonial-slider.css";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
};

// Sample/placeholder content only — swap for real client testimonials later.
const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The team exceeded our expectations at every step. The quality, transparency, and attention to detail are truly unmatched.",
    name: "Arjun Mehta",
    role: "Homeowner",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "From the first consultation to handover, the experience was seamless. Their commitment to excellence gives me complete peace of mind.",
    name: "Priya Sharma",
    role: "NRI Investor",
    rating: 5,
  },
  {
    id: "t3",
    quote: "Professional, reliable, and innovative — they delivered a space that perfectly reflects our vision and values.",
    name: "Rohit Bansal",
    role: "Business Owner",
    rating: 5,
  },
  {
    id: "t4",
    quote: "Communication was constant and honest throughout construction. No surprises, just steady, visible progress.",
    name: "Sara Al Farsi",
    role: "Homeowner",
    rating: 5,
  },
  {
    id: "t5",
    quote: "The investment returns have outpaced every projection we were given. They deliver on exactly what they promise.",
    name: "Daniel Ferreira",
    role: "Investor",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="po-testimonial-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6-5.9-3.3-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.7z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Testimonial carousel — Swiper (centeredSlides, loop, autoplay) handles the
 * sliding/transition entirely; the "active card is bigger, side cards recede"
 * look is pure CSS driven off Swiper's own swiper-slide-active/prev/next
 * classes (see testimonial-slider.css), applied to an inner card element
 * rather than the slide itself so it never fights Swiper's own transform.
 * All classNames are "po-testimonial-*" scoped so this can't collide with
 * any other Swiper instance on the page.
 */
const TestimonialSliderArea = () => {
  return (
    <section className="po-testimonial-section" aria-labelledby="testimonial-heading">
      <div className="container">
        <div className="po-testimonial-heading">
          <p className="po-testimonial-kicker">Client Testimonials</p>
          <div className="po-testimonial-kicker-divider" aria-hidden="true">
            <span className="po-testimonial-kicker-line" />
            <span className="po-testimonial-kicker-diamond" />
            <span className="po-testimonial-kicker-line" />
          </div>
          <h2 id="testimonial-heading">What Our Clients Say</h2>
          <p className="po-testimonial-sub">
            Real experiences from discerning clients who trust us to build more than just structures.
          </p>
        </div>

        <div className="po-testimonial-carousel">
          <button type="button" className="po-testimonial-arrow po-testimonial-arrow--prev" aria-label="Previous testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            centeredSlides
            slidesPerView={1}
            spaceBetween={24}
            speed={700}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            navigation={{
              prevEl: ".po-testimonial-arrow--prev",
              nextEl: ".po-testimonial-arrow--next",
            }}
            pagination={{
              el: ".po-testimonial-dots",
              clickable: true,
              bulletClass: "po-testimonial-dot",
              bulletActiveClass: "is-active",
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 1.4, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="po-testimonial-swiper"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="po-testimonial-card">
                  <span className="po-testimonial-quote-mark" aria-hidden="true">
                    &rdquo;
                  </span>
                  <div className="po-testimonial-person">
                    <span className="po-testimonial-name">{testimonial.name}</span>
                    <span className="po-testimonial-role">{testimonial.role}</span>
                  </div>
                  <StarRating rating={testimonial.rating} />
                  <div className="po-testimonial-divider" />
                  <p className="po-testimonial-quote">{testimonial.quote}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button type="button" className="po-testimonial-arrow po-testimonial-arrow--next" aria-label="Next testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="po-testimonial-dots" role="tablist" aria-label="Testimonials" />
      </div>
    </section>
  );
};

export default TestimonialSliderArea;
