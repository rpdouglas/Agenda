import React, { useState } from 'react';
import { copingStrategies } from '../utils/data.js';
import { ArrowLeftIcon, ShieldIcon, MapPinIcon, PhoneIcon } from '../utils/icons.jsx';

// Map string icon names from data.js to the imported JSX components
const iconMap = {
    MapPinIcon: MapPinIcon,
    PhoneIcon: PhoneIcon,
    ShieldIcon: ShieldIcon,
};

// Create the final list of cards with actual JSX icon components assigned
const allCopingCards = copingStrategies.map(card => ({
    ...card,
    icon: iconMap[card.icon] || ShieldIcon // Fallback to ShieldIcon
}));


export const CopingCards = ({ onJournal }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const card = allCopingCards[currentIndex];
    
    // Safety check for empty state
    if (!card) {
        return (
            <div className="flex items-center justify-center h-full p-6 bg-white rounded-xl shadow-lg">
                <p className="text-gray-500">No coping cards loaded. Check utils/data.js.</p>
            </div>
        );
    }

    const showNextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allCopingCards.length);
    };

    const showPreviousCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + allCopingCards.length) % allCopingCards.length);
    };

    const CardIconComponent = card.icon;

    return ( 
        <div className="flex flex-col items-center justify-center h-full p-4 animate-fade-in"> 
            <div 
                className={`p-8 rounded-xl shadow-xl w-full max-w-md text-center flex-grow flex flex-col justify-between 
                           bg-gradient-to-br ${card.color} text-gray-900 border border-gray-100`}
            >
                <div className="flex justify-between items-start mb-4">
                    {/* Previous Button */}
                    <button 
                        onClick={showPreviousCard} 
                        className="text-gray-700 hover:text-black p-1 rounded-full bg-white/70 shadow-md transition-transform transform hover:scale-110" 
                        aria-label="Previous card"
                    >
                        <ArrowLeftIcon />
                    </button>
                    
                    {/* Card Info */}
                    <div className="flex flex-col items-center">
                        <CardIconComponent className="w-8 h-8 text-teal-800 mb-2" />
                        <p className="text-xs font-semibold uppercase tracking-wider text-teal-800">{card.category}</p>
                    </div>
                    
                    {/* Next Button */}
                    <button 
                        onClick={showNextCard} 
                        className="text-gray-700 hover:text-black p-1 rounded-full bg-white/70 shadow-md transition-transform transform hover:scale-110" 
                        aria-label="Next card"
                    >
                        <ArrowLeftIcon style={{ transform: 'rotate(180deg)' }} />
                    </button>
                </div>
                
                {/* Card Content */}
                <div className="flex flex-col justify-center flex-grow">
                    <h2 className="text-3xl font-bold text-teal-900 mb-4">{card.title}</h2>
                    <p className="text-gray-800 text-lg">{card.description}</p>
                </div>

                {/* Card Counter */}
                <p className="text-xs text-gray-600 mt-4">Card {currentIndex + 1} of {allCopingCards.length}</p>

            </div> 
            
            {/* Action Button: Calls parent function to open Journal with a pre-filled template */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-md"> 
                <button 
                    onClick={() => onJournal(card)} 
                    className="w-full bg-white text-teal-600 border-2 border-teal-600 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-50 transition-colors"
                >
                    Journal on This
                </button>
            </div> 
        </div> 
    );
};
