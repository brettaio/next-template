/* eslint-disable max-len */
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header = (props: any) => {
    const router = useRouter();

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            setShowMenu(!showMenu);
        } else {
            setShowMenu(false);
        }
    };

    return (
        <header className={`sticky top-0 z-50 bg-black/10 duration-300 ${props.className}`}>
            <div className="container">
                <div className="flex items-center justify-between py-5 lg:py-0">
                    <Link href="/">
                        <Image src="/assets/images/mugshot.svg" alt="bretta etc ltd logo" width={60} height={60} />
                    </Link>
                    <div className="flex items-center">
                        <div onClick={() => toggleMenu()} className={`overlay fixed inset-0 z-[51] bg-black/60 lg:hidden ${showMenu ? '' : 'hidden'}`}></div>
                        <div className={`menus ${showMenu ? '!right-0 overflow-y-auto' : ''}`}>
                            <div className="border-b border-gray/10 text-right lg:hidden">
                                <button onClick={() => toggleMenu()} type="button" className="p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6 text-black"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <ul onClick={() => toggleMenu()}>
                                <li>
                                    <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
                                        Home
                                    </Link>
                                </li>
                                <li className="group relative" onClick={(e) => e.stopPropagation()}>
                                    <Link
                                        href="#"
                                        className={
                                            router.pathname === '/crypto' ||
                                            router.pathname === '/modern-saas' ||
                                            router.pathname === '/real-estate' ||
                                            router.pathname === '/healthcare' ||
                                            router.pathname === '/marketing' ||
                                            router.pathname === '/application' ||
                                            router.pathname === '/hotel-resort' ||
                                            router.pathname === '/nft' ||
                                            router.pathname === '/online-courses' ||
                                            router.pathname === '/restaurant' ||
                                            router.pathname === '/consulting' ||
                                            router.pathname === '/creative-agency' ||
                                            router.pathname === '/insurance' ||
                                            router.pathname === '/photography' ||
                                            router.pathname === '/construction' ||
                                            router.pathname === '/blog-landing' ||
                                            router.pathname === '/event-concert' ||
                                            router.pathname === '/gym' ||
                                            router.pathname === '/job-placement' ||
                                            router.pathname === '/online-payments' ||
                                            router.pathname === '/personal-portfolio' ||
                                            router.pathname === '/portfolio-landing'
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                        Landing
                                        <div className="transition duration-500 group-hover:rotate-180 ltr:ml-2 rtl:mr-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                    <div className="submenu" onClick={() => toggleMenu()}>
                                        <Link href="/crypto" className={router.pathname === '/crypto' ? 'active' : ''}>
                                            Crypto Currency
                                        </Link>
                                        <Link href="/modern-saas" className={router.pathname === '/modern-saas' ? 'active' : ''}>
                                            {' '}
                                            Modern Saas{' '}
                                        </Link>
                                        <Link href="/real-estate" className={router.pathname === '/real-estate' ? 'active' : ''}>
                                            {' '}
                                            Real Estate{' '}
                                        </Link>
                                        <Link href="/healthcare" className={router.pathname === '/healthcare' ? 'active' : ''}>
                                            {' '}
                                            Health Care{' '}
                                        </Link>
                                        <Link href="/marketing" className={router.pathname === '/marketing' ? 'active' : ''}>
                                            Sales Marketing
                                        </Link>
                                        <Link href="/application" className={router.pathname === '/application' ? 'active' : ''}>
                                            Application
                                        </Link>
                                        <Link href="/hotel-resort" className={router.pathname === '/hotel-resort' ? 'active' : ''}>
                                            Hotel & Resort
                                        </Link>
                                        <Link href="/nft" className={router.pathname === '/nft' ? 'active' : ''}>
                                            NFT Marketplace
                                        </Link>
                                        <Link href="/online-courses" className={router.pathname === '/online-courses' ? 'active' : ''}>
                                            Online Courses
                                        </Link>
                                        <Link href="/restaurant" className={router.pathname === '/restaurant' ? 'active' : ''}>
                                            Restaurant
                                        </Link>
                                        <Link href="/consulting" className={router.pathname === '/consulting' ? 'active' : ''}>
                                            Consulting
                                        </Link>
                                        <Link href="/creative-agency" className={router.pathname === '/creative-agency' ? 'active' : ''}>
                                            Creative Agency
                                        </Link>
                                        <Link href="/insurance" className={router.pathname === '/insurance' ? 'active' : ''}>
                                            Insurance
                                        </Link>
                                        <Link href="/photography" className={router.pathname === '/photography' ? 'active' : ''}>
                                            Photography
                                        </Link>
                                        <Link href="/construction" className={router.pathname === '/construction' ? 'active' : ''}>
                                            Construction
                                        </Link>
                                        <Link href="/blog-landing" className={router.pathname === '/blog-landing' ? 'active' : ''}>
                                            Blog
                                        </Link>
                                        <Link href="/event-concert" className={router.pathname === '/event-concert' ? 'active' : ''}>
                                            Event Concert
                                            <span className="ml-1 whitespace-nowrap rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </Link>
                                        <Link href="/gym" className={router.pathname === '/gym' ? 'active' : ''}>
                                            GYM
                                            <span className="ml-1 whitespace-nowrap rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </Link>
                                        <Link href="/job-placement" className={router.pathname === '/job-placement' ? 'active' : ''}>
                                            Job Placement
                                            <span className="ml-1 whitespace-nowrap rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </Link>
                                        <Link href="/online-payments" className={router.pathname === '/online-payments' ? 'active' : ''}>
                                            Online Payments
                                            <span className="ml-1 whitespace-nowrap rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </Link>
                                        <Link href="/personal-portfolio" className={router.pathname === '/personal-portfolio' ? 'active' : ''}>
                                            Personal Portfolio
                                            <span className="ml-1 whitespace-nowrap rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </Link>
                                        <Link href="/portfolio-landing" className={router.pathname === '/portfolio-landing' ? 'active' : ''}>
                                            Portfolio
                                            <span className="ml-1 whitespace-nowrap rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <Link
                                        href="/portfolio"
                                        className={router.pathname === '/portfolio' || router.pathname === '/portfolio-detail' ? 'active' : ''}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services"
                                        className={router.pathname === '/services' || router.pathname === '/services-detail' ? 'active' : ''}
                                    >
                                        Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/team" className={router.pathname === '/team' ? 'active' : ''}>
                                        Team
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us" className={router.pathname === '/about-us' ? 'active' : ''}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/career" className={router.pathname === '/career' ? 'active' : ''}>
                                        Career
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
                            onClick={() => toggleMenu()}
                        >
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <path
                                    d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
