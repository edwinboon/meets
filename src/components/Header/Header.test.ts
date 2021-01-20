import Header from './Header.svelte';
import { render } from '@testing-library/svelte';

describe('Header', () => {
    test('it should render Header component', () => {
        // Arrange
        const { getByText } = render(Header);
        // Act
        const header = getByText('Meets');
        // Assert
        expect(Header).toBeTruthy();
    })
})