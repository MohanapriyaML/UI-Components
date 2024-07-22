import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UiImage from './UiImage';

describe('UiImage Component', () => {
  test('renders an image with the correct src, height, width, and alt attributes', () => {
    const props = {
      src: 'https://example.com/image.jpg',
      height: '200',
      width: '300',
      alt: 'Example image',
    };

    render(<UiImage {...props} />);
    const image = screen.getByRole('img');
    
    expect(image).toHaveAttribute('src', props.src);
    expect(image).toHaveAttribute('height', props.height);
    expect(image).toHaveAttribute('width', props.width);
    expect(image).toHaveAttribute('alt', props.alt);
  });
});
