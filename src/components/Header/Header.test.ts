import Header from './Header.svelte';
import { render, screen } from '@testing-library/svelte';

describe('Header', () => {
    test('it should render Header component', () => {
        // Arrange
         render(Header);

         // Act
        const header = screen.getByText('Meets');
        
        // Assert
        expect(header).toBeTruthy();
    })
})