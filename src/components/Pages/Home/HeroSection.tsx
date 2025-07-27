
export default function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-blue-900 text-white flex items-center justify-between p-6 h-[400px]">
      <div className="md:w-[75%] container mx-auto space-y-10  mt-20 pt-20">
        <div className="flex justify-between mt-20 pt-20">
          <div className="mt-20">
            <div className="w-1/2 mt-20 pt-20">
              <h2 className="text-3xl font-bold">বাংলা Spoken English</h2>
              <div className="flex items-center">
                <span className="text-yellow-400 text-xl">★★★★★</span>
                <span className="ml-2 text-sm">(76.5% শিক্ষার্থী কলেজ ও বিশ্ববিদ্যালয়)</span>
              </div>
              <p className="text-sm mt-2">
                Speak English fluently and confidently in any situation, without struggling with complex grammar and vocabulary. Join the country’s most popular Spoken English Course and learn under the guidance of Munzeereen Shahid.
              </p>
            </div>
          </div>
          <div className="lg:w-1/4   mt-20 pt-20">
            <div className="bg-white border border-gray-200 mt-20">
              <div className=" bg-blue-900 p-4 rounded-lg ">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Course Instructor"
                  className="w-1/3 float-left mr-4 rounded-lg"
                />
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-yellow-300">বাকু মিলে কথা বলবেন?</h1>
                  <p className="text-lg">কিছু বাত্রযোগী কথা?</p>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-2">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                    Play
                  </button>
                </div>
              </div>

              {/* Video Thumbnails */}
              <div className="flex justify-around mt-4">
                <img
                  src="https://via.placeholder.com/100x60"
                  alt="Video 1"
                  className="rounded"
                />
                <img
                  src="https://via.placeholder.com/100x60"
                  alt="Video 2"
                  className="rounded"
                />
                <img
                  src="https://via.placeholder.com/100x60"
                  alt="Video 3"
                  className="rounded"
                />
                <img
                  src="https://via.placeholder.com/100x60"
                  alt="Video 4"
                  className="rounded"
                />
              </div>
              {/* Course Details */}
              <div className="mt-6 p-4 bg-white text-black rounded-lg">
                <h2 className="text-2xl font-bold mb-2">৳1950</h2>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                  Enroll
                </button>
                <h3 className="text-xl mt-4">এই কোর্সের বা অফার</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>Total Enrolled: 188785</li>
                  <li>Time Required: 20 hours</li>
                  <li>70 Videos</li>
                  <li>9 Set Quiz</li>
                  <li>70 Notes</li>
                  <li>57 Flashcards</li>
                  <li>Course Validity: Lifetime</li>
                  <li>Facebook Support Group</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}