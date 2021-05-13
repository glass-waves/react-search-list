import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import NewsSearch from './NewsSearch';
import dotenv from 'dotenv';
dotenv.config();

describe('News Search Container', () => {
    it('renders news articles on the page', async () => {
        render(<NewsSearch />);
        screen.getAllByText('Search for articles');

        const input = await screen.findByLabelText('Search Articles');
        userEvent.type(input, 'Dogs');

        const submitButton = await screen.findByRole('button');
        userEvent.click(submitButton);

        await screen.findByAltText('loading-gif');

        const list = await screen.findAllByTestId('list-element');
        expect(list).toHaveLength(5);
    });
});
