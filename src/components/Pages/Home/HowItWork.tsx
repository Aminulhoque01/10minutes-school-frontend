// pages/how-it-works.js
"use clinet"
import Image from 'next/image';
import user from '@/assets/hero/userSearch.gif'
import click from '@/assets/hero/click.png'
import hand from '@/assets/hero/hand.png'
import doller from '@/assets/hero/doller.png'
import { useState } from 'react';

const HowItWorks = () => {
  const [isActive, setIsActive] = useState<number | null>(0);


  const accordionData = [
    {
      title: "Suchen",
      image: user,
      subtitle:
        "Durchsuchen Sie die Liste der verfügbaren Dienstleister nach Kategorie oder Beruf. Sehen Sie sich Profile an, prüfen Sie Servicedetails und finden Sie den passenden Fachmann für Ihre Bedürfnisse.",

      colorBorder: "border border-[#896DAB",
    },

    {
      title: "Buch",
      image: click,
      subtitle:
        "Durchsuchen Sie die Liste der verfügbaren Dienstleister nach Kategorie oder Beruf. Sehen Sie sich Profile an, prüfen Sie Servicedetails und finden Sie den passenden Fachmann für Ihre Bedürfnisse.",

      colorBorder: "border border-[#896DAB",
    },
    {
      title: "Erhalten",
      image: hand,
      subtitle:
        "Durchsuchen Sie die Liste der verfügbaren Dienstleister nach Kategorie oder Beruf. Sehen Sie sich Profile an, prüfen Sie Servicedetails und finden Sie den passenden Fachmann für Ihre Bedürfnisse.",

      colorBorder: "border border-[#896DAB",
    },
    {
      title: "Zahlung",
      image: doller,
      subtitle:
        "Durchsuchen Sie die Liste der verfügbaren Dienstleister nach Kategorie oder Beruf. Sehen Sie sich Profile an, prüfen Sie Servicedetails und finden Sie den passenden Fachmann für Ihre Bedürfnisse.",

      colorBorder: "border border-[#896DAB]",
    },
  ];

  const handleToggle = (idx: number) => {
    setIsActive((prevIdx) => (prevIdx === idx ? null : idx)); // Toggle the visibility of the item
  };

  return (
    <div className="container mx-auto  py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Wie es funktioniert</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-3">
        {/* First Column (Long Box) */}
        <div className="mx-auto my-24 md:my-10 flex w-fit rotate-90   md:rotate-0">

          {accordionData.map((data, idx) => (
            <div key={idx} className="flex space-x-2">
              {/* Button to toggle accordion state */}

              <button
                onClick={() => handleToggle(idx)}
                className={`${isActive === idx ? "hidden" : ""} flex flex-col h-full w-[190px] items-center border border-[#896DAB] ml-2 space-y-20`}
              >
                <h2 className="text-center dark:text-black lg:text-2xl pt-10">{data.title}</h2>
                <br />
                <br />
                <br />
                <Image src={data.image} alt="image" className="lg:w-full p-5 object-cover pt-10" />
              </button>



              {/* Accordion Content Section */}
              <div
                className={`grid place-content-center ${isActive === idx
                  ? "opacity-1 w-[220px] xl:w-[970px] px-5  translate-x-0"
                  : "w-0 scale-0 opacity-0 translate-x-[100%]"
                  }  duration-1000 ease-in-out -z-20 -rotate-90 border border-[#896DAB]   text-black md:rotate-0`}
              >
                <div className="flex items-center mr-1 ">
                  {/* Conditional Rendering for Text content after clicking */}
                  {isActive === idx && (
                    <>
                      {/* Show the image again inside this div */}
                      <div className="mb-4">
                        <Image
                          src={data.image} // Replace with different images for each section
                          alt="image"
                          // width={100}
                          // height={100}
                          className="w-[1000px] h-[400px]  p-5  object-fill"
                        />
                      </div>
                      <div>
                        <h2 className="font-black dark:text-black lg:text-2xl ">{data?.title}</h2>
                        <p className="dark:text-gray-500 ">{data?.subtitle}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;







