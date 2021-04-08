import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import PetCard from './PetCard';
import * as petsService from '../../services/petsService';

jest.mock('../../services/petsService');

describe('PetCard Component', () => {
    it('Should display name', () => {
        render(
            <BrowserRouter>
                <PetCard name="Pesho" />
            </BrowserRouter>
        );

        expect(document.querySelector('h3').textContent).toBe('Name: Pesho');
    });

    it('Should increase likes when pet button is pressed', async () => {
        petsService.pet.mockResolvedValue({likes: 6});

        render(
            <BrowserRouter>
                <PetCard likes={5} />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText('Pet'));

        await waitFor(() => screen.getByText('Pet'));

        expect(document.querySelector('.pet-info span').textContent).toBe('6')
    });
});

