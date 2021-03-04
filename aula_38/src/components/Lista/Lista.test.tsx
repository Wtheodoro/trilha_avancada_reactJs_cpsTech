import { render, screen } from '@testing-library/react';
import Lista from './index'

test('Existe o testo?', () => {
    render(<Lista />)
    const  list = screen.getByTestId('lista')
    expect(list).not.toBeEmptyDOMElement
})