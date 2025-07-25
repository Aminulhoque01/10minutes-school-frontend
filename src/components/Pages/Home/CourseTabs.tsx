"use client";
import { useState } from "react";

export default function CourseCarousel() {
  const tabs = [
    "Course instructor",
    "The course is laid out",
    "What you will learn by doing the course",
    "Course details",
    "Content pre",
    "Course certificate",
    "Students opinion",
    "Frequently Ask Questions"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3; // Show 3 items at a time
  const maxIndex = Math.ceil(tabs.length / itemsPerView) - 1; // Total groups: ceil(8/3) - 1 = 2

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="w-[1100px]">
      <div className="relative overflow-hidden">
        {/* Carousel container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="md:shrink-0 p-4"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="text-center ">
                <h2 className="text-small  ">{tab}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full   transition ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition ${
            currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

    
       
    </div>
  );
}
