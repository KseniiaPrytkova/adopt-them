import { useAnimateOnceOnIntersection } from '../customHooks/useAnimateOnceOnIntersection';
import { AppContext } from '../AppContext';
import { useContext } from 'react';

const Footer = () => {
    const date = new Date();
    // eslint-disable-next-line no-unused-vars
    const { hasAnimated, _ } = useContext(AppContext);

    const [nodeRef, animated] = useAnimateOnceOnIntersection({
        animationName: 'appear',
        animationDuration: 2000,

        options: { threshold: 0.5 }
    });

    const toggleTheme = () => {
        const body = document.querySelector('body');
        body.classList.toggle('dark');

        const theme = body.classList.contains('dark') ? 'dark' : 'light';
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
        }

        const label = document.querySelector('.theme-label');
        if (label) {
            if (theme === 'dark') {
                label.textContent = 'Dionysus';
            } else {
                label.textContent = 'Poseidon';
            }
        }
    };

    return (
        <footer
            id="footer"
            ref={nodeRef}
            className={`flex flex-wrap justify-start bg-light-darkNavy px-10 pt-10 pb-5 text-white dark:bg-dark-purple sm:justify-around lg:justify-evenly ${
                animated || hasAnimated['footer']
                    ? 'animate-appear opacity-100'
                    : 'opacity-0'
            } transition-opacity`}
        >
            <ul className="order-1 flex basis-1/2 flex-col space-y-4 text-light-gold dark:text-dark-green sm:basis-1/4 lg:basis-1/6">
                <li>
                    <a href="https://www.google.com">Furstagram</a>
                </li>
                <li>
                    <a href="https://www.google.com">Furbook</a>
                </li>
                <li>
                    <a href="https://www.google.com">Tailitter</a>
                </li>
                <li>
                    <a href="https://www.google.com">LinkedOut</a>
                </li>
                <li>
                    <a href="https://www.google.com">WhatsFur</a>
                </li>
            </ul>

            <ul className="order-2 flex basis-2/6 flex-col space-y-4 text-light-paleGold dark:text-dark-paleGreen sm:basis-1/4 lg:basis-1/6">
                <li>
                    <a href="https://www.google.com">About us</a>
                </li>
                <li>
                    <a href="https://www.google.com">Jobs</a>
                </li>
                <li>
                    <a href="https://www.google.com">Fur and tails</a>
                </li>
            </ul>

            <section className="order-4 flex basis-full flex-col space-y-4 pt-10 lg:basis-2/5 lg:pt-0">
                <h3 className="text-xl text-light-gold dark:text-dark-green">
                    Sign up for our newsletter
                </h3>
                <p className="text-light-lightNavy dark:text-dark-lightGrey">
                    We will send you emails about new animals joining our family
                    and some pet care tips
                </p>

                <input
                    type="text"
                    id="success"
                    className="block w-full rounded-lg border border-light-orange bg-light-lightNavy p-2.5 text-sm text-light-orange placeholder-light-orange focus:border-light-gold focus:ring-light-gold dark:border-dark-paleTeal dark:bg-dark-lightGrey dark:text-dark-paleTeal dark:placeholder-dark-paleTeal dark:focus:border-dark-green dark:focus:ring-dark-paleTeal"
                    placeholder="Drop your email"
                ></input>
            </section>

            <div className="order-3 mt-10 basis-full sm:mt-0 sm:basis-1/6 lg:order-4">
                <label
                    className={`relative mr-5 inline-flex cursor-pointer items-center`}
                >
                    <input
                        type="checkbox"
                        className="peer sr-only"
                        defaultChecked={
                            typeof window !== 'undefined' &&
                            localStorage.getItem('theme') === 'dark'
                                ? 'Dionysus'
                                : 'Poseidon'
                        }
                        onClick={() => toggleTheme()}
                    />
                    <div className="peer h-6 w-11 rounded-full bg-light-lightNavy after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-dark-paleTeal peer-checked:after:translate-x-full peer-checked:after:border-light-lightNavy peer-focus:ring-4 peer-focus:ring-light-gold dark:border-gray-600 dark:bg-dark-paleTeal dark:peer-focus:ring-dark-green"></div>
                    <span
                        className={`theme-label ml-3 text-sm font-medium text-light-lightNavy`}
                    >
                        {typeof window !== 'undefined' &&
                        localStorage.getItem('theme') === 'dark'
                            ? 'Dionysus'
                            : 'Poseidon'}
                    </span>
                </label>
            </div>

            <p className="order-5 basis-full pt-10 text-center text-sm text-light-lightNavy dark:text-dark-lightGrey">
                Adopt Them @{date.getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
