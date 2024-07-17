import React from 'react';
import { render, screen } from '@testing-library/react';
import UiImage from './UiImage';
const TestComponent = () => {
    return (
        <UiImage
            src="/test-image.jpg"
            height={100}
            width={100}
            alt="Test Image"
            fill={false}
            priority={true}
        />
    );
};
describe('EcImage Component', () => {
    test('renders image with given props', () => {
        render(<TestComponent />);
        const imageElement = screen.getByAltText('Test Image');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src');
        expect(imageElement.getAttribute('src')).toContain('/_next/image?');
        expect(imageElement).toHaveAttribute('width', '100');
        expect(imageElement).toHaveAttribute('height', '100');
    });
});