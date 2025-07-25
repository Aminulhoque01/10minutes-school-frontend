
import CourseTabs from "./CourseTabs";

export default function CourseWraper() {
    return (

        <div className="w-full container px-10 ">
            {/* Left Side - Course Tabs */}

            <CourseTabs />
            <h2 className="text-lg font-semibold text-gray-800 mb-4 mt-10">Course instructor</h2>
            <div className="w-[1100px]  space-y-10 bg-white border border-gray-200 rounded-lg shadow-sm p-10 mb-10">

                <div className="p-5">
                    <div className="flex items-center">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Instructor"
                            className="w-12 h-12 rounded-full mr-4 bg-yellow-300"
                        />
                        <div>
                            <p className="text-gray-900 font-medium">Munzeereen Shahid <span className="text-sm text-gray-500">Oxford (UK)</span></p>
                            <p className="text-sm text-gray-600">
                                MSc (English), University of Oxford (UK); BA, MA (English), University of Dhaka; IELTS: 8.5
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-lg font-semibold mb-4">How the course is laid out</h2>
            <div className="w-[1100px]  bg-gray-800 text-white rounded-lg shadow-sm p-6 mt-10 p-10">
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700 p-3 rounded-lg flex items-center">
                        <span className="text-red-500 text-xl mr-3">▶️</span>
                        <div>
                            <p className="text-sm font-medium">৯০টি মিনিমাল টকিং (লেকচার)</p>
                            <p className="text-xs text-gray-300">
                                বাড়তি উপাদান যুক্ত পারিপার্শ্বিক ইন্টারঅ্যাকটিভ কার্ডস নিয়ে গড়ে উঠেছে কোর্সটি।
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-700 p-3 rounded-lg flex items-center">
                        <span className="text-blue-500 text-xl mr-3">📖</span>
                        <div>
                            <p className="text-sm font-medium">Practice Centered (নোটস)</p>
                            <p className="text-xs text-gray-300">
                                অ্যানালিটিক জীবন বাক্যত ইন্টারঅ্যাকটিভ কার্ডস
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-700 p-3 rounded-lg flex items-center">
                        <span className="text-purple-500 text-xl mr-3">📋</span>
                        <div>
                            <p className="text-sm font-medium">অ্যানালিটিক & নোট কুইজ</p>
                            <p className="text-xs text-gray-300">
                                গড়ে উঠেছে কোর্সটি—৪৮ মাসে নিজেকে যাচাই করুন।
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-700 p-3 rounded-lg flex items-center">
                        <span className="text-red-500 text-xl mr-3">🎙️</span>
                        <div>
                            <p className="text-sm font-medium">নিজে থেকে কাজ শিখে</p>
                            <p className="text-xs text-gray-300">
                                সাধারণ কাজ ক্ষেত্রে অংশগ্রহণ তথ্যের কারণে ঘরে বসে—৪৮ মাসের মধ্যে।
                            </p>
                        </div>
                    </div>
                </div>
            </div>




        </div>

    );
}