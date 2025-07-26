// components/InfoPage.js
import React from 'react';

export default function FaqInfo() {
    return (
        <div className="w-[1100px] p-6 rounded-lg  ">
            {/* Required for class section */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Required for class</h2>
                <div className='border p-10'>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li className="flex items-center">
                            <input type="checkbox" checked className="mr-2" />
                            <span>Internet connection (WiFi or mobile internet)</span>
                        </li>
                        <li className="flex items-center">
                            <input type="checkbox" checked className="mr-2" />
                            <span>Smartphone or PC</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* How to pay section */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">How to pay</h2>
                <p className="text-green-600 mb-2">
                    <a href="#" className="underline">Watch this video</a> to learn more about how to make a payment.
                </p>
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                    {/* Placeholder for video or payment form */}
                    <p className="text-gray-600 text-center">Payment video placeholder</p>
                </div>
            </div>

            {/* Frequently asked questions section */}
            <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Frequently asked questions</h2>
                <div className="space-y-4 border p-6   rounded-lg">
                    <details className="group">
                        <summary className="text-gray-600 font-medium cursor-pointer py-2 hover:text-gray-800 transition-colors">
                            How do I purchase the course and get started?
                        </summary>
                        <ul className="list-disc list-inside text-gray-600 ml-6 mt-2 space-y-1">
                            <li>Click on the 'Buy Course' button</li>
                            <li>Log in with your phone number or email</li>
                            <li>Once logged in, click on the 'Proceed' button</li>
                            <li>Choose your preferred payment method and click on the 'Make Payment' button</li>
                            <li>After paying using bKash, you can save the bKash number for future payments</li>
                            <li>Once the payment is complete, you can start the course directly by clicking on the 'Start Course' button</li>
                            <li>You will see the course purchased in the 'My Courses' section of your profile</li>
                        </ul>
                    </details>
                    <details className="group">
                        <summary className="text-gray-600 font-medium cursor-pointer py-2 hover:text-gray-800 transition-colors">
                            Where should I contact for any technical issues (forgot password, password change, course refund, etc.)?
                        </summary>
                        <p className="text-gray-600 ml-6 mt-2">Contact support at support@example.com</p>
                    </details>
                    <details className="group">
                        <summary className="text-gray-600 font-medium cursor-pointer py-2 hover:text-gray-800 transition-colors">
                            What grade level of students can take this course?
                        </summary>
                        <p className="text-gray-600 ml-6 mt-2">Beginner to intermediate</p>
                    </details>
                    <details className="group">
                        <summary className="text-gray-600 font-medium cursor-pointer py-2 hover:text-gray-800 transition-colors">
                            How do students contact the teacher if they have questions or don't understand?
                        </summary>
                        <p className="text-gray-600 ml-6 mt-2">Via email or the course discussion forum</p>
                    </details>
                    <details className="group">
                        <summary className="text-gray-600 font-medium cursor-pointer py-2 hover:text-gray-800 transition-colors">
                            Will I be able to take IELTS grammar preparation by taking this course?
                        </summary>
                        <p className="text-gray-600 ml-6 mt-2">Yes, with additional practice</p>
                    </details>
                </div>
                <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">All questions and answers</a>
            </div>
        </div>
    );
}