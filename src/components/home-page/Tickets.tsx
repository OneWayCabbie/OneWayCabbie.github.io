import React from 'react';
import classNames from 'classnames';
import { BCMSImage } from '@thebcms/components-react';
import type { PropRichTextDataParsed } from '@thebcms/types';
import type { TicketGroup } from '../../../bcms/types/ts';
import type { ClientConfig } from '@thebcms/client';
import ContentManager from '../ContentManager';
import ArrowIcon from '../../assets/icons/arrow.svg?raw';

interface Prop {
    title: string;
    description: PropRichTextDataParsed;
    tickets: TicketGroup[];
    bcmsConfig: ClientConfig;
}

const HomeTickets: React.FC<Prop> = ({
    title,
    description,
    tickets,
    bcmsConfig,
}) => {
    return (
        <section id="tickets" className="pt-6 pb-10 scroll-m-5 lg:pt-32 lg:pb-[130px]">
            <div className="container">
                <div className="flex items-center justify-between pb-2">
                    <h2 className="leading-none tracking-[-0.05em] font-semibold lg:text-[104px] lg:leading-none">
                        {title}
                    </h2>
                    <div
                        dangerouslySetInnerHTML={{ __html: ArrowIcon }}
                        className="w-4 h-4 lg:w-[100px] lg:h-[104px]"
                    />
                </div>
                {description?.nodes && description.nodes.length > 0 && (
                    <ContentManager
                        items={description.nodes}
                        className="text-sm leading-[1.4] tracking-[-0.41px] text-appGray-500 mx-auto mb-10 lg:text-2xl lg:leading-[1.3] lg:mb-20"
                    />
                )}
                <div className="grid grid-cols-1 gap-2 lg:gap-16">
                    {tickets.map((ticket, index) => (
                        <a
                            key={`${ticket.title}-${index}`}
                            href="tel:+917300090835"
                            className="relative flex rounded-lg overflow-hidden p-[15px] text-left lg:rounded-3xl lg:p-14"
                        >
                            <div className="relative z-10 w-full flex flex-col">
                                <div className="flex-grow">
                                    <h3
                                        className={classNames(
                                            'text-sm leading-none tracking-[-0.02em] font-semibold lg:text-[40px] lg:leading-none',
                                            {
                                                'text-white':
                                                    ticket.theme === 'LIGHT',
                                            },
                                        )}
                                    >
                                        {ticket.title}
                                    </h3>
                                    {ticket.subtitle && (
                                        <p
                                            className={classNames('text-xs leading-none tracking-[-0.02em] mt-2 lg:text-2xl lg:leading-none lg:mt-4 opacity-80', {
                                                'text-white': ticket.theme === 'LIGHT',
                                            })}
                                        >
                                            {ticket.subtitle}
                                        </p>
                                    )}
                                </div>
                                <div className="flex items-end justify-between mt-10 lg:mt-16">
                                        <div className="flex items-end">
                                            <div
                                                className={classNames(
                                                    'text-2xl leading-none mr-1 tracking-[-0.04em] font-semibold lg:text-[88px] lg:leading-none lg:mr-4',
                                                    {
                                                        'text-white':
                                                            ticket.theme ===
                                                            'LIGHT',
                                                    },
                                                )}
                                            >
                                                ₹{ticket.price}
                                            </div>
                                            {ticket.discount_price && (
                                                <div
                                                    className={classNames(
                                                        'text-sm leading-none tracking-[-0.04em] font-medium line-through opacity-50 lg:text-5xl lg:leading-none',
                                                        {
                                                            'text-white':
                                                                ticket.theme ===
                                                                'LIGHT',
                                                        },
                                                    )}
                                                >
                                                    ₹{ticket.discount_price}
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className={classNames(
                                                'flex items-center rounded-[48px] px-[18px] py-[13px] lg:px-[26px] lg:py-[19px]',
                                                {
                                                    'bg-white text-appText':
                                                        ticket.theme ===
                                                        'LIGHT',
                                                    'bg-appText text-white':
                                                        ticket.theme !==
                                                        'LIGHT',
                                                },
                                            )}
                                        >
                                            <span className="text-sm leading-none tracking-[-0.41px] font-medium mr-2 lg:text-lg lg:leading-none">
                                                Book now
                                            </span>
                                            <svg
                                                className="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]"
                                                viewBox="0 0 77 72"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M40.1818 71.733L32.5739 64.1989L55.3608 41.4119H0V30.4062H55.3608L32.5739 7.65625L40.1818 0.0852256L76.0057 35.9091L40.1818 71.733Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                            </div>
                            <BCMSImage
                                media={ticket.background_image}
                                clientConfig={bcmsConfig}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>

        
    );
};

export default HomeTickets;
