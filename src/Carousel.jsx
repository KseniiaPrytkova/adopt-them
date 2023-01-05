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
            // <main className="flex-auto">
            <div className="flex flex-col     md:flex-row">
                <div className="  flex justify-center  p-5">
                    <img
                        src={images[active]}
                        alt="animal"
                        // className="w-max-1/2 max-h-96"
                        className="w-4/5 rounded-3xl border-l border-t border-bright-sky p-2 sm:w-full"
                    />
                </div>

                <div className=" mt-2 mb-2 flex flex-wrap justify-between md:content-start md:justify-center ">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            key={photo}
                            src={photo}
                            className={
                                (index === active ? 'active-image ' : '') +
                                'm-2 inline-block h-24 w-24 cursor-pointer rounded-full'
                            }
                            // className={index === active ? 'active' : ''}
                            alt="animal thumbnail"
                            onClick={this.handleIndexClick}
                            data-index={index}
                        />
                    ))}
                </div>
            </div>
            // </main>
        );
    }
}

export default Carousel;
