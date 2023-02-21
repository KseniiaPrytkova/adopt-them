const Footer = () => {
    const date = new Date();

    const toggleTheme = () => {
        const body = document.querySelector('body');
        body.classList.toggle('dark');

        const theme = body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);

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
        <footer className="bg-light-darkNavy dark:bg-dark-purple px-10 pt-10 pb-5 text-white flex flex-wrap justify-around lg:justify-evenly">
            <ul className="text-light-gold dark:text-dark-green basis-1/4 flex flex-col space-y-4 order-1 lg:basis-1/6">
                <li>Furstagram</li>
                <li>Furbook</li>
                <li>Tailitter</li>
                <li>LinkedOut</li>
                <li>WhatsFur</li>
            </ul>

            <ul className="text-light-paleGold dark:text-dark-paleGreen basis-1/4 flex flex-col space-y-4 order-2 lg:basis-1/6">
                <li>About us</li>
                <li>Jobs</li>
                <li>Fur and tails</li>
            </ul>

            <section className="basis-full flex flex-col space-y-4 pt-10 order-4 lg:basis-2/5 lg:pt-0">
                <h3 className="text-xl  text-light-gold dark:text-dark-green">
                    Sign up for our newsletter
                </h3>
                <p className="text-light-lightNavy dark:text-dark-lightGrey">
                    We will send you emails about new animals joining our family
                    and some pet care tips.
                </p>

                <input
                    type="text"
                    id="success"
                    className="bg-light-lightNavy border border-light-orange text-light-orange placeholder-light-orange focus:ring-light-gold focus:border-light-gold dark:focus:ring-dark-paleTeal dark:focus:border-dark-green dark:bg-dark-lightGrey dark:border-dark-paleTeal dark:text-dark-paleTeal dark:placeholder-dark-paleTeal text-sm rounded-lg block w-full p-2.5"
                    placeholder="Drop your email"
                ></input>
            </section>

            <div className="mt-10 basis-full sm:basis-1/6 order-3 lg:order-4 sm:mt-0">
                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={
                            localStorage.getItem('theme') === 'dark'
                                ? true
                                : false
                        }
                        onClick={() => toggleTheme()}
                    />
                    <div className="w-11 h-6 bg-light-lightNavy rounded-full peer dark:bg-dark-paleTeal peer-focus:ring-4 peer-focus:ring-light-gold dark:peer-focus:ring-dark-green peer-checked:after:translate-x-full peer-checked:after:border-light-lightNavy after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-dark-paleTeal"></div>
                    <span className="ml-3 text-sm font-medium text-light-lightNavy theme-label">
                        {localStorage.getItem('theme') === 'dark'
                            ? 'Dionysus'
                            : 'Poseidon'}
                    </span>
                </label>
            </div>

            <p className="text-light-lightNavy dark:text-dark-lightGrey order-5 basis-full text-center pt-10 text-sm">
                Adopt Them @{date.getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
