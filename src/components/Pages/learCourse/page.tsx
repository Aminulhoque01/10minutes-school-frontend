export default function CourseLearn() {
  return (
    <div className="pt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">What you will learn by taking the course</h2>
      <div className="w-[1100px] p-10 bg-white border rounded-lg mt-10 pt-10 mt-10">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" checked />
              <span className="text-gray-600">All the grammar rules and explanations <br /> necessary to write English correctly</span>
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" checked />
              <span className="text-gray-600">How to learn each grammar <br /> rule and apply its proper usage</span>
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" checked />
              <span className="text-gray-600">Ways to remember English grammar <br /> based on different situations</span>
            </div>
          </div>
          <div className="">
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" checked />
              <span className="text-gray-600">Different real examples and explanations <br /> of the same grammar</span>
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" checked />
              <span className="text-gray-600">Rules and examples of relevant English Grammar according to school, <br /> college and university syllabus</span>
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" checked />
              <span className="text-gray-600">Mastering and applying simple to complex aspects <br /> of English Grammar through practice</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}