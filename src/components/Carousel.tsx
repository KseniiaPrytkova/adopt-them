import { Component, MouseEvent } from 'react';

interface IProps {
    images: string[];
}

class Carousel extends Component<IProps> {
    state = {
        active: 0
    };

    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg']
    };

    // target is mouse event pointing at HTML element
    handleIndexClick = (event: MouseEvent<HTMLElement>) => {
        if (!(event.target instanceof HTMLElement)) return;

        if (event.target.dataset.index) {
            this.setState({
                active: +event.target.dataset.index
            });
        }
    };

    render() {
        const { active } = this.state;
        const { images } = this.props;
        return (
            <div className="md:grid md:grid-cols-2">
                <div className="col-span-1">
                    <img
                        src={images[active]}
                        data-testid="hero"
                        alt="animal"
                        className="m-auto w-10/12 rounded-3xl border-l border-t border-light-navy p-2 xl:w-8/12"
                    />
                </div>

                <div className="col-span-1 m-auto grid w-10/12 grid-cols-6 justify-items-center gap-4">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            key={photo}
                            src={photo}
                            data-testid={`thumbnail${index}`}
                            className={`${
                                index === active ? 'active-image' : ''
                            } col-span-2 h-20 w-20 cursor-pointer rounded-full sm:w-auto md:h-auto`}
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
