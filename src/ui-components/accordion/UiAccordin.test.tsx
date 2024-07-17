import React, { useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UiAccordion from './UiAccordion';



describe('EcAccordion Component', () => {
    it('renders without crashing', () => {
        render(
            <UiAccordion
                id='accordion-1'
                title="Accordion Title"
                children="Accordion Content"
                expanded={false}
                onAccordionHandler={() => { }}
            />
        );

        expect(screen.getByText('Accordion Title')).toBeInTheDocument();
    });
    it('toggles content visibility on click', () => {
        render(
            <UiAccordion
                id='accordion-1'
                title="Accordion Title"
                children="Accordion Content"
                expanded={false}
                onAccordionHandler={() => { }}
            />
        );

        const summaryElement = screen.getByRole('button');
        waitFor(() => {
            expect(screen.queryByText('Accordion Content')).not.toBeVisible();
        })

        fireEvent.click(summaryElement);

        expect(screen.getByText('Accordion Content')).toBeVisible();

        fireEvent.click(summaryElement);

        waitFor(() => {
            expect(screen.queryByText('Accordion Content')).not.toBeVisible();
        })
    });
});
