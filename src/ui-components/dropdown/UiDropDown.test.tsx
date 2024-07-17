import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UiDropDown from './UiDropDown';
describe('UiDropDown Component', () => {
    const mockItems = [
        { name: 'item1', children: 'Item 1' },
        { name: 'item2', children: 'Item 2' },
        { name: 'item3', children: 'Item 3' },
    ];
    test('renders without crashing', () => {
        render(
            <UiDropDown
                items={mockItems}
                button={{ children: 'Dropdown Button', variant: 'text' }}
            />
        );
        expect(screen.getByText('Dropdown Button')).toBeInTheDocument();
    });
    test('opens dropdown on button click', async () => {
        render(
            <UiDropDown
                items={mockItems}
                button={{ children: 'Dropdown Button', variant: 'text' }}
            />
        );
        const dropdownButton = screen.getByText('Dropdown Button');
        fireEvent.click(dropdownButton);
        await waitFor(() => {
            expect(screen.getByText('Item 1')).toBeVisible();
            expect(screen.getByText('Item 2')).toBeVisible();
            expect(screen.getByText('Item 3')).toBeVisible();
        });
    });
    test('closes dropdown on menu item click', async () => {
        render(
            <UiDropDown
                items={mockItems}
                button={{ children: 'Dropdown Button', variant: 'text' }}
            />
        );
        const dropdownButton = screen.getByText('Dropdown Button');
        fireEvent.click(dropdownButton);
        const menuItem = screen.getByText('Item 1');
        fireEvent.click(menuItem);
        await waitFor(() => {
            expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
        });
    });
});