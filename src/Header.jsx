const Header = () => {
    return (
        <header className=" grid grid-cols-12    ">
            <div className="col-span-12 col-start-1 ml-2 mr-2 mb-2 grid  grid-cols-12  rounded-lg bg-grey-snow p-20  2xl:col-span-10 2xl:col-start-2">
                <div className="col-span-6 col-start-2">
                    <h1 className=" text-5xl text-purple-sky">
                        Find your new best friend
                    </h1>
                    <h2 className=" mb-8 text-2xl text-dark-sky">
                        Adopt Them is an online, searchable database of animals
                        who need homes.
                    </h2>
                    <p className="   text-dark-sky">
                        From the comfort of their personal computers, pet lovers
                        can search for a pet that best matches their needs. They
                        can then reference a shelter’s web page and discover
                        what services it offers.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
