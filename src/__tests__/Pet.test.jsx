import { expect, test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import Pet from '../components/Pet';

test('displays a default thumbnail', async () => {
    const pet = render(
        <StaticRouter>
            <Pet id="1" />
        </StaticRouter>
    );

    const petThumbnail = await pet.findByTestId('thumbnail-1');
    expect(petThumbnail.src).toContain('none.jpg');
    pet.unmount();
});

test('displays a non-default thumbnail', async () => {
    const pet = render(
        <StaticRouter>
            <Pet id="1" images={['1.jpg', '2.jpg', '3.jpg']} />
        </StaticRouter>
    );

    const petThumbnail = await pet.findByTestId('thumbnail-1');
    expect(petThumbnail.src).toContain('1.jpg');
    pet.unmount();
});

test('handleImageLoad sets image opacity and updates styles after delay', async () => {
    const props = {
        name: 'Test Pet',
        animal: 'Dog',
        breed: 'Labrador',
        images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
        location: 'New York, NY',
        id: '1',
        delay: 100,
        currentPage: 1
    };

    const { getByTestId } = render(
        <StaticRouter>
            <Pet {...props} />
        </StaticRouter>
    );
    const thumbnail = getByTestId('thumbnail-1');

    fireEvent.load(thumbnail);

    // check if the opacity is initially set to '0'
    expect(thumbnail.closest('a').className).toContain('opacity-0');

    // wait for the delay
    await new Promise((resolve) => setTimeout(resolve, props.delay + 50));

    // check if the opacity has been changed
    expect(thumbnail.closest('a').className).not.toContain('opacity-0');
    expect(thumbnail.style.opacity).toBe('1');

    // check if the animation has been updated
    expect(thumbnail.closest('a').style.animation).toBe('2s appear ease-out');
});
