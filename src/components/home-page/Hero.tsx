import React, { useEffect, useState } from 'react';
import ContentManager from '../ContentManager';
import { BCMSImage } from '@thebcms/components-react';
import Marquee from './Marquee';
import type {
    PropMediaDataParsed,
    PropRichTextDataParsed,
} from '@thebcms/types';
import type { ClientConfig } from '@thebcms/client';

interface Props {
    gallery: PropMediaDataParsed[];
    description: PropRichTextDataParsed;
    cover: PropMediaDataParsed;
    bcmsConfig: ClientConfig;
}

const HomeHero: React.FC<Props> = ({
    gallery,
    description,
    cover,
    bcmsConfig,
}) => {
    const [timerOutput, setTimerOutput] = useState('Loading');

    useEffect(() => {
        const untilEvent = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = untilEvent.getTime() - now;

            const hours = String(
                Math.floor(
                    (distance & (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                ),
            ).padStart(2, '0');
            const minutes = String(
                Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            ).padStart(2, '0');
            const seconds = String(
                Math.floor((distance % (1000 * 60)) / 1000),
            ).padStart(2, '0');

            setTimerOutput(`${hours}:${minutes}:${seconds}`);

            if (distance < 0) {
                clearInterval(timer);
                setTimerOutput('EXPIRED');
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <section className="overflow-hidden">
            <Marquee />
            <div className="container mt-10 mb-10 lg:mt-[55px] lg:mb-16">
                <div className="lg:grid lg:grid-cols-[1fr,auto] lg:items-center lg:gap-x-[30px] lg:gap-y-[55px]">
                    <div className="flex items-center gap-1 max-lg:mb-6 lg:gap-2.5 lg:col-start-1 lg:row-start-1">
                        {gallery.map((image, index) => (
                            <BCMSImage
                                key={index}
                                media={image}
                                clientConfig={bcmsConfig}
                                className={`w-10 h-10 object-cover lg:w-[128px] lg:h-[128px] ${
                                    index % 2 !== 0 ? '-rotate-[9deg]' : ''
                                }`}
                            />
                        ))}
                    </div>
                    <ContentManager
                        items={description.nodes}
                        className="[&_strong]:text-appText [&_strong]:font-medium text-sm leading-[1.4] tracking-[-0.8px] text-appGray-500 max-lg:mb-8 lg:col-start-1 lg:row-start-2 lg:text-[26px] lg:leading-[1.4]"
                    />
                    <a
                        href="tel:+917300090835"
                        className="flex items-center px-5 py-[13px] bg-black rounded-[48px] lg:col-start-2 lg:row-start-1 lg:px-[26px] lg:py-[19px]"
                    >
                        <span className="text-sm leading-none tracking-[-0.41px] font-semibold text-white uppercase mr-2 lg:text-lg lg:leading-none">
                            Call Now
                        </span>
                        <svg
                            className="!w-[14px] !h-[14px] text-white !lg:w-[18px] lg:h-[18px]"
                            viewBox="0 0 77 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M40.1818 71.733L32.5739 64.1989L55.3608 41.4119H0V30.4062H55.3608L32.5739 7.65625L40.1818 0.0852256L76.0057 35.9091L40.1818 71.733Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <div className="text-2xl leading-none tracking-[-0.41px] text-appGray-500 font-medium text-center max-lg:hidden">
                        (scroll)
                    </div>
                </div>
            </div>
            <div className="relative aspect-[1.74] bg-appGray-300 lg:aspect-[1.8]">
                <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 container h-full">
                </div>
                <img
                    src="/header.jpg"
                    alt="Header"
                    className="size-full object-cover"
                />
            </div>
        </section>
    );
};

export default HomeHero;
