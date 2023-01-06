import { Component } from 'react';

class Carousel extends Component {
    state = {
        active: 0
    };

    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg']
    };

    handleIndexClick = (event) => {
        console.log('click');
        this.setState({
            active: +event.target.dataset.index
        });
        console.log(this.state);
    };

    render() {
        const { active } = this.state;
        const { images } = this.props;
        return (
            // <div className="flex flex-col     bg-gray-600 md:flex-row">
            //     <div className="  flex justify-center  p-5">
            //         <img
            //             src={images[active]}
            //             alt="animal"
            //             className="md:w-max-1/2 w-4/5 rounded-3xl border-l border-t border-bright-sky p-2 sm:w-full md:max-h-96"
            //         />
            //     </div>

            //     <div className=" mt-2 mb-2 flex flex-wrap justify-between md:content-start md:justify-center ">
            //         {images.map((photo, index) => (
            //             // eslint-disable-next-line
            //             <img
            //                 key={photo}
            //                 src={photo}
            //                 className={
            //                     (index === active ? 'active-image ' : '') +
            //                     'm-2 inline-block h-24 w-24 cursor-pointer rounded-full'
            //                 }
            //                 // className={index === active ? 'active' : ''}
            //                 alt="animal thumbnail"
            //                 onClick={this.handleIndexClick}
            //                 data-index={index}
            //             />
            //         ))}
            //     </div>
            // </div>

            <div className="   md:grid  md:grid-cols-2  ">
                <div className=" col-span-1  ">
                    <img
                        src={images[active]}
                        alt="animal"
                        className="m-auto w-10/12 rounded-3xl border-l border-t border-bright-sky p-2 xl:w-8/12"
                    />
                </div>

                <div className=" col-span-1   m-auto  grid w-10/12 grid-cols-6 justify-items-center gap-4">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            key={photo}
                            src={photo}
                            className={
                                (index === active ? 'active-image ' : '') +
                                'col-span-2   h-20 w-20 cursor-pointer rounded-full sm:w-auto md:h-auto'
                            }
                            // className={index === active ? 'active' : ''}
                            alt="animal thumbnail"
                            onClick={this.handleIndexClick}
                            data-index={index}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
