import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Topbar from './Topbar';
import '@testing-library/jest-dom/extend-expect';

test('it renders the Topbar component correctly', () => {
  render(
    <BrowserRouter>
      <Topbar />
    </BrowserRouter>
  );

  // Check if the logo is in the document
  expect(screen.getByAltText('logo')).toBeInTheDocument();

  // Check if the links are in the document
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Menu')).toBeInTheDocument();
  expect(screen.getByText('Reservations')).toBeInTheDocument();
  expect(screen.getByText('Order Online')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
});
