const Header = () => {
    return (
        // <header className=" grid grid-cols-12    ">
        //     <div className="col-span-12 col-start-1 ml-2 mr-2 mb-2 grid  grid-cols-12  rounded-lg bg-juicy-sun p-20  2xl:col-span-10 2xl:col-start-2">
        //         <div className="col-span-6 col-start-2">
        //             <h1 className=" text-5xl text-purple-sky">
        //                 Find your new best friend
        //             </h1>
        //             <h2 className=" mb-8 text-2xl text-dark-sky">
        //                 Adopt Them is an online, searchable database of animals
        //                 who need homes.
        //             </h2>
        //             <p className="   text-dark-sky">
        //                 From the comfort of their personal computers, pet lovers
        //                 can search for a pet that best matches their needs. They
        //                 can then reference a shelter’s web page and discover
        //                 what services it offers.
        //             </p>
        //         </div>
        //     </div>
        // </header>

        // <header className=" grid grid-cols-12    ">
        //     <div className="col-span-12 col-start-1 ml-2 mr-2 mb-2  bg-juicy-sun p-20  2xl:col-span-10 2xl:col-start-2">
        //         <div className="">
        //             <h1 className="">Find your new best friend</h1>
        //             <h2 className="">
        //                 Adopt Them is an online, searchable database of animals
        //                 who need homes.
        //             </h2>
        //             <p className=" ">
        //                 From the comfort of their personal computers, pet lovers
        //                 can search for a pet that best matches their needs. They
        //                 can then reference a shelter’s web page and discover
        //                 what services it offers.
        //             </p>
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 viewBox="0 0 1440 320"
        //             >
        //                 <h1 className=" text-5xl text-purple-sky">
        //                     Find your new best friend
        //                 </h1>
        //                 <path
        //                     fill="#fff"
        //                     fillOpacity="1"
        //                     d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,245.3C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        //                 ></path>
        //             </svg>
        //         </div>
        //     </div>
        // </header>

        // <header className=" grid grid-cols-12    ">
        //     <div className=" col-span-12 col-start-1 ml-2 mr-2 mb-2 grid  grid-cols-12  rounded-lg bg-juicy-sun p-20  2xl:col-span-10 2xl:col-start-2">
        //         <h1>Hello World</h1>
        //         <p className="">
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
        //             orci lorem, porttitor nec vulputate sit amet...
        //         </p>

        //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        //             <path
        //                 fill="#fff"
        //                 fillOpacity="1"
        //                 d="M0,192L80,208C160,224,320,256,480,272C640,288,800,288,960,282.7C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        //             ></path>
        //         </svg>
        //     </div>
        // </header>

        <header className=" grid grid-cols-12 ">
            <div className="col-span-12 col-start-1 bg-juicy-sun  text-white 2xl:col-span-10 2xl:col-start-2">
                <h1 className=" p-10 text-5xl">Find your new best friend</h1>
                <div className="lg:absolute ">
                    {/* <h1 className="p-5 text-5xl">Find your new best friend</h1> */}

                    <h2 className=" pl-10 text-2xl text-dark-sky">
                        Adopt Them is an online, searchable database of animals
                        who need homes.
                    </h2>

                    <p className=" w-9/12 p-5 pl-10 text-dark-sky ">
                        From the comfort of their personal computers, pet lovers
                        can search for a pet that best matches their needs. They
                        can then reference a shelter’s web page and discover
                        what services it offers.
                    </p>
                    <img
                        src="./1.PNG"
                        alt={'lol'}
                        className="absolute -top-1 -right-5 w-52 bg-transparent"
                    />
                </div>
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1439 319"
                    className="block "
                >
                    <path
                        className=""
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,192L80,208C160,224,320,256,480,272C640,288,800,288,960,282.7C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                    <path
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,192L80,186.7C160,181,320,171,480,170.7C640,171,800,181,960,170.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>

                {/* <svg
                    id="wave"
                    style="transform:rotate(0deg); transition: 0.3s"
                    viewBox="0 0 1440 490"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            id="sw-gradient-0"
                            x1="0"
                            x2="0"
                            y1="1"
                            y2="0"
                        >
                            <stop
                                stopColor="rgba(243, 106, 62, 1)"
                                offset="0%"
                            ></stop>
                            <stop
                                stopColor="rgba(255, 179, 11, 1)"
                                offset="100%"
                            ></stop>
                        </linearGradient>
                    </defs>
                    <path
                        style="transform:translate(0, 0px); opacity:1"
                        fill="url(#sw-gradient-0)"
                        d="M0,245L120,269.5C240,294,480,343,720,302.2C960,261,1200,131,1440,122.5C1680,114,1920,229,2160,261.3C2400,294,2640,245,2880,261.3C3120,278,3360,359,3600,367.5C3840,376,4080,310,4320,245C4560,180,4800,114,5040,98C5280,82,5520,114,5760,155.2C6000,196,6240,245,6480,261.3C6720,278,6960,261,7200,261.3C7440,261,7680,278,7920,302.2C8160,327,8400,359,8640,351.2C8880,343,9120,294,9360,245C9600,196,9840,147,10080,106.2C10320,65,10560,33,10800,89.8C11040,147,11280,294,11520,343C11760,392,12000,343,12240,269.5C12480,196,12720,98,12960,73.5C13200,49,13440,98,13680,106.2C13920,114,14160,82,14400,73.5C14640,65,14880,82,15120,122.5C15360,163,15600,229,15840,253.2C16080,278,16320,261,16560,212.3C16800,163,17040,82,17160,40.8L17280,0L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"
                    ></path>
                </svg> */}
            </div>
        </header>

        // <header>
        // <div className=" bg-juicy-sun ">
        //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        //         <h1 className=" text-5xl text-purple-sky">
        //             Find your new best friend
        //         </h1>
        //         <path
        //             fill="#fff"
        //             fillOpacity="1"
        //             d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,245.3C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        //         ></path>
        //     </svg>
        // </div>
        // </header>
    );
};

export default Header;
