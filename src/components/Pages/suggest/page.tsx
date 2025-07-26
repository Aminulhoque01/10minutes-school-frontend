import React from 'react';

export default function CourseDisplay() {
  const courses = [
    {
      title: "Spoken+Grammar Bundle",
      instructor: "Munzeen Shahid",
      price: 3300,
      imageSrc: "https://via.placeholder.com/256x192",
    },
    {
      title: "IELTS Course by Munzeen Shahid",
      instructor: "Munzeen Shahid",
      price: 3850,
      imageSrc: "https://via.placeholder.com/256x192",
    },
    {
      title: "Spoken English at home",
      instructor: "Munzeen Shahid",
      price: 950,
      imageSrc: "https://via.placeholder.com/256x192",
    },
    {
      title: "English Master Bundle",
      instructor: "Munzeen Shahid",
      price: 2540,
      imageSrc: "https://via.placeholder.com/256x192",
    },
    
   
  ];

  return (
    <div className="p-6">
      <h2 className="text-gray-600 text-sm mb-4">Some more courses for you</h2>
      <div className="w-full flex space-x-4 overflow-x-auto pb-4">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden w-80 flex-shrink-0">
            <div className="relative">
              <img src={course.imageSrc} alt={course.title} className="w-full h-48 object-cover" />
              <div className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">NEW</div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{course.instructor}</p>
              <p className="text-green-600 font-medium">৳ {course.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}