
"use client";

import { useState } from "react";

type ContentItem = {
    title: string;
    items: string[];
};

const contentData: ContentItem[] = [
    { title: "Pre-Assessment", items: ["Initial evaluation test"] },
    {
        title: 'English Grammar at Home | Exclusive Support Group',
        items: ["Online learning sessions", "Dedicated support"],
    },
    { title: "Tense", items: ["Present", "Past", "Future"] },
    { title: "Questions", items: ["Yes/No questions", "Wh-questions"] },
    { title: "Verbs", items: ["Action verbs", "Linking verbs"] },
    { title: "Nouns", items: ["Common nouns", "Proper nouns"] },
    { title: "Adjectives", items: ["Descriptive", "Comparative"] },
    { title: "Adverbs", items: ["Manner", "Time"] },
    { title: "Pronouns", items: ["Personal", "Reflexive"] },
    { title: "Prepositions", items: ["Time", "Place"] },
];

export default function CourseContent() {
    const [showAll, setShowAll] = useState(false);
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
    const visibleContent = showAll ? contentData : contentData.slice(0, 6);

    const toggleSection = (title: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <div className="mt-10">
            <h1 className="text-2xl font-semibold">Content preview</h1>
            <div className="w-[1100px]  p-6  rounded-lg  border border-gray-200 mt-10">
                {visibleContent.map((item, index) => (
                    <div key={index} className="mb-4">
                        <button
                            onClick={() => toggleSection(item.title)}
                            className="w-full text-left p-2 flex justify-between items-center text-gray-800"
                        >
                            <span>{item.title}</span>
                            <span className="text-gray-400">{openSections[item.title] ? "▲" : "▼"}</span>
                        </button>
                        {openSections[item.title] && (
                            <ul className="mt-2 pl-4 text-gray-700">
                                {item.items.map((subItem, subIndex) => (
                                    <li key={subIndex} className="py-1">
                                        • {subItem}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
                {contentData.length > 6 && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="mt-4 px-4 py-2  rounded-full border transition-colors"
                    >
                        {showAll ? "Hide" : "All content"}
                    </button>
                )}
            </div>
        </div>
    );
}