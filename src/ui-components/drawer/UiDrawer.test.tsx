import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UiDrawer from './UiDrawer';
import { DrawerContainer } from './UiDrawer.styled';
jest.mock('./UiDrawer.styled', () => ({
  DrawerContainer: jest.fn(({ children }) => <div data-testid="drawer-container">{children}</div>),
  DrawerHeader: jest.fn(({ children }) => <div data-testid="drawer-header">{children}</div>),
}));
describe('EcDrawer Component', () => {
  it('should render the drawer with title and children', () => {
    render(
      <UiDrawer title="Test Drawer" open={true} onClick={jest.fn()}>
        <div data-testid="drawer-children">Drawer Content</div>
      </UiDrawer>
    );
    expect(screen.getByText('Test Drawer')).toBeInTheDocument();
    expect(screen.getByTestId('drawer-children')).toBeInTheDocument();
    expect(screen.getByTestId('ec-drawer-close-button')).toBeInTheDocument();
  });
  it('should call onClick when the close button is clicked', () => {
    const handleClick = jest.fn();
    render(
      <UiDrawer title="Test Drawer" open={true} onClick={handleClick}>
        <div data-testid="drawer-children">Drawer Content</div>
      </UiDrawer>
    );
    const closeButton = screen.getByTestId('ec-drawer-close-button');
    fireEvent.click(closeButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should apply the correct position', () => {
    const { rerender } = render(
      <UiDrawer title="Test Drawer" open={true} position="left" onClick={jest.fn()}>
        <div data-testid="drawer-children">Drawer Content</div>
      </UiDrawer>
    );
    expect(DrawerContainer).toHaveBeenCalledWith(expect.objectContaining({ anchor: 'left' }), {});
    rerender(
      <UiDrawer title="Test Drawer" open={true} position="right" onClick={jest.fn()}>
        <div data-testid="drawer-children">Drawer Content</div>
      </UiDrawer>
    );
    expect(DrawerContainer).toHaveBeenCalledWith(expect.objectContaining({ anchor: 'right' }), {});
  });
});