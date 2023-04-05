import { expect, test, vi, beforeEach, afterEach, describe } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { createRenderer } from 'react-test-renderer/shallow';
import { StaticRouter } from 'react-router-dom/server';
import Results from '../components/Results';

const executeAfterOneSecond = (func, arg) => {
    setTimeout(() => {
        func(arg);
    }, 1000 + 100);
};

describe('Results component', () => {
    const mockSetPage = vi.fn();
    const mockScrollToTop = vi.fn();

    beforeEach(() => {
        vi.useFakeTimers();
        mockSetPage.mockReset();
        mockScrollToTop.mockReset();
    });

    afterEach(() => {
        vi.restoreAllMocks();
        vi.runAllTimers();
        vi.useRealTimers();
    });

    const defaultProps = {
        pets: [],
        page: 0,
        setPage: mockSetPage,
        isLoading: false,
        isFetching: false,
        isPreviousData: false,
        isError: false,
        error: null,
        resultsRef: null,
        scrollToTop: mockScrollToTop
    };

    const pets = [
        {
            id: 1,
            name: 'Luna',
            animal: 'dog',
            city: 'Seattle',
            state: 'WA',
            description:
                "Luna is actually the most adorable dog in the world. Her hobbies include yelling at squirrels, aggressively napping on her owners' laps, and asking to be fed two hours before IT'S DAMN WELL TIME LUNA. Luna is beloved by her puppy parents and lazily resides currently in Seattle, Washington.",
            breed: 'Havanese',
            images: [
                'http://pets-images.dev-apis.com/pets/dog25.jpg',
                'http://pets-images.dev-apis.com/pets/dog26.jpg',
                'http://pets-images.dev-apis.com/pets/dog27.jpg',
                'http://pets-images.dev-apis.com/pets/dog28.jpg',
                'http://pets-images.dev-apis.com/pets/dog29.jpg'
            ]
        },
        {
            id: 2,
            name: 'Charisse',
            animal: 'rabbit',
            city: 'Lexington',
            state: 'KY',
            description:
                'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
            breed: 'Havanese',
            images: ['http://pets-images.dev-apis.com/pets/rabbit0.jpg']
        },
        {
            id: 3,
            name: 'Maitilde',
            animal: 'rabbit',
            city: 'Dallas',
            state: 'TX',
            description:
                'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
            breed: 'Lab',
            images: ['http://pets-images.dev-apis.com/pets/rabbit1.jpg']
        },
        {
            id: 4,
            name: 'Natalina',
            animal: 'rabbit',
            city: 'Tampa',
            state: 'FL',
            description:
                'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
            breed: 'Lab',
            images: ['http://pets-images.dev-apis.com/pets/rabbit2.jpg']
        },
        {
            id: 5,
            name: 'Michail',
            animal: 'reptile',
            city: 'Tuscaloosa',
            state: 'AL',
            description:
                'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
            breed: 'Havanese',
            images: ['http://pets-images.dev-apis.com/pets/reptile1.jpg']
        },
        {
            id: 6,
            name: 'Gizela',
            animal: 'bird',
            city: 'Carol Stream',
            state: 'IL',
            description:
                'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
            breed: 'Havanese',
            images: ['http://pets-images.dev-apis.com/pets/bird2.jpg']
        },
        {
            id: 7,
            name: 'Laughton',
            animal: 'reptile',
            city: 'Bridgeport',
            state: 'CT',
            description:
                'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            breed: 'Havanese',
            images: ['http://pets-images.dev-apis.com/pets/reptile2.jpg']
        },
        {
            id: 8,
            name: 'Si',
            animal: 'dog',
            city: 'Charlotte',
            state: 'NC',
            description:
                'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
            breed: 'Lab',
            images: ['http://pets-images.dev-apis.com/pets/dog0.jpg']
        },
        {
            id: 9,
            name: 'Lyda',
            animal: 'rabbit',
            city: 'Springfield',
            state: 'IL',
            description:
                'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
            breed: 'Lab',
            images: ['http://pets-images.dev-apis.com/pets/rabbit3.jpg']
        },
        {
            id: 10,
            name: 'Jackquelin',
            animal: 'dog',
            city: 'Tucson',
            state: 'AZ',
            description:
                'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
            breed: 'Lab',
            images: ['http://pets-images.dev-apis.com/pets/dog1.jpg']
        }
    ];

    test('renders correctly with no pets', () => {
        const { asFragment } = render(<Results pets={[]} page={0} />);
        expect(asFragment()).toMatchSnapshot();
    });

    // test('renders correctly with some pets', () => {
    //     const { asFragment } = render(
    //         <StaticRouter>
    //             <Results pets={pets} />
    //         </StaticRouter>
    //     );
    //     expect(asFragment()).toMatchSnapshot();
    // });

    // with shallow rendering
    test('renders correctly with some pets', () => {
        const r = createRenderer();
        r.render(<Results pets={pets} />);
        expect(r.getRenderOutput()).toMatchSnapshot();
    });

    test('pets appear smoothly in the correct order', async () => {
        const results = render(
            <StaticRouter>
                <Results {...defaultProps} pets={pets} />
            </StaticRouter>
        );

        pets.forEach((pet, index) => {
            const petThumbnail = results.getByTestId(`thumbnail-${pet.id}`);
            const expectedDelay = index * 100;

            expect(petThumbnail.closest('a').style.animationDelay).toBe(
                `${expectedDelay}ms`
            );
        });

        results.unmount();
    });

    test('renders error message if there is an error', () => {
        const results = render(
            <StaticRouter>
                <Results
                    {...defaultProps}
                    isError={true}
                    error={{ message: 'this is an error' }}
                />
            </StaticRouter>
        );

        // console.log(results.container.innerHTML);
        expect(results.getByText('Error: this is an error')).toBeTruthy();

        results.unmount();
    });

    test('renders loading message', () => {
        const results = render(
            <StaticRouter>
                <Results {...defaultProps} isLoading={true} />
            </StaticRouter>
        );

        expect(results.getByText('Loading...')).toBeTruthy();

        results.unmount();
    });

    test('handleButtonClick for previous page', async () => {
        const results = render(
            <StaticRouter>
                <Results
                    {...defaultProps}
                    scrollToTop={mockScrollToTop}
                    setPage={mockSetPage}
                    pets={pets}
                    page={1}
                />
            </StaticRouter>
        );

        const prevButton = await results.findByTestId('prev-button-1');
        prevButton.click();
        expect(mockScrollToTop).toHaveBeenCalled();

        executeAfterOneSecond(mockSetPage, 0);
        vi.advanceTimersByTime(1100);
        await waitFor(() => expect(mockSetPage).toHaveBeenCalled());
        const setPageCallback = mockSetPage.mock.calls[0][0];
        expect(setPageCallback(1)).toEqual(0);

        results.unmount();
    });

    test('handleButtonClick for next page', async () => {
        const results = render(
            <StaticRouter>
                <Results
                    {...defaultProps}
                    scrollToTop={mockScrollToTop}
                    setPage={mockSetPage}
                    pets={pets}
                    page={1}
                />
            </StaticRouter>
        );

        const nextButton = await results.findByTestId('next-button-1');
        nextButton.click();
        expect(mockScrollToTop).toHaveBeenCalled();

        executeAfterOneSecond(mockSetPage, 2);
        vi.advanceTimersByTime(1100);
        await waitFor(() => expect(mockSetPage).toHaveBeenCalled());
        const setPageCallback = mockSetPage.mock.calls[0][0];
        expect(setPageCallback(1)).toEqual(2);

        results.unmount();
    });

    test('displays spinner when isFetching is true', () => {
        const { getByTestId } = render(
            <StaticRouter>
                <Results {...defaultProps} isFetching={true} page={1} />
            </StaticRouter>
        );

        const spinner = getByTestId('spinner');

        expect(spinner).toBeTruthy();
        expect(Array.from(spinner.classList)).toContain(
            'inline',
            'animate-spin'
        );
        expect(spinner.textContent).toBe('2');
    });
});
