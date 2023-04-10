import { expect, test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import Pet, { IProps } from '../components/Pet';

const petProps: IProps = {
    id: 1,
    name: 'Test Pet',
    animal: 'dog',
    breed: 'Labrador',
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
    location: 'New York, NY',
    delay: 100,
    currentPage: 1
};

test('displays a default thumbnail', async () => {
    const pet = render(
        <StaticRouter location="/">
            <Pet {...petProps} />
        </StaticRouter>
    );

    const petThumbnail = (await pet.findByTestId(
        'thumbnail-1'
    )) as HTMLImageElement;
    expect(petThumbnail.src).toContain('none.jpg');
    pet.unmount();
});

test('displays a non-default thumbnail', async () => {
    const pet = render(
        <StaticRouter location="/">
            <Pet {...petProps} images={['1.jpg', '2.jpg', '3.jpg']} />
        </StaticRouter>
    );

    const petThumbnail = (await pet.findByTestId(
        'thumbnail-1'
    )) as HTMLImageElement;
    expect(petThumbnail.src).toContain('1.jpg');
    pet.unmount();
});

test('handleImageLoad sets image opacity and updates styles after delay', async () => {
    const { getByTestId } = render(
        <StaticRouter location="/">
            <Pet {...petProps} />
        </StaticRouter>
    );
    const thumbnail = getByTestId('thumbnail-1');

    fireEvent.load(thumbnail);

    // check if the opacity is initially set to '0'
    expect(thumbnail.closest('a')?.className).toContain('opacity-0');

    // wait for the delay
    await new Promise((resolve) => setTimeout(resolve, petProps.delay + 50));

    // check if the opacity has been changed
    expect(thumbnail.closest('a')?.className).not.toContain('opacity-0');
    expect(thumbnail.style.opacity).toBe('1');

    // check if the animation has been updated
    expect(thumbnail.closest('a')?.style.animation).toBe('2s appear ease-out');
});
