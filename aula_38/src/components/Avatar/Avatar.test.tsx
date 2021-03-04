import { render, screen } from '@testing-library/react';
import Avatar from './index'
import '@testing-library/jest-dom'


test('Existe link da imagem?', () => {
    render(<Avatar />)
    const avatarImg = screen.getByTestId("img")
    expect(avatarImg).toHaveAttribute('src')
})