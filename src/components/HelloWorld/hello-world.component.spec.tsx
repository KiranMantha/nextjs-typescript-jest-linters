import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelloWorld } from './hello-world.component';

describe('HelloWorld', () => {
  it('renders a heading', () => {
    render(<HelloWorld />);

    const heading = screen.getByRole('heading', {
      name: /Hello World/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
