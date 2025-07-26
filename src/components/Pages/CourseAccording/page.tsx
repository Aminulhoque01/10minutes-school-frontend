

"use client"

import { useState } from 'react';
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

type OptionKeys =
    | 'Who is the "Complete English Grammar Course" for?'
    | 'Difficulty level of the "Complete English Grammar Course"'
    | 'What can you do by completing the "Complete English Grammar Course"?'
    | 'Why take the "Complete English Grammar Course"?'
    | 'About the instructor of "Complete English Grammar Course"'
    | 'Last words';

const options: Record<OptionKeys, string[]> = {
    'Who is the "Complete English Grammar Course" for?': [
        'School-College-University Students',
        'Any job exam aspirant, such as: BCS, Teacher Recruitment Exam, Bank Job, Ministry Job, etc.',
        'University admission or admission exam candidate',
        'Government or private employee',
        'Those who are interested in preparing for IELTS/GRE/SAT/GMAT exams',
        'People of any age, class, or profession who are interested in speaking, reading, and writing English correctly',
    ],
    'Difficulty level of the "Complete English Grammar Course"': ['Easy to Intermediate'],
    'What can you do by completing the "Complete English Grammar Course"?': [
        'Improve your grammar skills',
        'Enhance communication abilities',
    ],
    'Why take the "Complete English Grammar Course"?': [
        'Boost career opportunities',
        'Gain confidence in English',
    ],
    'About the instructor of "Complete English Grammar Course"': ['Experienced language expert'],
    'Last words': ['Start learning today!'],
};

export default function CourseAccording() {
    const [selectedOption, setSelectedOption] = useState<OptionKeys | null>(null);

    return (

        <div className='mt-10'>
            <h2 className='text-2xl font-semibold'>Details about the course</h2>
            <div className="w-[1100px] p-6 bg-white border rounded-lg mt-10">
                {Object.keys(options).map((title, index) => (
                    <div key={title} className="mb-4">
                        <div
                            onClick={() => setSelectedOption(selectedOption === title ? null : (title as OptionKeys))}
                            className="w-full text-left p-2 flex justify-between items-center cursor-pointer"
                        >
                            <span>{title}</span>
                            {selectedOption === title ? <MinusOutlined /> : <PlusOutlined />}
                        </div>
                        <div className="border-b border-dashed border-gray-300 w-full mt-1">

                        </div>

                        {selectedOption === title && (
                            <ul className="mt-2 pl-4">
                                {options[title as OptionKeys].map((item, index) => (
                                    <li key={index} className="text-gray-700 py-1">
                                        • {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>

    );
}