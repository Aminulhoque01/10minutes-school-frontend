// components/TestimonialCarousel.js
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function TestimonialCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cards = [
    {
      id: 1,
      rating: 5,
      quote: "This course is very helpful for the basic learners.",
      name: "Ofat Ara Mim",
      image: "/avatar1.png",
    },
    {
      id: 2,
      rating: 5,
      quote: "I got a lot of encouragement to learn the language. Thank you so much, Munzeen Apu.",
      name: "Alif Hossain Akash",
      image: "/avatar2.png",
    },
    {
      id: 3,
      rating: 5,
      quote: "Excellent content and great support from the instructors!",
      name: "Sara Ahmed",
      image: "/avatar3.png",
    },
    {
      id: 4,
      rating: 5,
      quote: "The best course I’ve taken so far. Highly recommended!",
      name: "Rashed Khan",
      image: "/avatar4.png",
    },
    {
      id: 5,
      rating: 5,
      quote: "Very interactive and easy to follow. Loved it!",
      name: "Nazia Begum",
      image: "/avatar5.png",
    },
    {
      id: 6,
      rating: 5,
      quote: "Amazing experience, learned a lot in a short time.",
      name: "Tahir Mahmud",
      image: "/avatar6.png",
    },
  ];

  const visibleCards = 2; // Number of cards visible at a time
  let currentIndex = 0;

  const updateCarousel = () => {
    if (carouselRef.current) {
      const cardWidth = 50 / visibleCards; // Each card takes 50% of the container width
      carouselRef.current.style.transition = 'transform 0.5s ';
      carouselRef.current.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
    }
  };

  const nextSlide = () => {
    if (carouselRef.current) {
      currentIndex = (currentIndex + 1) % (cards.length - visibleCards + 1); // Stop at the last set of cards
      updateCarousel();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      currentIndex = (currentIndex - 1 + (cards.length - visibleCards + 1)) % (cards.length - visibleCards + 1); 
      updateCarousel();
    }
  };
 
  return (
    <div className="w-[1100px]   py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">What students are saying</h2>
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex"
          style={{ width: `${cards.length * (50 / visibleCards)}%` }}  
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 px-4"
              style={{ width: `${50 / visibleCards}%` }}  
            >
              <div className="bg-white border border-gray-200  rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full">
             
                  <span className="text-pink-400 text-2xl mr-2">“</span>
               
                <div className="flex mb-4">
                  {[...Array(card.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{card.quote}</p>
                <div className="flex items-center">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-2"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">{card.name}</p>
                    <p className="text-gray-500 text-sm">Student</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        >
          →
        </button>
      </div>
    </div>
  );
}