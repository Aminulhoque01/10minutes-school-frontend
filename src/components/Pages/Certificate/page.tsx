// components/Certificate.js
import Image from 'next/image';
import certificate from '@/assets/hero/10MSCertificate.jpg'

export default function Certificate() {
    return (

        <div className='mt-10'>
            <h2 className='text-2xl font-semibold'>Course Certificate</h2>
            <div className="w-[1100px] border rounded-lg mt-10">

                <div className="  p-10  text-gray-800  mt-10">
                    {/* Header Section */}
                    <div className="mb-6">
                        <p className="text-sm text-gray-600">
                            Upon successful completion of the course, you will receive a certificate that you can:
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                            <li>✓ You can add it to your CV.</li>
                            <li>✓ You can share directly to your LinkedIn profile.</li>
                            <li>✓ You can share on Facebook with one click.</li>
                        </ul>
                    </div>

                    {/* Certificate Body */}
                    <div className='border'>
                        <img src={certificate.src} />
                    </div>



                </div>
            </div>
        </div>


    );
}