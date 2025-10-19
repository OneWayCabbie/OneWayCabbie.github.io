import React, { useState } from 'react';
import ContactForm from '../ContactForm';
import EstimateForm from '../home-page/EstimateForm'; // Import EstimateForm
import Logo from '../../assets/icons/logo.svg?raw';
import WhatsAppIcon from '../../assets/icons/whatsapp-svgrepo-com.svg?raw';

const Header: React.FC = () => {
    const [showContactForm, setShowContactForm] = useState(false);
    const [showEstimateForm, setShowEstimateForm] = useState(false); // Add state for EstimateForm

    const nav: (
        | { label: string; onClick: () => void; href?: undefined }
        | { label: string; href: string; onClick?: undefined }
    )[] = [
        {
            label: 'Estimate',
            onClick: () => {
                setShowEstimateForm(true);
            },
        },
        {
            label: 'Contact us',
            onClick: () => {
                setShowContactForm(true);
            },
        },
        // Add other navigation items here if needed
    ];

    // Filter out any "Ticket" option (case-insensitive) in case it's added elsewhere
    const navItems = nav.filter(item => item.label.toLowerCase() !== 'Call');

    return (
        <>
            <div className="container">
                <nav className="flex items-center justify-between pt-6 pb-8 lg:pt-12 lg:pb-[72px]">
                    <a href="/" className="flex text-sm leading-none font-medium tracking-[-0.41px] lg:text-xl lg:leading-none" aria-label="Home page">
                        OneWayCabbie
                        <div
                            
                        />
                    </a>
                    <ul className="flex items-center space-x-4 lg:space-x-10">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                {item.onClick ? (
                                    <button
                                        onClick={item.onClick}
                                        className="flex text-sm leading-none font-medium tracking-[-0.41px] uppercase lg:text-xl lg:leading-none"
                                    > 
                                        {item.label}
                                    </button>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="flex text-sm leading-none font-medium tracking-[-0.41px] uppercase lg:text-xl lg:leading-none"
                                    >
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {showContactForm && (
                <ContactForm onClose={() => setShowContactForm(false)} />
            )}
            {showEstimateForm && (
                <EstimateForm onClose={() => setShowEstimateForm(false)} />
            )}
            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/+917300090835" // TODO: Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="fixed z-40 bottom-6 right-6 w-14 h-14 bg-[#7eec9a] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 lg:bottom-10 lg:right-10 lg:w-16 lg:h-16"
            >
                <span
                    className="block w-12 h-12 bg-contain bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(WhatsAppIcon)}")`,
                    }}
                />
            </a>
        </>
    );
};

export default Header;
