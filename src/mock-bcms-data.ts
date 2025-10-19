// Mock BCMS data for offline development
export const mockHomePageData = {
    title: 'OneWayCabbie',
    slug: 'home',
    hero_gallery: [],
    hero_description: {
        nodes: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'OneWayCabbie - Affordable One-Way Cabs in Rajasthan. Experience comfortable and reliable taxi services across Rajasthan\'s most popular destinations.'
                    }
                ]
            }
        ]
    } as any,
    hero_cover_image: {
        _id: 'mock-hero-cover',
        alt_text: 'OneWayCabbie Hero Image',
        caption: 'Affordable One-Way Cabs in Rajasthan',
        name: 'hero-cover.jpg',
        src: '/header.jpg',
        width: 1200,
        height: 600,
        type: 'IMG'
    },
    tickets_title: 'Book Your Ride',
    tickets_description: {
        nodes: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'Get the best deals on one-way cab rides across Rajasthan. Choose from our range of comfortable vehicles.'
                    }
                ]
            }
        ]
    } as any,
    tickets: [
        {
            title: 'Sedan Cab',
            description: 'Comfortable sedan for up to 4 passengers',
            price: '₹3,500 - ₹5,000',
            features: ['AC', 'Professional Driver', 'Safe Journey']
        },
        {
            title: 'Kia Carens',
            description: 'Spacious 7-seater for families',
            price: '₹5,500 - ₹6,500',
            features: ['AC', 'Professional Driver', 'Extra Space']
        },
        {
            title: 'Innova Crysta',
            description: 'Premium 7-seater with luxury features',
            price: '₹8,000 - ₹8,500',
            features: ['AC', 'Professional Driver', 'Premium Comfort']
        }
    ],
    about_title: 'About OneWayCabbie',
    about_cover: {
        _id: 'mock-about-cover',
        alt_text: 'About OneWayCabbie',
        caption: 'Your trusted partner for affordable one-way cab services',
        name: 'about-cover.jpg',
        src: '/header.jpg',
        width: 800,
        height: 600,
        type: 'IMG'
    },
    about_description: {
        nodes: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'OneWayCabbie is a trusted intercity taxi service based in Rajasthan, offering affordable one-way cab rides between popular destinations such as Jodhpur, Jaisalmer, Udaipur, and Jaipur.'
                    }
                ]
            }
        ]
    } as any,
    about_topics: [
        'Professional Drivers',
        'Clean & Comfortable Vehicles',
        'Transparent Pricing',
        'Safe & Reliable Service'
    ],
    sponsors_title: 'Our Partners',
    sponsors: [
        {
            name: 'Rajasthan Tourism',
            logo: '/header.jpg',
            description: 'Official Tourism Partner'
        }
    ],
    speakers_title: 'Why Choose Us',
    speakers_description: {
        nodes: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'Experience the best in one-way cab services with our professional drivers and comfortable vehicles.'
                    }
                ]
            }
        ]
    } as any,
    speakers_cover_image: {
        _id: 'mock-speakers-cover',
        alt_text: 'Why Choose OneWayCabbie',
        caption: 'Professional drivers and comfortable vehicles',
        name: 'speakers-cover.jpg',
        src: '/header.jpg',
        width: 800,
        height: 600,
        type: 'IMG'
    },
    speakers: [
        {
            name: 'Professional Drivers',
            role: 'Local Route Experts',
            avatar_image: {
                _id: 'mock-avatar-1',
                alt_text: 'Professional Driver',
                caption: 'Experienced local drivers',
                name: 'driver-avatar.jpg',
                src: '/header.jpg',
                width: 200,
                height: 200,
                type: 'IMG'
            },
            biography: {
                nodes: [
                    {
                        type: 'paragraph',
                        content: [
                            {
                                type: 'text',
                                text: 'Our drivers are experienced professionals with deep knowledge of Rajasthan\'s routes and destinations.'
                            }
                        ]
                    }
                ]
            } as any,
            topic: {
                nodes: [
                    {
                        type: 'paragraph',
                        content: [
                            {
                                type: 'text',
                                text: 'Safe and comfortable journey across Rajasthan'
                            }
                        ]
                    }
                ]
            } as any
        }
    ],
    agenda_title: 'Popular Routes',
    agenda_days: []
};

export const mockLegalEntries = [
    {
        _id: 'legal-1',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        instanceId: 'mock-instance',
        templateId: 'legal',
        userId: 'mock-user',
        statuses: {},
        meta: {
            en: {
                title: 'Terms of Service',
                slug: 'terms',
                content: {
                    nodes: [
                        {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'By using OneWayCabbie services, you agree to our terms and conditions.'
                                }
                            ]
                        }
                    ]
                } as any
            }
        },
        content: {}
    }
];
