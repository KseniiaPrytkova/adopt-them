// const Footer = () => {
//     return (
//         <footer className="bg-dark-sky text-center text-white">
//             <p className="my-3">Legal disclaimer, copyright, etc.</p>
//             <ul>
//                 <li className="peer-only-2 inline-block px-3">
//                     <Link to="/">
//                         <FingerPrintIcon className="h-8 w-8 text-juicy-sun" />
//                     </Link>
//                 </li>
//             </ul>
//         </footer>
//     );
// };

const Footer = () => {
    const date = new Date();

    const toggleTheme = () => {
        const body = document.querySelector('body');
        body.classList.toggle('dark');

        const theme = body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);

        const label = document.querySelector('.theme-label');
        label.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    };

    return (
        <footer className="bg-light-darkNavy dark:bg-dark-purple px-10 pt-10 pb-5 text-white flex flex-wrap lg:justify-evenly lg:items-center">
            <ul className="text-light-gold dark:text-dark-paleGreen basis-1/3 flex flex-col space-y-4 order-1 lg:basis-1/6">
                <li>Furstagram</li>
                <li>Furbook</li>
                <li>Tailitter</li>
                <li>LinkedOut</li>
                <li>WhatsFur</li>
            </ul>

            <ul className="text-light-paleGold dark:text-dark-green basis-1/3 flex flex-col space-y-4 order-2 lg:basis-1/6">
                <li>About us</li>
                <li>Jobs</li>
                <li>Fur and tails</li>
            </ul>

            <section className="basis-full flex flex-col space-y-4 pt-10 order-4 lg:order-3 lg:basis-2/5 lg:pt-0">
                <h3 className="text-xl  text-light-gold dark:text-dark-green">
                    Sign up for our newsletter
                </h3>
                <p className="">
                    We will send you emails about new animals joining our family
                    and some pet care tips.
                </p>

                <input
                    type="text"
                    id="success"
                    className=" bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                    placeholder="Drop your email"
                ></input>
            </section>

            <div className="order-3 lg:order-4 ">
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
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 theme-label">
                        {localStorage.getItem('theme') === 'dark'
                            ? 'Dark'
                            : 'Light'}
                    </span>
                </label>
            </div>

            <p className=" order-4 basis-full text-center pt-10 text-sm">
                Adopt Them @{date.getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
