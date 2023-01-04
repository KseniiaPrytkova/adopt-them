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
            <div className="carousel flex h-96 content-center justify-around border border-green-600">
                <img
                    src={images[active]}
                    alt="animal"
                    className="w-max-1/2 max-h-96"
                />
                <div className="carousel-smaller w-1/2">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            key={photo}
                            src={photo}
                            className={
                                (index === active ? 'active-image ' : '') +
                                'm-4 inline-block h-24 w-24 cursor-pointer rounded-full focus:ring-2 focus:ring-red-500'
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
