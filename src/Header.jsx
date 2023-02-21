const Header = () => {
    return (
        <header className=" relative overflow-hidden  lg:pt-12 xl:pt-14 bg-[url('/img/fox.jpg')] bg-cover bg-center">
            <div className=" grid grid-cols-12 grid-template-rows: repeat(2, minmax(0, 1fr));">
                <h1 className="text-light-blue dark:text-dark-teal row-start-1 row-span-1 col-start-2 col-span-8 md:col-start-2 md:col-span-7 text-5xl py-10 lg:text-6xl leading-snug xl:text-7xl  animate-appear-from-left-top delay-500">
                    Find your new best friend!!!
                </h1>

                <h2 className="text-light-teal dark:text-dark-paleTeal row-start-2 row-span-1 col-start-2 col-span-5 text-2xl md:leading-relaxed xl:leading-loose xl:text-3xl animate-appear-from-left-top ">
                    Adopt Them is an online, searchable database of animals who
                    need homes.
                </h2>
            </div>

            <span className="mt-20 block text-center sm:hidden">
                <a
                    href="https://www.petfinder.com/"
                    target={'blank'}
                    className="bg-light-orange dark:bg-dark-teal mx-auto rounded py-2 px-8 hover:opacity-50 text-white"
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
