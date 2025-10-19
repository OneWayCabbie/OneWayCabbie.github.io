import React from 'react';
import './Marquee.css';

const Marquee: React.FC = () => {
    const text = 'One Way Ride → One Way Cab ✳ One Way Taxi →';
    return (
        <div className="marquee-container">
            <div className="marquee-content text-[8rem] font-medium text-black">
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default Marquee;