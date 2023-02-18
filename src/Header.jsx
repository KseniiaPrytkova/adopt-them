const Header = () => {
    return (
        <header className=" relative overflow-hidden  lg:pt-12 xl:pt-14 bg-[url('/img/2.jpg')] bg-cover bg-center">
            {/* <h1 className="header-text1  text-6xl  pt-10 pl-10 leading-snug w-10/12 sm:w-9/12 md:w-8/12 md:pl-15 lg:w-11/12 lg:text-left xl:text-7xl xl:pt-25 xl:pb-10"> */}
            <div className=" grid grid-cols-12 grid-template-rows: repeat(2, minmax(0, 1fr));">
                <h1 className="text-light-blue dark:text-dark-teal row-start-1 row-span-1 col-start-2 col-span-8 md:col-start-2 md:col-span-7 text-5xl py-10 lg:text-6xl   leading-snug  xl:text-7xl  ">
                    Find your new best friend
                </h1>

                {/* <h2 className="px-5 pt-5 text-xl text-dark-sky sm:w-5/6 sm:px-10 sm:pt-0 sm:text-2xl xl:text-3xl"> */}
                {/* <h2 className="row-start-2 row-span-1 col-start-2 col-span-7 header-text2  pt-5 w-4/6  text-2xl  md:pl-15 md:leading-relaxed lg:w-6/12 lg:m-0 lg:text-left xl:leading-loose xl:text-3xl"> */}
                <h2 className="text-light-teal dark:text-dark-paleTeal row-start-2 row-span-1 col-start-2 col-span-5 text-2xl   md:leading-relaxed  xl:leading-loose xl:text-3xl">
                    Adopt Them is an online, searchable database of animals who
                    need homes.
                </h2>
            </div>

            {/* <p className="hidden px-10 pt-3 text-lg text-dark-sky sm:block sm:w-5/6 sm:pt-5 lg:absolute">
                From the comfort of their personal computers, pet lovers can
                search for a pet that best matches their needs. They can then
                reference a shelter’s web page and discover what services it
                offers.
            </p> */}

            <span className="mt-20 block text-center sm:hidden">
                <a
                    href="https://www.petfinder.com/"
                    target={'blank'}
                    className=" bg-light-orange dark:bg-dark-teal  mx-auto rounded   py-2 px-8  hover:opacity-50"
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
                    // fill="#572C5F"
                    className="fill-light-gold dark:fill-dark-lightPurple"
                    fillOpacity="1"
                    d="M0,192L80,186.7C160,181,320,171,480,170.7C640,171,800,181,960,170.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
        </header>
    );
};

export default Header;
