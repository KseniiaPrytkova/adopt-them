import { useAnimateOnceOnIntersection } from './customHooks/useAnimateOnceOnIntersection';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const Header = () => {
    // eslint-disable-next-line no-unused-vars
    const { hasAnimated, _ } = useContext(AppContext);
    const [headerRef, animatedHeader] = useAnimateOnceOnIntersection({
        animationName: 'appear-from-left',
        animationDuration: 3000,
        options: { threshold: 0.5 }
    });
    const [descriptionRef, animatedDescription] = useAnimateOnceOnIntersection({
        animationName: 'fade-in-slow',
        animationDuration: 6000,
        options: { threshold: 0.5 }
    });

    return (
        <header className="relative overflow-hidden bg-[url('/img/fox.jpg')] bg-cover bg-center lg:pt-12 xl:pt-14  ">
            <div className="grid-template-rows: repeat(2, minmax(0, 1fr)); grid grid-cols-12">
                <h1
                    ref={headerRef}
                    id="header"
                    className={`col-span-7 col-start-2 row-span-1 row-start-1  py-10 text-5xl leading-snug text-light-blue dark:text-dark-teal md:col-span-6 md:col-start-2 md:pr-0 lg:text-6xl xl:text-7xl
                ${
                    animatedHeader || hasAnimated['header']
                        ? 'animate-appear-from-left opacity-100'
                        : 'opacity-0'
                }`}
                >
                    Find your new best friend
                </h1>

                <h2
                    ref={descriptionRef}
                    id="description"
                    className={`col-span-5 col-start-2 row-span-1 row-start-2  pr-5 text-2xl text-light-teal dark:text-dark-paleTeal md:leading-relaxed xl:text-3xl xl:leading-loose ${
                        animatedDescription || hasAnimated['description']
                            ? 'animate-fade-in-slow opacity-100'
                            : 'opacity-0'
                    }`}
                >
                    Adopt Them is an online, searchable database of animals who
                    need homes
                </h2>
            </div>

            <span className="mt-20 block animate-shake text-center sm:hidden">
                <a
                    href="https://www.petfinder.com/"
                    target={'blank'}
                    className="mx-auto rounded bg-light-orange py-2 px-8 text-white hover:opacity-50 dark:bg-dark-teal"
                >
                    Explore
                </a>
            </span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 220 "
                className="block"
            >
                <path
                    className="fill-light-gold dark:fill-dark-lightPurple"
                    fillOpacity="1"
                    d="M0,192L80,186.7C160,181,320,171,480,170.7C640,171,800,181,960,170.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
        </header>
    );
};

export default Header;
